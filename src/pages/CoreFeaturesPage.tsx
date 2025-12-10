import React from "react";

const CoreFeaturesPage: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#020617] via-[#08122B] to-[#0A1833] text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-flow">
            IFG Core Features
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Explore the powerful tools and programs that make IdeaForge Global a complete innovation ecosystem.
          </p>
        </div>

        {/* Features Grid */}
        <div className="space-y-12">
          {/* Skill Drops */}
          <div className="bg-white/10 backdrop-blur-xl border border-yellow-400/20 rounded-2xl p-6 sm:p-8 shadow-[0_0_25px_rgba(255,215,0,0.1)] hover:shadow-[0_0_40px_rgba(255,215,0,0.2)] transition-all animate-slide-in-left">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-2xl sm:text-3xl flex-shrink-0">
                📚
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-flow break-words">
                Skill Drops
              </h2>
            </div>
            <p className="text-gray-200 text-lg mb-4">
              Short and powerful learning modules covering:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Branding & marketing psychology",
                "Digital marketing",
                "Finance basics",
                "Entrepreneurship foundations",
                "Sales & communication",
                "Consumer behaviour"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-yellow-400/10">
                  <span className="text-yellow-400">✓</span>
                  <span className="text-gray-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Business Competitions */}
          <div className="bg-white/10 backdrop-blur-xl border border-yellow-400/20 rounded-2xl p-6 sm:p-8 shadow-[0_0_25px_rgba(255,215,0,0.1)] hover:shadow-[0_0_40px_rgba(255,215,0,0.2)] transition-all animate-slide-in-right">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-2xl sm:text-3xl flex-shrink-0">
                🏆
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-flow break-words">
                Business Competitions
              </h2>
            </div>
            <p className="text-gray-200 text-lg mb-4">
              Regular contests where students:
            </p>
            <ul className="space-y-3">
              {[
                "Pitch ideas",
                "Solve case challenges",
                "Build marketing campaigns",
                "Participate in themed hackathons"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-200">
                  <span className="text-yellow-400 mt-1">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mini Marketplace */}
          <div className="bg-white/10 backdrop-blur-xl border border-yellow-400/20 rounded-2xl p-6 sm:p-8 shadow-[0_0_25px_rgba(255,215,0,0.1)] hover:shadow-[0_0_40px_rgba(255,215,0,0.2)] transition-all animate-slide-in-left">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-2xl sm:text-3xl flex-shrink-0">
                🛒
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-flow break-words">
                Mini Marketplace
              </h2>
            </div>
            <p className="text-gray-200 text-lg mb-4">
              A practical business simulation where students:
            </p>
            <ul className="space-y-3">
              {[
                "Create digital products",
                "Sell items using IFG Credits",
                "Learn pricing, branding, and value creation"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-200">
                  <span className="text-yellow-400 mt-1">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Global Collaboration Labs */}
          <div className="bg-white/10 backdrop-blur-xl border border-yellow-400/20 rounded-2xl p-6 sm:p-8 shadow-[0_0_25px_rgba(255,215,0,0.1)] hover:shadow-[0_0_40px_rgba(255,215,0,0.2)] transition-all animate-slide-in-right">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center text-2xl sm:text-3xl flex-shrink-0">
                🌐
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-flow break-words">
                Global Collaboration Labs
              </h2>
            </div>
            <p className="text-gray-200 text-lg mb-4">
              Cross-country teams work together on:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Business challenges",
                "Innovation tasks",
                "Industry themes",
                "Realistic problem-solving"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-yellow-400/10">
                  <span className="text-yellow-400">✓</span>
                  <span className="text-gray-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mentorship Roulette */}
          <div className="bg-white/10 backdrop-blur-xl border border-yellow-400/20 rounded-2xl p-6 sm:p-8 shadow-[0_0_25px_rgba(255,215,0,0.1)] hover:shadow-[0_0_40px_rgba(255,215,0,0.2)] transition-all animate-slide-in-left">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-2xl sm:text-3xl flex-shrink-0">
                🎯
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-flow break-words">
                Mentorship Roulette
              </h2>
            </div>
            <p className="text-gray-200 text-lg">
              Fast-paced 20–30 minute sessions where students get quick clarity and guidance from experts.
            </p>
          </div>

          {/* Innovation Arcade */}
          <div className="bg-white/10 backdrop-blur-xl border border-yellow-400/20 rounded-2xl p-6 sm:p-8 shadow-[0_0_25px_rgba(255,215,0,0.1)] hover:shadow-[0_0_40px_rgba(255,215,0,0.2)] transition-all animate-slide-in-right">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-2xl sm:text-3xl flex-shrink-0">
                🎮
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-flow break-words">
                Innovation Arcade
              </h2>
            </div>
            <p className="text-gray-200 text-lg mb-4">
              A showcase zone where students display:
            </p>
            <ul className="space-y-3">
              {[
                "Pitch decks",
                "Prototypes",
                "Ideas",
                "Campaign work"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-200">
                  <span className="text-yellow-400 mt-1">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-300 mt-4 italic">
              This becomes part of their professional portfolio.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-white/10 backdrop-blur-xl border border-yellow-400/20 rounded-2xl p-10 shadow-[0_0_25px_rgba(255,215,0,0.1)]">
            <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-flow">
              Experience All Features
            </h3>
            <p className="text-gray-200 text-lg mb-6">
              Join IFG today and unlock access to our complete innovation ecosystem.
            </p>
            <a
              href="/about#competition"
              className="inline-block px-8 py-4 rounded-full font-semibold text-lg text-gray-900 bg-gradient-to-r from-yellow-400 to-white hover:scale-105 transition-all shadow-lg"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFeaturesPage;
