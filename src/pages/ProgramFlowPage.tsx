import React from "react";

const ProgramFlowPage: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#020617] via-[#08122B] to-[#0A1833] text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-flow">
            IFG Program Flow: Step-by-Step Student Journey
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            From registration to recognition, here's how your journey unfolds with IdeaForge Global.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12">
          {[
            {
              step: "1",
              title: "Global Registration",
              description: "Students from different countries join a shared international community and get access to the complete IFG experience.",
              icon: "🌍"
            },
            {
              step: "2",
              title: "Mentorship Program",
              description: "Professionals, founders, and industry leaders conduct sessions that focus on business clarity, idea thinking, branding, pitching, and execution.",
              icon: "👨‍🏫"
            },
            {
              step: "3",
              title: "Team Formation",
              description: "Participants are placed into diverse 5-member teams. These groups work together across backgrounds, helping students learn teamwork, leadership, and communication.",
              icon: "👥"
            },
            {
              step: "4",
              title: "Idea Development + Pitch Building",
              description: "Teams choose a problem and build a full business concept around it.",
              icon: "💡",
              subItems: [
                "Idea validation",
                "Market research",
                "Business model",
                "Branding",
                "Execution plan",
                "Pitch deck creation"
              ]
            },
            {
              step: "5",
              title: "Global Championship",
              description: "Teams present their ideas in a final pitch competition. Outstanding performers receive:",
              icon: "🏆",
              subItems: [
                "Recognition",
                "Certificates",
                "Letters of Recommendation",
                "Portfolio-worthy projects",
                "Spotlight features"
              ]
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-xl border border-yellow-400/20 rounded-2xl p-8 shadow-[0_0_25px_rgba(255,215,0,0.1)] hover:shadow-[0_0_40px_rgba(255,215,0,0.2)] transition-all animate-slide-in-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-2xl sm:text-3xl">
                    {item.icon}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-3">
                    <span className="text-sm font-bold text-yellow-400">STEP {item.step}</span>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-flow break-words">
                      {item.title}
                    </h2>
                  </div>
                  <p className="text-gray-200 text-lg leading-relaxed mb-4">
                    {item.description}
                  </p>
                  {item.subItems && (
                    <ul className="space-y-2 mt-4">
                      {item.subItems.map((subItem, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-300">
                          <span className="text-yellow-400 mt-1">✓</span>
                          <span>{subItem}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-white/10 backdrop-blur-xl border border-yellow-400/20 rounded-2xl p-10 shadow-[0_0_25px_rgba(255,215,0,0.1)]">
            <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-flow">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-gray-200 text-lg mb-6">
              Join thousands of students from around the world who are transforming their ideas into reality.
            </p>
            <a
              href="/about#competition"
              className="inline-block px-8 py-4 rounded-full font-semibold text-lg text-gray-900 bg-gradient-to-r from-yellow-400 to-white hover:scale-105 transition-all shadow-lg"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramFlowPage;
