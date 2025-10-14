import React from 'react';
import CompetitionSignup from '../components/CompetitionSignup';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-6 animate-gradient-shift">
              Our Story
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto mb-6">
              IdeaForge Global (IFG) began with a simple observation: thousands of students have brilliant ideas, but few get the chance to bring them to life.
            </p>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto mb-6">
              Founded by students, IFG was built on a belief — that innovation should be accessible to everyone. We started small, with local idea-sharing initiatives, and have now grown into a global community connecting youth from different countries and academic backgrounds.
            </p>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Our journey isn't about being the biggest — it's about being the most impactful.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 sm:gap-16 items-center mb-16">
            <div className="animate-slide-in-left">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Global networking illustration"
                className="rounded-2xl shadow-xl w-full h-auto object-cover hover-lift"
              />
            </div>

            <div className="space-y-8 animate-slide-in-right">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-base sm:text-lg text-gray-600">
                  To empower students globally by giving them the courage, confidence, and connections to transform ideas into reality.
                </p>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-base sm:text-lg text-gray-600">
                  To create a global ecosystem of innovation by organizing international idea challenges, mentorship programs, and student-led collaborations that inspire creativity and problem-solving.
                </p>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
                <p className="text-base sm:text-lg text-gray-600">
                  Inclusivity • Integrity • Innovation • Collaboration • Impact
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">What Makes IFG Unique</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-bold text-lg mb-2">Completely Student-Led</h4>
                <p className="text-gray-600">Built by students, for students</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-bold text-lg mb-2">Global Reach</h4>
                <p className="text-gray-600">Connecting innovators worldwide</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-bold text-lg mb-2">Accessible to All</h4>
                <p className="text-gray-600">Free participation for everyone</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-bold text-lg mb-2">Recognition That Matters</h4>
                <p className="text-gray-600">Certificates, LORs, and awards</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-bold text-lg mb-2">Partnerships with Institutions</h4>
                <p className="text-gray-600">Collaborating with leading organizations</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-bold text-lg mb-2">Mentorship & Support</h4>
                <p className="text-gray-600">Guidance from industry experts</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Team</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are a passionate collective of students working together to create world-class opportunities for youth. Everyone at IFG shares one goal — to make the next generation of entrepreneurs unstoppable.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Why We Exist</h3>
            <p className="text-lg max-w-3xl mx-auto mb-6">
              We believe innovation should not be limited by resources, geography, or privilege. Every student — no matter where they come from — deserves a place to share their vision and be heard.
            </p>
            <p className="text-lg max-w-3xl mx-auto font-semibold">
              That's what IdeaForge Global stands for. We're not just hosting competitions — we're building a community where ideas meet purpose, and creativity meets opportunity.
            </p>
          </div>
        </div>
      </section>

      <section id="competition" className="py-12 sm:py-20" style={{ backgroundColor: '#FAEBD7' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-6 animate-gradient-shift">
              Global Youth Entrepreneurship Challenge (GYEC)
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              GYEC is not just a competition — it's a journey of exploration, innovation, and growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start mb-12">
            <div className="space-y-6 sm:space-y-8">
              <div className="card-3d bg-white p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow hover-lift animate-slide-in-left">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Competition Highlights</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600">✓</span>
                    <span>Open to students worldwide (ages 15–22)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600">✓</span>
                    <span>Individual or team participation (up to 4 members)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600">✓</span>
                    <span>Submit your innovative idea or video pitch</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600">✓</span>
                    <span>Global judging panel from leading institutions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600">✓</span>
                    <span>Winners receive certificates, rewards, and global exposure</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600">📅</span>
                    <span>Registration Deadline: To be updated</span>
                  </li>
                </ul>
              </div>

              <div className="card-3d bg-white p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow hover-lift animate-slide-in-left stagger-2">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">What You Can Expect</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-600">•</span>
                    <span>A platform to showcase creativity</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-600">•</span>
                    <span>Collaboration with innovators</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-600">•</span>
                    <span>Access to mentors and youth leaders</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-600">•</span>
                    <span>Recognition via awards, certificates, and LORs</span>
                  </li>
                </ul>
                <p className="text-gray-600 mt-4 italic">
                  This isn't just a competition. It's your first step into the global innovation ecosystem.
                </p>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <CompetitionSignup />
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 rounded-2xl p-8 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Your idea has the power to change the world — all it needs is a spark.
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <a
                href="#competition"
                className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl"
              >
                Join the Challenge
              </a>
              <a
                href="#competition"
                className="border-2 border-white bg-transparent text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all"
              >
                Submit Your Idea
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
