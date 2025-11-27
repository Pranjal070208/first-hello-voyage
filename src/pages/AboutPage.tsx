import React from 'react';
import CompetitionSignup from '../components/CompetitionSignup';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-[#020617] via-[#08122B] to-[#0A1833] text-white">
      {/* Outer container with safe padding to prevent content hiding under fixed header */}
      <section className="pt-[calc(theme('spacing.24')+6rem)] sm:pt-[calc(theme('spacing.32')+6rem)] pb-10 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">

          {/* ABOUT IFG */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in px-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-flow leading-tight">
              About IdeaForge Global (IFG)
            </h2>
            <div className="space-y-4 text-gray-200 text-base sm:text-lg max-w-3xl mx-auto">
              <p>
                IdeaForge Global is a youth-led international platform designed to help students develop real business skills through hands-on experience. Instead of learning through theory, participants explore entrepreneurship through practical challenges, expert mentorship, and global collaboration.
              </p>
            </div>
          </div>

          {/* WHAT IFG STANDS FOR */}
          <div className="bg-white/10 backdrop-blur-xl border border-yellow-400/20 rounded-2xl p-8 mb-12 sm:mb-16 shadow-[0_0_25px_rgba(255,215,0,0.1)]">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-flow text-center">
              What IFG Stands For
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Learning by doing",
                "Building ideas with purpose",
                "Working with peers from different countries",
                "Gaining insights directly from industry professionals",
                "Understanding business from a practical, real-world lens"
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-yellow-400/10"
                >
                  <span className="text-yellow-400 text-xl">✓</span>
                  <span className="text-gray-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* VISION, MISSION, CORE VALUES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 mb-12 sm:mb-16 items-center">
            <div className="animate-slide-in-left flex justify-center px-2 sm:px-0 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Global networking illustration"
                className="rounded-2xl shadow-[0_0_25px_rgba(255,215,0,0.2)] w-full max-w-sm sm:max-w-md md:max-w-none object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="space-y-8 animate-slide-in-right px-2 sm:px-0">
              {[{
                title: 'Our Vision',
                desc: 'To build a global community where every student can explore entrepreneurship, innovate confidently, and lead with purpose.',
              }, {
                title: 'Our Mission',
                desc: 'To provide practical skills, mentorship, and opportunities that help young minds grow into future innovators, founders, and leaders.',
              }].map((item, i) => (
                <div key={i}>
                  <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-flow mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 text-base sm:text-lg leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* WHAT MAKES IFG UNIQUE */}
          <div className="bg-white/10 backdrop-blur-xl border border-yellow-400/20 rounded-2xl p-5 sm:p-8 mb-12 sm:mb-16 shadow-[0_0_25px_rgba(255,215,0,0.1)] overflow-hidden">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-flow text-center">
              What Makes IFG Unique
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {[{
                title: 'A complete innovation ecosystem',
                desc: 'Not a single event',
              }, {
                title: 'Focus on collaboration',
                desc: 'Creativity and critical thinking',
              }, {
                title: 'Diverse exposure',
                desc: 'Markets, cultures, and approaches',
              }, {
                title: 'Real business simulations',
                desc: 'Making learning impactful',
              }].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-xl border border-yellow-400/20 p-5 sm:p-6 rounded-xl shadow-[0_0_20px_rgba(255,215,0,0.1)] hover:shadow-[0_0_35px_rgba(255,215,0,0.2)] hover:scale-[1.02] transition-all"
                >
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-sm sm:text-base text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* OUR TEAM */}
          <div className="text-center mb-12 sm:mb-16 px-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-flow mb-4">
              Our Team
            </h3>
            <p className="text-gray-200 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              We are a passionate collective of students working together to create world-class opportunities for youth. Everyone at IFG shares one goal — to make the next generation of entrepreneurs unstoppable.
            </p>
          </div>

          {/* WHY WE EXIST */}
          <div className="bg-white/10 backdrop-blur-xl border border-yellow-400/20 rounded-2xl p-5 sm:p-8 text-center mb-12 sm:mb-16 shadow-[0_0_25px_rgba(255,215,0,0.1)] hover:shadow-[0_0_40px_rgba(255,215,0,0.2)] transition-all">
            <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-flow mb-4">
              Why We Exist
            </h3>
            <p className="text-gray-200 text-base sm:text-lg max-w-3xl mx-auto mb-4">
              We believe innovation should not be limited by resources, geography, or privilege. Every student — no matter where they come from — deserves a place to share their vision and be heard.
            </p>
            <p className="text-gray-200 text-base sm:text-lg max-w-3xl mx-auto font-semibold">
              That's what IdeaForge Global stands for. We're not just hosting competitions — we're building a community where ideas meet purpose, and creativity meets opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* COMPETITION SECTION */}
      <section id="competition" className="py-12 sm:py-16 border-t border-yellow-400/10 bg-[#0A1833] px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="bg-white/10 backdrop-blur-xl border border-yellow-400/20 rounded-2xl p-5 sm:p-8 shadow-[0_0_25px_rgba(255,215,0,0.1)] overflow-hidden">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-flow text-center leading-tight">
              🏆 Global Youth Entrepreneurship Challenge (GYEC)
            </h2>

            <div className="space-y-4 text-gray-200 text-base sm:text-lg">
              <p>GYEC is not just a competition — it’s a journey of exploration, innovation, and growth.</p>
              <p>
                We invite students to submit ideas that can improve lives, communities, or industries. The challenge is designed to be inclusive and easy to join — because what matters most is your creativity, not your background.
              </p>
            </div>

            <div className="space-y-8 mt-8 text-gray-200 text-sm sm:text-base">
              {[{
                title: '📋 How to Participate',
                type: 'ol',
                items: [
                  'Register: Fill the official IFG registration form.',
                  'Prepare Your Idea: Write a short concept (150–250 words) or a 2-minute video pitch.',
                  'Submit: Send it via our submission form before the deadline.',
                  'Evaluation: Our team and judges review all submissions fairly.',
                  'Shortlisting: Best ideas are shortlisted for the final round.',
                  'Presentation: Finalists present their ideas live online.',
                  'Results: Winners are announced and featured globally.',
                ],
              }, {
                title: '🧾 Guidelines for Submission',
                type: 'ul',
                items: [
                  'Original ideas only (no copied work).',
                  'You may submit as an individual or a team.',
                  'Choose a category: Business, Sustainability, Innovation, or Social Impact.',
                  'Submissions must clearly state the problem and your proposed solution.',
                  'Optional visuals or sketches are welcome.',
                ],
              }, {
                title: '⚙️ Judging Criteria',
                type: 'ul',
                items: [
                  'Creativity and uniqueness',
                  'Practicality and feasibility',
                  'Impact and relevance',
                  'Clarity and presentation',
                ],
              }, {
                title: '🎁 Rewards & Recognition',
                type: 'ul',
                items: [
                  'Certificates of Excellence',
                  'Amazon / Flipkart Gift Cards',
                  'Mystery Entrepreneur Box',
                  'Personalized LOR from IFG',
                  'Opportunity to collaborate with partner universities',
                ],
              }].map((section, idx) => (
                <div key={idx}>
                  <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-flow">
                    {section.title}
                  </h3>
                  {section.type === 'ol' ? (
                    <ol className="list-decimal list-inside space-y-1">{section.items.map((i, x) => <li key={x}>{i}</li>)}</ol>
                  ) : (
                    <ul className="list-disc list-inside space-y-1">{section.items.map((i, x) => <li key={x}>{i}</li>)}</ul>
                  )}
                </div>
              ))}

              {/* TIMELINE TABLE */}
              <div className="overflow-x-auto">
                <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-flow">
                  🕐 Timeline
                </h3>
                <table className="w-full text-gray-200 border-collapse border border-yellow-400/20 min-w-[500px]">
                  <thead>
                    <tr className="border-b border-yellow-400/20 bg-white/5">
                      <th className="p-2 text-left">Phase</th>
                      <th className="p-2 text-left">Description</th>
                      <th className="p-2 text-left">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[{
                      phase: 'Registration Opens',
                      desc: 'Students begin to register',
                      date: '20-10-2025',
                    }, {
                      phase: 'Submission Deadline',
                      desc: 'Last date for idea submission',
                      date: '09-11-2025',
                    }, {
                      phase: 'Shortlisting',
                      desc: 'Evaluation and finalist selection',
                      date: '17-11-2025',
                    }, {
                      phase: 'Final Round',
                      desc: 'Virtual presentations',
                      date: '23-11-2025',
                    }, {
                      phase: 'Results Announcement',
                      desc: 'Winners revealed',
                      date: '02-12-2025',
                    }].map((item, idx) => (
                      <tr key={idx} className="border-b border-yellow-400/20">
                        <td className="p-2">{item.phase}</td>
                        <td className="p-2">{item.desc}</td>
                        <td className="p-2">{item.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-10 w-full max-w-2xl mx-auto">
              <CompetitionSignup />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
