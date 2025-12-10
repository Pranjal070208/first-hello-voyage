import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthModal from "../components/AuthModal";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signup");

  const handleJoinIFG = () => {
    setAuthMode("signup");
    setIsAuthModalOpen(true);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col relative overflow-hidden bg-gradient-to-b from-[#020617] via-[#08122B] to-[#0A1833] text-white"
    >
      {/* HERO SECTION */}
      <div className="flex-grow flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center py-24">
          {/* LEFT CONTENT */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-flow drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                Empowering the Next Generation of Innovators & Entrepreneurs
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl">
                Students from different countries come together to learn, collaborate, and build the ideas of tomorrow.
                IFG is a global innovation ecosystem that transforms young minds into future-ready leaders through
                real-world learning, mentorship, teamwork, and entrepreneurial exposure.
              </p>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="px-8 py-4 rounded-full font-semibold text-lg text-gray-900 bg-gradient-to-r from-yellow-400 to-white bg-[length:200%_200%] animate-gradient-x shadow-lg hover:shadow-[0_0_25px_rgba(255,255,200,0.4)] hover:scale-105 transition-all text-center"
                onClick={handleJoinIFG}
              >
                Join IFG
              </button>
              <button
                className="px-8 py-4 rounded-full font-semibold text-lg text-gray-900 bg-gradient-to-r from-white to-yellow-400 bg-[length:200%_200%] animate-gradient-x shadow-lg hover:shadow-[0_0_25px_rgba(255,255,200,0.4)] hover:scale-105 transition-all text-center"
                onClick={() => navigate("/contact")}
              >
                Become a Mentor
              </button>
              <a
                href="/contact"
                className="px-8 py-4 rounded-full font-semibold text-lg text-gray-900 bg-gradient-to-r from-white to-yellow-400 bg-[length:200%_200%] animate-gradient-x shadow-lg hover:shadow-[0_0_25px_rgba(255,255,200,0.4)] hover:scale-105 transition-all text-center"
              >
                Partner With Us
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative animate-fade-in">
            <div className="floating-element">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                alt="Young entrepreneurs collaborating"
                className="rounded-2xl shadow-[0_0_25px_rgba(255,215,0,0.2)] w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-28 sm:w-36 h-28 sm:h-36 bg-yellow-400/20 rounded-full blur-2xl animate-pulse" />
            <div
              className="absolute -bottom-10 -left-10 w-20 sm:w-28 h-20 sm:h-28 bg-yellow-300/20 rounded-full blur-2xl animate-pulse"
              style={{ animationDelay: "-2s" }}
            />
          </div>
        </div>
      </div>

      {/* AuthModal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </section>
  );
};

export default HomePage;
