import React from 'react';

const BenefitsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-6 animate-gradient-shift">
              Why Participate in IFG
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Every participant becomes part of a global community that believes in ideas. Whether you win or not, the experience is transformative.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">For Students</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl hover-lift">
                <div className="text-4xl mb-4">🌍</div>
                <h4 className="text-lg font-bold mb-2">Showcase Innovation Globally</h4>
                <p className="text-gray-600 text-sm">Present your ideas on an international platform</p>
              </div>
              <div className="bg-gradient-to-br from-cyan-50 to-green-50 p-6 rounded-xl hover-lift">
                <div className="text-4xl mb-4">📜</div>
                <h4 className="text-lg font-bold mb-2">Certificates and LORs</h4>
                <p className="text-gray-600 text-sm">Receive official recognition for your participation</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-yellow-50 p-6 rounded-xl hover-lift">
                <div className="text-4xl mb-4">🤝</div>
                <h4 className="text-lg font-bold mb-2">Build Leadership Skills</h4>
                <p className="text-gray-600 text-sm">Develop teamwork and leadership capabilities</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl hover-lift">
                <div className="text-4xl mb-4">👨‍🏫</div>
                <h4 className="text-lg font-bold mb-2">Connect with Mentors</h4>
                <p className="text-gray-600 text-sm">Get guidance from industry experts</p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">For Winners</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover-lift">
                <div className="text-4xl mb-4">🏆</div>
                <h4 className="text-lg font-bold mb-2">Certificates of Excellence</h4>
                <p className="text-gray-600 text-sm">Official recognition of your achievement</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover-lift">
                <div className="text-4xl mb-4">🎁</div>
                <h4 className="text-lg font-bold mb-2">Gift Cards</h4>
                <p className="text-gray-600 text-sm">Amazon/Flipkart gift cards as rewards</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover-lift">
                <div className="text-4xl mb-4">📦</div>
                <h4 className="text-lg font-bold mb-2">Mystery Entrepreneur Box</h4>
                <p className="text-gray-600 text-sm">Exclusive surprise package for top performers</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover-lift">
                <div className="text-4xl mb-4">✍️</div>
                <h4 className="text-lg font-bold mb-2">Personalized LOR</h4>
                <p className="text-gray-600 text-sm">Letter of recommendation for your achievements</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover-lift">
                <div className="text-4xl mb-4">📱</div>
                <h4 className="text-lg font-bold mb-2">Social Media Feature</h4>
                <p className="text-gray-600 text-sm">Showcased on our website and social platforms</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover-lift">
                <div className="text-4xl mb-4">🚀</div>
                <h4 className="text-lg font-bold mb-2">Collaboration Opportunities</h4>
                <p className="text-gray-600 text-sm">Work with IFG on future initiatives</p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">For Active Members</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl hover-lift">
                <div className="text-4xl mb-4">💼</div>
                <h4 className="text-lg font-bold mb-2">Leadership Experience</h4>
                <p className="text-gray-600 text-sm">Real-world leadership opportunities</p>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-red-50 p-6 rounded-xl hover-lift">
                <div className="text-4xl mb-4">⭐</div>
                <h4 className="text-lg font-bold mb-2">Performance Certificates</h4>
                <p className="text-gray-600 text-sm">Recognition for your contributions</p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl hover-lift">
                <div className="text-4xl mb-4">🎯</div>
                <h4 className="text-lg font-bold mb-2">Priority Access</h4>
                <p className="text-gray-600 text-sm">First access to mentorship opportunities</p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">For Schools & Universities</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover-lift">
                <div className="text-4xl mb-4">🎓</div>
                <h4 className="text-lg font-bold mb-2">Youth Innovation Partner</h4>
                <p className="text-gray-600 text-sm">Recognition as a partner institution</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover-lift">
                <div className="text-4xl mb-4">🤝</div>
                <h4 className="text-lg font-bold mb-2">Collaboration Access</h4>
                <p className="text-gray-600 text-sm">Direct collaboration opportunities with IFG</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover-lift">
                <div className="text-4xl mb-4">📚</div>
                <h4 className="text-lg font-bold mb-2">Workshop & Mentorship</h4>
                <p className="text-gray-600 text-sm">Access to exclusive programs for students</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
              alt="Startup competition winners celebration"
              className="rounded-2xl shadow-2xl mx-auto w-full max-w-4xl hover-lift mb-8"
            />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-bounce-in">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 animate-gradient-shift bg-gradient-to-r from-white via-yellow-300 to-white bg-clip-text text-transparent">
              Your Time is Now
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in stagger-2">
              Join thousands of passionate young entrepreneurs changing the world. Imagine your idea featured on Google, celebrated by mentors, peers, and global leaders — opening doors to your bright future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/about#competition"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl"
              >
                Join the Challenge
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all"
              >
                Partner With Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BenefitsPage;
