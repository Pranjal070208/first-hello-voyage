import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactForm: React.FC = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl">
      <h2 className="text-3xl font-bold mb-6 text-center">Get In Touch</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium mb-2">Name</label>
          <Input id="contact-name" type="text" placeholder="Your Name" required />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium mb-2">Email</label>
          <Input id="contact-email" type="email" placeholder="your@email.com" required />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
          <Input id="subject" type="text" placeholder="What's this about?" required />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
          <Textarea id="message" placeholder="Your message here..." rows={6} required />
        </div>
        <Button type="submit" className="w-full">Send Message</Button>
      </form>
    </div>
  );
};

export default ContactForm;
