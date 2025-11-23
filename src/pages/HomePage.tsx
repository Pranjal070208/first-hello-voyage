import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const scrollToCompetition = () => {
    navigate("/about", { replace: false });
    setTimeout(() => {
      const element = document.getElementById("competition");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // short delay to allow About page to render
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
                Empowering the Next Generation of Global Innovators
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl">
                A youth-led international initiative helping students transform
                ideas into real opportunities through creativity,
                entrepreneurship, and collaboration.
              </p>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="px-8 py-4 rounded-full font-semibold text-lg text-gray-900 bg-gradient-to-r from-yellow-400 to-white bg-[length:200%_200%] animate-gradient-x shadow-lg hover:shadow-[0_0_25px_rgba(255,255,200,0.4)] hover:scale-105 transition-all text-center"
                onClick={scrollToCompetition}
              >
                Join the Challenge
              </button>
              <button
                className="px-8 py-4 rounded-full font-semibold text-lg text-gray-900 bg-gradient-to-r from-white to-yellow-400 bg-[length:200%_200%] animate-gradient-x shadow-lg hover:shadow-[0_0_25px_rgba(255,255,200,0.4)] hover:scale-105 transition-all text-center"
                onClick={scrollToCompetition}
              >
                Submit Your Idea
              </button>
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

      {/* WELCOME BOX */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 animate-fade-in">
        <div className="bg-white/10 backdrop-blur-xl border border-yellow-300/20 rounded-2xl p-10 shadow-[0_0_30px_rgba(255,215,0,0.15)] hover:shadow-[0_0_45px_rgba(255,215,0,0.25)] transition-all">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-flow">
            Welcome to IdeaForge Global (IFG)
          </h2>
          <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-4">
            Every big change begins with a small idea — and every idea deserves a
            stage.
          </p>
          <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-4">
            At IdeaForge Global (IFG), we are redefining how young people bring
            innovation to life. We are a youth-led, student-driven platform built
            for one purpose — to empower you to turn imagination into impact.
          </p>
          <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
            IFG connects students worldwide through idea challenges, mentorship,
            and opportunities that extend beyond the classroom. Whether you dream
            of launching a startup, solving a community problem, or changing the
            world through innovation — this is where it starts.
          </p>
        </div>
      </div>

      {/* GYEC SECTION */}
      <section className="bg-gradient-to-t from-[#0A1833]/90 to-transparent py-16 border-t border-yellow-400/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-xl border border-yellow-400/20 rounded-2xl p-10 shadow-[0_0_25px_rgba(255,215,0,0.1)] hover:shadow-[0_0_40px_rgba(255,215,0,0.2)] transition-all">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-flow">
              The Global Youth Entrepreneurship Challenge (GYEC)
            </h2>
            <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-4">
              The Global Youth Entrepreneurship Challenge (GYEC) is IFG's
              flagship international competition. It gives students from across
              the globe a chance to submit unique, creative ideas that solve
              real-world challenges — from sustainability to social innovation
              to new business concepts.
            </p>
            <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-8">
              Each participant competes not only to win but to learn,
              collaborate, and grow. Through this competition, we aim to create
              a culture of fearless creativity — where no idea is too small to
              make a difference.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-200 text-sm sm:text-base">
              {[
                "Open to students worldwide (ages 15–22)",
                "Individual or team participation (up to 4 members)",
                "Submit your innovative idea or video pitch",
                "Global judging panel from leading institutions",
                "Winners receive certificates, rewards, and global exposure",
                "Registration Deadline: 09-11-2025",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-2 p-4 bg-gradient-to-r from-[#0A1833]/70 to-[#132A4F]/70 rounded-xl border border-yellow-400/20 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,200,0.15)] transition-all"
                >
                  <span className="text-transparent bg-clip-text bg-gradient-flow text-lg font-semibold"> ✓ </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HomePage;
