import React, { useState, useEffect } from 'react';
import { supabase } from '../../integrations/supabase/client';
import { Download, Search, Filter } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import * as XLSX from 'xlsx';

interface Registration {
  id: string;
  team_name: string;
  team_members: string[] | null;
  category: string | null;
  project_title: string;
  contact_email: string;
  country: string | null;
  phone_number: string | null;
  status: string | null;
  created_at: string | null;
}

export const RegistrationAnalytics: React.FC = () => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [filteredData, setFilteredData] = useState<Registration[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRegistrations();
    
    const channel = supabase
      .channel('registration-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'competition_entries'
        },
        () => {
          fetchRegistrations();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  useEffect(() => {
    let filtered = registrations;

    if (searchTerm) {
      filtered = filtered.filter(reg => 
        reg.team_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reg.project_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reg.contact_email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (categoryFilter !== 'all') {
      filtered = filtered.filter(reg => reg.category === categoryFilter);
    }

    setFilteredData(filtered);
  }, [searchTerm, categoryFilter, registrations]);

  const fetchRegistrations = async () => {
    try {
      const { data, error } = await supabase
        .from('competition_entries')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setRegistrations(data || []);
      setFilteredData(data || []);
    } catch (error) {
      console.error('Error fetching registrations:', error);
    } finally {
      setLoading(false);
    }
  };

  const downloadExcel = () => {
    const exportData = filteredData.map(reg => ({
      'Team Name': reg.team_name,
      'Team Members': reg.team_members?.join(', ') || '',
      'Competition': reg.project_title,
      'Category': reg.category || '',
      'Contact Email': reg.contact_email,
      'Phone': reg.phone_number || '',
      'Country': reg.country || '',
      'Status': reg.status || '',
      'Submitted Date': reg.created_at ? new Date(reg.created_at).toLocaleDateString() : 'N/A'
    }));

    const ws = XLSX.utils.json_to_sheet(exportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Registrations');
    XLSX.writeFile(wb, `registrations_${new Date().toISOString().split('T')[0]}.xlsx`);
  };

  const categories = [...new Set(registrations
    .map(r => r.category)
    .filter((cat): cat is string => cat !== null))
  ];

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Registration Analytics</h2>
        <Button onClick={downloadExcel} className="gap-2">
          <Download className="h-4 w-4" />
          Download Excel
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by team name, project, or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2 items-center">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-4 py-2 rounded-md border border-border bg-background text-foreground"
          >
            <option value="all">All Categories</option>
            {categories.map(cat => cat && (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="bg-card rounded-lg border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Team Name</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Competition</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Category</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Contact</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Country</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Status</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredData.map((reg) => (
                <tr key={reg.id} className="hover:bg-muted/50">
                  <td className="px-4 py-3 text-sm">
                    <div>
                      <div className="font-medium text-foreground">{reg.team_name}</div>
                      {reg.team_members && reg.team_members.length > 0 && (
                        <div className="text-xs text-muted-foreground">
                          {reg.team_members.join(', ')}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-foreground">{reg.project_title}</td>
                  <td className="px-4 py-3 text-sm">
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                      {reg.category || 'N/A'}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <div className="text-foreground">{reg.contact_email}</div>
                    {reg.phone_number && (
                      <div className="text-xs text-muted-foreground">{reg.phone_number}</div>
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm text-foreground">{reg.country || 'N/A'}</td>
                  <td className="px-4 py-3 text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      reg.status === 'submitted' ? 'bg-green-100 text-green-700' :
                      reg.status === 'draft' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {reg.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">
                    {reg.created_at ? new Date(reg.created_at).toLocaleDateString() : 'N/A'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredData.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No registrations found
          </div>
        )}
      </div>

      <div className="text-sm text-muted-foreground">
        Showing {filteredData.length} of {registrations.length} registrations
      </div>
    </div>
  );
};
