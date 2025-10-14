import React, { useState } from 'react';
import { Trophy, Users, Plus, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { submitCompetitionEntry } from '../lib/supabase';
import AuthModal from './AuthModal';

const CompetitionSignup: React.FC = () => {
  const { user, profile } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    team_name: '',
    project_title: '',
    project_description: '',
    category: '',
    team_members: [''],
    contact_email: '',
    phone_number: '',
    school_organization: '',
    country: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Update contact email when user changes
  React.useEffect(() => {
    if (user && !formData.contact_email) {
      setFormData(prev => ({
        ...prev,
        contact_email: user.email || ''
      }));
    }
  }, [user, formData.contact_email]);
  const categories = [
    'Business',
    'Sustainability',
    'Innovation',
    'Social Impact',
    'Technology',
    'Healthcare',
    'Education',
    'Other'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleTeamMemberChange = (index: number, value: string) => {
    const newTeamMembers = [...formData.team_members];
    newTeamMembers[index] = value;
    setFormData({
      ...formData,
      team_members: newTeamMembers
    });
  };

  const addTeamMember = () => {
    if (formData.team_members.length < 5) {
      setFormData({
        ...formData,
        team_members: [...formData.team_members, '']
      });
    }
  };

  const removeTeamMember = (index: number) => {
    if (formData.team_members.length > 1) {
      const newTeamMembers = formData.team_members.filter((_, i) => i !== index);
      setFormData({
        ...formData,
        team_members: newTeamMembers
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      setIsAuthModalOpen(true);
      return;
    }

    setLoading(true);
    setError('');

    try {
      const filteredTeamMembers = formData.team_members.filter(member => member.trim() !== '');
      
      const { error } = await submitCompetitionEntry({
        ...formData,
        team_members: filteredTeamMembers
      });
      
      if (error) {
        setError(error.message);
      } else {
        setSuccess(true);
        setFormData({
          team_name: '',
          project_title: '',
          project_description: '',
          category: '',
          team_members: [''],
          contact_email: user?.email || formData.contact_email,
          phone_number: '',
          school_organization: '',
          country: ''
        });
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center">
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg animate-bounce-in">
          <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-4 animate-pulse-glow" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Registration Successful!</h3>
        <p className="text-gray-600 mb-4">
          Your GYEC entry has been submitted successfully. Our team will review your submission and contact you with next steps. Good luck!
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="w-full hero-gradient text-white py-4 rounded-lg font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 pulse-glow hover-lift animate-bounce-in"
        >
          Submit Another Entry
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white p-8 rounded-2xl shadow-xl">
        <div className="text-center mb-8">
          <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Join the Global Youth Entrepreneurship Challenge</h3>
          <p className="text-gray-600 mb-4">
            Ready to showcase your innovative idea? Fill out the form below to register for GYEC.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-left">
            <h4 className="font-bold text-gray-900 mb-2">How to Participate:</h4>
            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
              <li>Register via this form</li>
              <li>Prepare a short concept (150–250 words) or a 2-minute video pitch</li>
              <li>Submit before deadline</li>
              <li>Evaluation by our judging panel</li>
              <li>Shortlisting announcement</li>
              <li>Presentation (if selected)</li>
              <li>Results announcement</li>
            </ol>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="team_name" className="block text-sm font-medium text-gray-700 mb-2">
                Team Name *
              </label>
              <input
                type="text"
                id="team_name"
                name="team_name"
                value={formData.team_name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="Enter your team name"
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                Category *
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="project_title" className="block text-sm font-medium text-gray-700 mb-2">
              Project Title *
            </label>
            <input
              type="text"
              id="project_title"
              name="project_title"
              value={formData.project_title}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              placeholder="What's your project called?"
            />
          </div>

          <div>
            <label htmlFor="project_description" className="block text-sm font-medium text-gray-700 mb-2">
              Project Description *
            </label>
            <textarea
              id="project_description"
              name="project_description"
              value={formData.project_description}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
              placeholder="Describe your project, its impact, and how it solves a real-world problem..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Team Members * (Individual or up to 4 members)
            </label>
            {formData.team_members.map((member, index) => (
              <div key={index} className="flex items-center space-x-2 mb-2">
                <input
                  type="text"
                  value={member}
                  onChange={(e) => handleTeamMemberChange(index, e.target.value)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder={`Team member ${index + 1} name`}
                  required={index === 0}
                />
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => removeTeamMember(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            ))}
            {formData.team_members.length < 5 && (
              <button
                type="button"
                onClick={addTeamMember}
                className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium"
              >
                <Plus className="w-4 h-4" />
                <span>Add Team Member</span>
              </button>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="contact_email" className="block text-sm font-medium text-gray-700 mb-2">
                Contact Email *
              </label>
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                value={formData.contact_email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="team@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone_number"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="school_organization" className="block text-sm font-medium text-gray-700 mb-2">
                School/Organization
              </label>
              <input
                type="text"
                id="school_organization"
                name="school_organization"
                value={formData.school_organization}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="Your school or organization"
              />
            </div>

            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                Country *
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="Your country"
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full hero-gradient text-white py-4 rounded-lg font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 pulse-glow"
          >
            {loading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            ) : (
              <>
                <Users className="w-5 h-5" />
                <span>{user ? 'Submit Entry' : 'Sign In to Submit'}</span>
              </>
            )}
          </button>
        </form>
      </div>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode="signup"
        onModeChange={() => {}}
      />
    </>
  );
};

export default CompetitionSignup;
