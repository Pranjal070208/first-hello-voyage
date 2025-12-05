import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../integrations/supabase/client';
import { Button } from '../components/ui/button';
import { RegistrationAnalytics } from '../components/admin/RegistrationAnalytics';
import { UsersManagement } from '../components/admin/UsersManagement';
import { CompetitionManagement } from '../components/admin/CompetitionManagement';
import { ContactFormsManagement } from '../components/admin/ContactFormsManagement';
import { LogOut, Users, Trophy, FileText } from 'lucide-react';

type TabType = 'registrations' | 'users' | 'competitions' | 'reachout';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<TabType>('registrations');
  const [stats, setStats] = useState({
    totalRegistrations: 0,
    totalUsers: 0,
    activeCompetitions: 0
  });
  const { signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [regData, userData, compData] = await Promise.all([
        supabase.from('competition_entries').select('id', { count: 'exact', head: true }),
        supabase.from('profiles').select('id', { count: 'exact', head: true }),
        supabase.from('arcade_competitions').select('id', { count: 'exact', head: true }).eq('status', 'active')
      ]);

      setStats({
        totalRegistrations: regData.count || 0,
        totalUsers: userData.count || 0,
        activeCompetitions: compData.count || 0
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
            <Button onClick={handleSignOut} variant="outline" className="gap-2">
              <LogOut className="h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Registrations</p>
                <p className="text-2xl font-bold text-foreground">{stats.totalRegistrations}</p>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Users</p>
                <p className="text-2xl font-bold text-foreground">{stats.totalUsers}</p>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Active Competitions</p>
                <p className="text-2xl font-bold text-foreground">{stats.activeCompetitions}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg border border-border">
          <div className="border-b border-border">
            <nav className="flex gap-4 px-6">
              <button
                onClick={() => setActiveTab('registrations')}
                className={`py-4 px-4 border-b-2 font-medium transition-colors ${
                  activeTab === 'registrations'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                Registration Analytics
              </button>
              <button
                onClick={() => setActiveTab('users')}
                className={`py-4 px-4 border-b-2 font-medium transition-colors ${
                  activeTab === 'users'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                Users
              </button>
              <button
                onClick={() => setActiveTab('competitions')}
                className={`py-4 px-4 border-b-2 font-medium transition-colors ${
                  activeTab === 'competitions'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                Competitions
              </button>
              <button
                onClick={() => setActiveTab('reachout')}
                className={`py-4 px-4 border-b-2 font-medium transition-colors ${
                  activeTab === 'reachout'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                Reach Out
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'registrations' && <RegistrationAnalytics />}
            {activeTab === 'users' && <UsersManagement />}
            {activeTab === 'competitions' && <CompetitionManagement />}
            {activeTab === 'reachout' && <ContactFormsManagement />}
          </div>
        </div>
      </main>
    </div>
  );
}
