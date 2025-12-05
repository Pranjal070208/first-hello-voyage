import React from 'react';
const AboutPage: React.FC = () => {
  return <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-[#020617] via-[#08122B] to-[#0A1833] text-white">
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
              {["Learning by doing", "Building ideas with purpose", "Working with peers from different countries", "Gaining insights directly from industry professionals", "Understanding business from a practical, real-world lens"].map((item, index) => <div key={index} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-yellow-400/10">
                  <span className="text-yellow-400 text-xl">✓</span>
                  <span className="text-gray-200">{item}</span>
                </div>)}
            </div>
          </div>

          {/* VISION, MISSION, CORE VALUES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 mb-12 sm:mb-16 items-center">
            <div className="animate-slide-in-left flex justify-center px-2 sm:px-0 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Global networking illustration" className="rounded-2xl shadow-[0_0_25px_rgba(255,215,0,0.2)] w-full max-w-sm sm:max-w-md md:max-w-none object-cover hover:scale-105 transition-transform duration-500" />
            </div>

            <div className="space-y-8 animate-slide-in-right px-2 sm:px-0">
              {[{
              title: 'Our Vision',
              desc: 'To build a global community where every student can explore entrepreneurship, innovate confidently, and lead with purpose.'
            }, {
              title: 'Our Mission',
              desc: 'To provide practical skills, mentorship, and opportunities that help young minds grow into future innovators, founders, and leaders.'
            }].map((item, i) => <div key={i}>
                  <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-flow mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 text-base sm:text-lg leading-relaxed">{item.desc}</p>
                </div>)}
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
              desc: 'Not a single event'
            }, {
              title: 'Focus on collaboration',
              desc: 'Creativity and critical thinking'
            }, {
              title: 'Diverse exposure',
              desc: 'Markets, cultures, and approaches'
            }, {
              title: 'Real business simulations',
              desc: 'Making learning impactful'
            }].map((item, index) => <div key={index} className="bg-white/10 backdrop-blur-xl border border-yellow-400/20 p-5 sm:p-6 rounded-xl shadow-[0_0_20px_rgba(255,215,0,0.1)] hover:shadow-[0_0_35px_rgba(255,215,0,0.2)] hover:scale-[1.02] transition-all">
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-sm sm:text-base text-gray-300">{item.desc}</p>
                </div>)}
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
      
    </div>;
};
export default AboutPage;