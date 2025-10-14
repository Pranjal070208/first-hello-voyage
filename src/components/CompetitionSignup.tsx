import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const CompetitionSignup: React.FC = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Registration Submitted!",
      description: "We'll contact you soon with more details.",
    });
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl">
      <h3 className="text-2xl font-bold mb-6 text-center">Register for GYEC</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
          <Input id="name" type="text" placeholder="Your Name" required />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
          <Input id="email" type="email" placeholder="your@email.com" required />
        </div>
        <div>
          <label htmlFor="school" className="block text-sm font-medium mb-2">School/University</label>
          <Input id="school" type="text" placeholder="Institution Name" required />
        </div>
        <div>
          <label htmlFor="idea" className="block text-sm font-medium mb-2">Brief Idea Description</label>
          <Textarea id="idea" placeholder="Tell us about your innovative idea..." rows={4} required />
        </div>
        <Button type="submit" className="w-full">Submit Registration</Button>
      </form>
    </div>
  );
};

export default CompetitionSignup;
