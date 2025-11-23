import React, { useState, useEffect } from 'react';
import { supabase } from '../../integrations/supabase/client';
import { Plus, Edit, Trash2, Upload } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

interface Competition {
  id: string;
  title: string;
  description: string | null;
  category: string;
  image_url: string | null;
  registration_link: string | null;
  deadline: string | null;
  status: string | null;
  created_at: string | null;
}

export const CompetitionManagement: React.FC = () => {
  const [competitions, setCompetitions] = useState<Competition[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    image_url: '',
    registration_link: '',
    deadline: '',
    status: 'active'
  });

  useEffect(() => {
    fetchCompetitions();
  }, []);

  const fetchCompetitions = async () => {
    try {
      const { data, error } = await supabase
        .from('arcade_competitions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setCompetitions(data || []);
    } catch (error) {
      console.error('Error fetching competitions:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('competition-images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('competition-images')
        .getPublicUrl(filePath);

      setFormData(prev => ({ ...prev, image_url: publicUrl }));
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (editingId) {
        const { error } = await supabase
          .from('arcade_competitions')
          .update(formData)
          .eq('id', editingId);

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('arcade_competitions')
          .insert([formData]);

        if (error) throw error;
      }

      resetForm();
      fetchCompetitions();
    } catch (error) {
      console.error('Error saving competition:', error);
      alert('Error saving competition');
    }
  };

  const handleEdit = (competition: Competition) => {
    setFormData({
      title: competition.title,
      description: competition.description || '',
      category: competition.category,
      image_url: competition.image_url || '',
      registration_link: competition.registration_link || '',
      deadline: competition.deadline || '',
      status: competition.status || 'active'
    });
    setEditingId(competition.id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this competition?')) return;

    try {
      const { error } = await supabase
        .from('arcade_competitions')
        .delete()
        .eq('id', id);

      if (error) throw error;
      fetchCompetitions();
    } catch (error) {
      console.error('Error deleting competition:', error);
      alert('Error deleting competition');
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      category: '',
      image_url: '',
      registration_link: '',
      deadline: '',
      status: 'active'
    });
    setEditingId(null);
    setShowForm(false);
  };

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Competition Management</h2>
        <Button onClick={() => setShowForm(!showForm)} className="gap-2">
          <Plus className="h-4 w-4" />
          {showForm ? 'Cancel' : 'Add Competition'}
        </Button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-card p-6 rounded-lg border border-border space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Title *</label>
            <Input
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Competition title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Description *</label>
            <Textarea
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Competition description"
              rows={4}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Category *</label>
              <Input
                required
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                placeholder="e.g., Robotics, AI, Web Development"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Registration Link</label>
            <Input
              type="url"
              value={formData.registration_link}
              onChange={(e) => setFormData({ ...formData, registration_link: e.target.value })}
              placeholder="https://..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Deadline</label>
            <Input
              type="datetime-local"
              value={formData.deadline}
              onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Competition Image</label>
            <div className="flex gap-4 items-center">
              <label className="cursor-pointer">
                <div className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
                  <Upload className="h-4 w-4" />
                  {uploading ? 'Uploading...' : 'Upload Image'}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  disabled={uploading}
                />
              </label>
              {formData.image_url && (
                <img src={formData.image_url} alt="Preview" className="h-20 w-20 object-cover rounded" />
              )}
            </div>
          </div>

          <div className="flex gap-2">
            <Button type="submit" disabled={uploading}>
              {editingId ? 'Update' : 'Create'} Competition
            </Button>
            <Button type="button" variant="outline" onClick={resetForm}>
              Cancel
            </Button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {competitions.map((comp) => (
          <div key={comp.id} className="bg-card rounded-lg border border-border overflow-hidden">
            {comp.image_url && (
              <img src={comp.image_url} alt={comp.title} className="w-full h-48 object-cover" />
            )}
            <div className="p-4 space-y-2">
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-foreground">{comp.title}</h3>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  comp.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                }`}>
                  {comp.status}
                </span>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">{comp.description}</p>
              <p className="text-xs text-primary">{comp.category}</p>
              {comp.deadline && (
                <p className="text-xs text-muted-foreground">
                  Deadline: {new Date(comp.deadline).toLocaleDateString()}
                </p>
              )}
              <div className="flex gap-2 pt-2">
                <Button size="sm" variant="outline" onClick={() => handleEdit(comp)}>
                  <Edit className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" onClick={() => handleDelete(comp.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {competitions.length === 0 && !showForm && (
        <div className="text-center py-12 text-muted-foreground">
          No competitions yet. Click "Add Competition" to create one.
        </div>
      )}
    </div>
  );
};
