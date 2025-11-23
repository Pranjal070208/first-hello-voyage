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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-white via-[#FFD700] to-white bg-clip-text text-transparent animate-gradient-shift">
            Get in Touch with IFG
          </h1>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
