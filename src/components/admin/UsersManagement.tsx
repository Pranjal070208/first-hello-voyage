import React, { useState, useEffect } from 'react';
import { supabase } from '../../integrations/supabase/client';
import { Download, Search } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import * as XLSX from 'xlsx';

interface UserProfile {
  id: string;
  full_name: string | null;
  email: string | null;
  phone_number: string | null;
  created_at: string | null;
}

export const UsersManagement: React.FC = () => {
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<UserProfile[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();

    const channel = supabase
      .channel('profile-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'profiles'
        },
        () => {
          fetchUsers();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  useEffect(() => {
    let filtered = users;

    if (searchTerm) {
      filtered = filtered.filter(user =>
        user.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.phone_number?.includes(searchTerm)
      );
    }

    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  const fetchUsers = async () => {
    try {
      // First get all profiles
      const { data: profilesData, error: profilesError } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });

      if (profilesError) throw profilesError;

      // Get current session for auth header
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        setUsers(profilesData || []);
        setFilteredUsers(profilesData || []);
        setLoading(false);
        return;
      }

      // Fetch auth users via edge function
      const response = await fetch(
        'https://wlhfqgfkkfumasutrvct.supabase.co/functions/v1/get-auth-users',
        {
          headers: {
            'Authorization': `Bearer ${session.access_token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.ok) {
        const { users: authUsers } = await response.json();
        
        // Merge profile data with auth data
        const mergedUsers = profilesData?.map(profile => {
          const authUser = authUsers?.find((u: { id: string; email: string }) => u.id === profile.id);
          return {
            ...profile,
            email: profile.email || authUser?.email || null,
          };
        }) || [];

        setUsers(mergedUsers);
        setFilteredUsers(mergedUsers);
      } else {
        console.error('Error fetching auth users from edge function');
        setUsers(profilesData || []);
        setFilteredUsers(profilesData || []);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  const downloadExcel = () => {
    const exportData = filteredUsers.map(user => ({
      'Full Name': user.full_name || '',
      'Email': user.email || '',
      'Phone Number': user.phone_number || '',
      'Registration Date': user.created_at ? new Date(user.created_at).toLocaleDateString() : 'N/A'
    }));

    const ws = XLSX.utils.json_to_sheet(exportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Users');
    XLSX.writeFile(wb, `users_${new Date().toISOString().split('T')[0]}.xlsx`);
  };

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Users Management</h2>
        <Button onClick={downloadExcel} className="gap-2">
          <Download className="h-4 w-4" />
          Download Excel
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search by name, email, or phone..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="bg-card rounded-lg border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Full Name</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Email</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Phone Number</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Registration Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-muted/50">
                  <td className="px-4 py-3 text-sm font-medium text-foreground">
                    {user.full_name || 'N/A'}
                  </td>
                  <td className="px-4 py-3 text-sm text-foreground">{user.email || 'N/A'}</td>
                  <td className="px-4 py-3 text-sm text-foreground">{user.phone_number || 'N/A'}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">
                    {user.created_at ? new Date(user.created_at).toLocaleDateString() : 'N/A'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredUsers.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No users found
          </div>
        )}
      </div>

      <div className="text-sm text-muted-foreground">
        Showing {filteredUsers.length} of {users.length} users
      </div>
    </div>
  );
};
