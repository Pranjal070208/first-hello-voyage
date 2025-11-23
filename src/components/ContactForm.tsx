import React, { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { submitContactForm } from "../lib/supabase";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { error } = await submitContactForm(formData);

      if (error) {
        setError(error.message);
      } else {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone_number: "",
          subject: "",
          message: "",
        });
        setTimeout(() => setSuccess(false), 5000);
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-xl text-center border border-gold/20 shadow-xl animate-fade-in">
        <CheckCircle className="w-16 h-16 text-[#FFD700] mx-auto mb-4 animate-bounce-in" />
        <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-[#FFD700] to-white bg-clip-text text-transparent">
          Message Sent!
        </h3>
        <p className="text-gray-300 mt-2">
          Thank you for contacting IdeaForge Global. We'll respond within
          24–48 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-xl border border-gold/20 shadow-lg animate-fade-in">
      <div className="text-center mb-10">
        <h3 className="text-4xl font-bold bg-gradient-to-r from-white via-[#FFD700] to-white bg-clip-text text-transparent animate-gradient-shift">
          Reach Out
        </h3>
        <p className="text-gray-300 mt-4">
          Have questions about competitions, partnerships, or joining IFG? We're
          here to help!
        </p>
        <div className="space-y-1 text-left max-w-2xl mx-auto mt-6 text-gray-300">
          <p>
            <span className="font-semibold text-[#FFD700]">Email:</span>{" "}
            <a
              href="mailto:ideaforgeglobal@gmail.com"
              className="hover:underline"
            >
              ideaforgeglobal@gmail.com
            </a>
          </p>
          <p>
            <span className="font-semibold text-[#FFD700]">Instagram:</span>{" "}
            <a
              href="https://instagram.com/ideaforgeglobal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @ideaforgeglobal
            </a>
          </p>
          <p>
            <span className="font-semibold text-[#FFD700]">LinkedIn:</span>{" "}
            <a
              href="https://www.linkedin.com/company/ideaforge-global"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com/company/ideaforge-global
            </a>
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-500 text-white focus:ring-2 focus:ring-[#FFD700] transition-all"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-500 text-white focus:ring-2 focus:ring-[#FFD700] transition-all"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="phone_number"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone_number"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-500 text-white focus:ring-2 focus:ring-[#FFD700] transition-all"
            placeholder="+1 212-555-1234"
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Subject *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-500 text-white focus:ring-2 focus:ring-[#FFD700] transition-all"
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

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-500 text-white focus:ring-2 focus:ring-[#FFD700] transition-all resize-none"
            placeholder="Tell us how we can help you..."
          />
        </div>

        {error && (
          <div className="bg-red-900/40 border border-red-400 text-red-200 px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-white via-[#FFD700] to-white text-black py-4 rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-gold/40 disabled:opacity-50 flex items-center justify-center space-x-2"
        >
          {loading ? (
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
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
