import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { submitContactForm } from '../lib/supabase';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { error } = await submitContactForm(formData);
      
      if (error) {
        setError(error.message);
      } else {
        setSuccess(true);
        setFormData({ name: '', email: '', phone_number: '', subject: '', message: '' });
        setTimeout(() => setSuccess(false), 5000);
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
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-600">
          Thank you for contacting IdeaForge Global. We'll respond to your message within 24-48 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl hover-lift animate-fade-in">
      <div className="text-center mb-8 animate-bounce-in">
        <h3 className="text-3xl font-bold text-gray-900 mb-4 gradient-text animate-gradient-shift">Get in Touch</h3>
        <p className="text-gray-600 animate-fade-in stagger-2 mb-6">
          Have questions about competitions, partnerships, or want to join our team? We're here to help!
        </p>
        <div className="space-y-2 text-left max-w-2xl mx-auto">
          <p className="text-gray-700"><span className="font-semibold">Email:</span> ideaforgeglobal@gmail.com</p>
          <p className="text-gray-700"><span className="font-semibold">Website:</span> www.ideaforgeglobal.com</p>
          <p className="text-gray-700"><span className="font-semibold">LinkedIn:</span> <a href="https://www.linkedin.com/company/ideaforge-global" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/company/ideaforge-global</a></p>
          <p className="text-gray-700"><span className="font-semibold">Instagram:</span> <a href="https://instagram.com/ideaforgeglobal" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">@ideaforgeglobal</a></p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in stagger-3">
        <div className="grid md:grid-cols-2 gap-6 animate-slide-in-left stagger-1">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover-glow"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover-glow"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div className="animate-slide-in-right stagger-2">
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover-glow"
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>

        <div className="animate-slide-in-right stagger-2">
          <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone_number"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover-glow"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div className="animate-slide-in-left stagger-3">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            Subject *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover-glow"
          >
            <option value="">Select a subject</option>
            <option value="Competition Inquiry">Competition Inquiry</option>
            <option value="Technical Support">Technical Support</option>
            <option value="Partnership">Partnership Opportunity</option>
            <option value="Media Inquiry">Media Inquiry</option>
            <option value="General Question">General Question</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="animate-slide-in-right stagger-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none hover-glow"
            placeholder="Tell us how we can help you..."
          />
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg animate-shake">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full hero-gradient text-white py-4 rounded-lg font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 pulse-glow hover-lift animate-bounce-in stagger-5"
        >
          {loading ? (
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white animate-rotate"></div>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
