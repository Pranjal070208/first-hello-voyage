import React from 'react';
import ContactForm from '../components/ContactForm';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ContactPage: React.FC = () => {
  const formSection = useScrollAnimation();

  return (
    <div className="min-h-screen pt-24" style={{ backgroundColor: '#FAEBD7' }}>
      <section className="py-12 sm:py-20">
        <div 
          ref={formSection.elementRef}
          className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal ${formSection.isVisible ? 'visible' : ''}`}
        >
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
