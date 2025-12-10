import React from "react";
import ContactForm from "../components/ContactForm";

const ContactPage: React.FC = () => {
  return (
    <div
      id="contact"
      className="min-h-screen bg-gradient-to-b from-[#000814] via-[#031B3A] to-[#1A1A1A] text-white overflow-hidden relative pt-24"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#FFD700]/15 to-transparent rounded-full blur-[160px] animate-float-slow"></div>
        <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-[#007BFF]/20 to-transparent rounded-full blur-[200px] animate-float"></div>
      </div>

      <section className="py-12 sm:py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-white via-[#FFD700] to-white bg-clip-text text-transparent animate-gradient-shift">
            Join the IFG Community
          </h1>
          <p className="text-center text-gray-300 text-lg mb-4 max-w-3xl mx-auto">
            Become part of an international movement that empowers students to think, create, collaborate, and innovate.
          </p>

          {/* Who Can Join */}
          <div className="bg-white/10 backdrop-blur-xl border border-[#FFD700]/20 rounded-2xl p-8 mb-12 shadow-[0_0_25px_rgba(255,215,0,0.1)]">
            <h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFD700] to-white">
              Who Can Join?
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
              {[
                { icon: "🎓", label: "Students" },
                { icon: "👨‍🏫", label: "Mentors" },
                { icon: "🏫", label: "Institutions" },
                { icon: "🤝", label: "Sponsors" },
                { icon: "🚀", label: "Startup Ecosystems" }
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <div className="text-gray-200 font-semibold">{item.label}</div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold mb-4 text-center text-[#FFD700]">
              Why Join IFG?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Practical learning",
                "Global community",
                "Hands-on teamwork",
                "Skill development",
                "Professional portfolios"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-[#FFD700]/10">
                  <span className="text-[#FFD700]">✓</span>
                  <span className="text-gray-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-white via-[#FFD700] to-white bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="bg-white/10 backdrop-blur-xl border border-[#FFD700]/20 rounded-2xl p-6 sm:p-8 text-center shadow-[0_0_25px_rgba(255,215,0,0.1)]">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-[#FFD700]">Contact Information</h3>
            <div className="space-y-4 text-gray-200 text-base sm:text-lg">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3">
                <span>📧 Email:</span>
                <a href="mailto:ideaforgeglobal.official@gmail.com" className="text-[#FFD700] hover:underline break-all text-sm sm:text-base">
                  ideaforgeglobal.official@gmail.com
                </a>
              </div>
              <div>
                <span>🌐 Website: ideaforgeglobal.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
