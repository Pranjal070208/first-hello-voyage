import React from "react";

const ImpactPage: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#020617] via-[#08122B] to-[#0A1833] text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-flow">
            Beyond the Classroom: Real-World Impact
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            IFG transforms students into confident leaders ready to tackle tomorrow's challenges.
          </p>
        </div>

        {/* Main Impact Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[
            {
              icon: "🌍",
              title: "Global Exposure",
              description: "Connect with peers and mentors from different countries, understanding diverse markets and cultural perspectives.",
              gradient: "from-blue-400 to-blue-600"
            },
            {
              icon: "💡",
              title: "Innovation Experience",
              description: "Solve real-world challenges, think creatively, validate ideas, and build solutions that have practical value.",
              gradient: "from-purple-400 to-purple-600"
            },
            {
              icon: "🎯",
              title: "Industry Edge",
              description: "Develop instincts and thinking patterns similar to early-stage founders by working on actual ideas and pitches.",
              gradient: "from-green-400 to-green-600"
            },
            {
              icon: "🚀",
              title: "Shaping Future Leaders",
              description: "Build the confidence, skills, and mindset needed to lead innovation in any field.",
              gradient: "from-orange-400 to-orange-600"
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-xl border border-yellow-400/20 rounded-2xl p-8 shadow-[0_0_25px_rgba(255,215,0,0.1)] hover:shadow-[0_0_40px_rgba(255,215,0,0.2)] transition-all animate-slide-in-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-4xl mb-6`}>
                {item.icon}
              </div>
              <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-flow">
                {item.title}
              </h2>
              <p className="text-gray-200 text-lg leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white/10 backdrop-blur-xl border border-yellow-400/20 rounded-2xl p-10 shadow-[0_0_25px_rgba(255,215,0,0.1)] animate-fade-in mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-flow">
            What You Gain
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "💪",
                title: "Increased Confidence",
                description: "Experience-based learning boosts self-assurance and clarity of thought."
              },
              {
                icon: "📈",
                title: "Enhanced Employability",
                description: "Participants gain real projects, global teamwork experience, and a portfolio that stands out."
              },
              {
                icon: "🧠",
                title: "Entrepreneurial Mindset",
                description: "Students learn to lead, innovate, and bring ideas to life."
              },
              {
                icon: "🌐",
                title: "Global Awareness",
                description: "Exposure to multiple viewpoints builds culturally aware and globally minded young leaders."
              },
              {
                icon: "🤝",
                title: "Network Building",
                description: "Connect with like-minded innovators, mentors, and industry professionals worldwide."
              },
              {
                icon: "🎓",
                title: "Practical Learning",
                description: "Move beyond theory to hands-on experience that prepares you for real-world challenges."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-yellow-400/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-yellow-400">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories Placeholder */}
        <div className="bg-gradient-to-r from-yellow-400/10 to-blue-400/10 backdrop-blur-xl border border-yellow-400/20 rounded-2xl p-10 shadow-[0_0_25px_rgba(255,215,0,0.1)] text-center animate-fade-in">
          <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-flow">
            Real Impact, Real Stories
          </h2>
          <p className="text-gray-200 text-lg max-w-3xl mx-auto mb-8">
            Our participants go on to launch startups, win scholarships, and become leaders in their communities. Their success stories prove that when you invest in young innovators, extraordinary things happen.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              { stat: "50+", label: "Countries Represented" },
              { stat: "1000+", label: "Students Impacted" },
              { stat: "100+", label: "Ideas Brought to Life" }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-6 border border-yellow-400/20">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-flow mb-2">
                  {item.stat}
                </div>
                <div className="text-gray-300">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-white/10 backdrop-blur-xl border border-yellow-400/20 rounded-2xl p-10 shadow-[0_0_25px_rgba(255,215,0,0.1)]">
            <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-flow">
              Be Part of the Impact
            </h3>
            <p className="text-gray-200 text-lg mb-6">
              Join a global movement that's reshaping how students learn, create, and lead.
            </p>
            <a
              href="/about#competition"
              className="inline-block px-8 py-4 rounded-full font-semibold text-lg text-gray-900 bg-gradient-to-r from-yellow-400 to-white hover:scale-105 transition-all shadow-lg"
            >
              Join IFG Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactPage;
