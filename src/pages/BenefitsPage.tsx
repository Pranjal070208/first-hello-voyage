import React from 'react';

const BenefitsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <section className="py-12 sm:py-20 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-6 animate-gradient-shift">
              Why Participate in IFG
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Every participant becomes part of a global community that believes in ideas. Whether you win or not, the experience is transformative.
            </p>
          </div>

          {/* For Students */}
          <div className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">For Students</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: '🌍', title: 'Showcase Innovation Globally', description: 'Present your ideas on an international platform' },
                { icon: '📜', title: 'Certificates and LORs', description: 'Receive official recognition for your participation' },
                { icon: '🤝', title: 'Build Leadership Skills', description: 'Develop teamwork and leadership capabilities' },
                { icon: '👨‍🏫', title: 'Connect with Mentors', description: 'Get guidance from industry experts' }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-100 to-blue-300 p-6 rounded-xl shadow-xl hover:scale-105 transform transition-all">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h4 className="text-lg font-bold mb-2 text-blue-800">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* For Winners */}
          <div className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">For Winners</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: '🏆', title: 'Certificates of Excellence', description: 'Official recognition of your achievement' },
                { icon: '🎁', title: 'Gift Cards', description: 'Amazon/Flipkart gift cards as rewards' },
                { icon: '📦', title: 'Mystery Entrepreneur Box', description: 'Exclusive surprise package for top performers' },
                { icon: '✍️', title: 'Personalized LOR', description: 'Letter of recommendation for your achievements' },
                { icon: '📱', title: 'Social Media Feature', description: 'Showcased on our website and social platforms' },
                { icon: '🚀', title: 'Collaboration Opportunities', description: 'Work with IFG on future initiatives' }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-green-100 to-green-300 p-6 rounded-xl shadow-xl hover:scale-105 transform transition-all">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h4 className="text-lg font-bold mb-2 text-green-800">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* For Active Members */}
          <div className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">For Active Members</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: '💼', title: 'Leadership Experience', description: 'Real-world leadership opportunities' },
                { icon: '⭐', title: 'Performance Certificates', description: 'Recognition for your contributions' },
                { icon: '🎯', title: 'Priority Access', description: 'First access to mentorship opportunities' }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-100 to-purple-300 p-6 rounded-xl shadow-xl hover:scale-105 transform transition-all">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h4 className="text-lg font-bold mb-2 text-purple-800">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* For Schools & Universities */}
          <div className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">For Schools & Universities</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: '🎓', title: 'Youth Innovation Partner', description: 'Recognition as a partner institution' },
                { icon: '🤝', title: 'Collaboration Access', description: 'Direct collaboration opportunities with IFG' },
                { icon: '📚', title: 'Workshop & Mentorship', description: 'Access to exclusive programs for students' }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-yellow-100 to-yellow-300 p-6 rounded-xl shadow-xl hover:scale-105 transform transition-all">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h4 className="text-lg font-bold mb-2 text-yellow-800">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final Section with Image */}
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
              alt="Startup competition winners celebration"
              className="rounded-2xl shadow-2xl mx-auto w-full max-w-4xl hover:scale-105 transition-all mb-8"
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
