import { useState, useEffect } from 'react';
import { supabase } from '../../integrations/supabase/client';
import { Mail, Phone, User, MessageSquare } from 'lucide-react';

interface ContactForm {
  id: string;
  name: string;
  email: string;
  phone_number: string | null;
  subject: string;
  message: string;
  created_at: string | null;
}

export function ContactFormsManagement() {
  const [contactForms, setContactForms] = useState<ContactForm[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContactForms();
  }, []);

  const fetchContactForms = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_forms')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setContactForms(data || []);
    } catch (error) {
      console.error('Error fetching contact forms:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center py-8 text-muted-foreground">Loading contact forms...</div>;
  }

  if (contactForms.length === 0) {
    return <div className="text-center py-8 text-muted-foreground">No contact form submissions yet.</div>;
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground">Contact Form Submissions ({contactForms.length})</h3>
      <div className="grid gap-4">
        {contactForms.map((form) => (
          <div key={form.id} className="bg-background border border-border rounded-lg p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">
                {new Date(form.created_at || '').toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </span>
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                {form.subject}
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-foreground">{form.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href={`mailto:${form.email}`} className="text-sm text-primary hover:underline">
                  {form.email}
                </a>
              </div>
              {form.phone_number && (
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-foreground">{form.phone_number}</span>
                </div>
              )}
            </div>
            
            <div className="pt-2 border-t border-border">
              <div className="flex items-start gap-2">
                <MessageSquare className="h-4 w-4 text-muted-foreground mt-0.5" />
                <p className="text-sm text-muted-foreground">{form.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
