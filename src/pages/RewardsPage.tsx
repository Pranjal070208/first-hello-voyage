import React from "react";
const RewardsPage: React.FC = () => {
  return <section className="min-h-screen bg-gradient-to-b from-[#020617] via-[#08122B] to-[#0A1833] text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-flow">
            Recognition & Rewards
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Your hard work and innovation deserve to be celebrated. Here's what you can earn at IFG.
          </p>
        </div>

        {/* Main Rewards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[{
          icon: "🏆",
          title: "Blockchain Certificates",
          description: "Professionally verifiable certificates that add credibility to student profiles.",
          gradient: "from-yellow-400 to-yellow-600",
          features: ["Blockchain-verified authenticity", "Recognized by institutions worldwide", "Shareable on LinkedIn and resumes", "Permanent digital record"]
        }, {
          icon: "📜",
          title: "Letters of Recommendation",
          description: "Provided by mentors and industry leaders based on genuine effort and contribution.",
          gradient: "from-blue-400 to-blue-600",
          features: ["Personalized by industry experts", "Based on your actual performance", "Valuable for university applications", "Opens doors to opportunities"]
        }, {
          icon: "🎁",
          title: "Entrepreneur Kits",
          description: "Special resources that help students continue building ideas beyond IFG.",
          gradient: "from-purple-400 to-purple-600",
          features: ["Curated business tools", "Templates and frameworks", "Learning resources", "Exclusive guides"]
        }, {
          icon: "✨",
          title: "Spotlight Features",
          description: "Standout performers are highlighted on IFG's platforms for visibility and recognition.",
          gradient: "from-pink-400 to-pink-600",
          features: ["Featured on IFG website", "Social media highlights", "Newsletter features", "Global visibility"]
        }].map((item, index) => <div key={index} className="bg-white/10 backdrop-blur-xl border border-yellow-400/20 rounded-2xl p-8 shadow-[0_0_25px_rgba(255,215,0,0.1)] hover:shadow-[0_0_40px_rgba(255,215,0,0.2)] transition-all animate-slide-in-left" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-4xl mb-6 shadow-lg`}>
                {item.icon}
              </div>
              <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-flow">
                {item.title}
              </h2>
              <p className="text-gray-200 text-lg leading-relaxed mb-6">
                {item.description}
              </p>
              <div className="space-y-2">
                {item.features.map((feature, idx) => <div key={idx} className="flex items-start gap-3">
                    <span className="text-yellow-400 mt-1">✓</span>
                    <span className="text-gray-300">{feature}</span>
                  </div>)}
              </div>
            </div>)}
        </div>

        {/* Competition Prizes */}
        

        {/* Beyond the Prizes */}
        <div className="bg-gradient-to-r from-yellow-400/10 to-blue-400/10 backdrop-blur-xl border border-yellow-400/20 rounded-2xl p-10 shadow-[0_0_25px_rgba(255,215,0,0.1)] text-center animate-fade-in">
          <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-flow">
            Beyond the Prizes
          </h2>
          <p className="text-gray-200 text-lg max-w-3xl mx-auto mb-8">
            While prizes are exciting, the real reward is the experience itself. You'll gain skills, confidence, connections, and a portfolio that showcases your innovative thinking to the world.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {[{
            icon: "🎓",
            label: "Learning"
          }, {
            icon: "🤝",
            label: "Networking"
          }, {
            icon: "💼",
            label: "Portfolio"
          }, {
            icon: "🚀",
            label: "Growth"
          }].map((item, index) => <div key={index} className="bg-white/10 rounded-xl p-6 border border-yellow-400/20">
                <div className="text-4xl mb-2">{item.icon}</div>
                <div className="text-gray-200 font-semibold">{item.label}</div>
              </div>)}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-white/10 backdrop-blur-xl border border-yellow-400/20 rounded-2xl p-10 shadow-[0_0_25px_rgba(255,215,0,0.1)]">
            <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-flow">
              Start Earning Recognition Today
            </h3>
            <p className="text-gray-200 text-lg mb-6">
              Your journey to becoming a recognized innovator begins with one step.
            </p>
            <a href="/about#competition" className="inline-block px-8 py-4 rounded-full font-semibold text-lg text-gray-900 bg-gradient-to-r from-yellow-400 to-white hover:scale-105 transition-all shadow-lg">
              Register for GYEC
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default RewardsPage;