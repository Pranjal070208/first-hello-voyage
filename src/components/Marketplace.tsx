import React, { useState, useEffect } from 'react';
import { ArrowLeft, ShoppingCart, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { MarketplaceProduct, UserTokens } from '../types';

const Marketplace: React.FC = () => {
  const { user } = useAuth();
  const [comingSoon, setComingSoon] = useState(true);  // Control whether to show coming soon or marketplace content

  const [userTokens, setUserTokens] = useState<UserTokens | null>(null);

  // This would be where the usual data fetching happens if we were showing products
  const fetchData = async () => {
    // Your fetch logic here
  };

  useEffect(() => {
    // Only fetch data if the marketplace isn't "coming soon"
    if (!comingSoon) {
      fetchData();
    }
  }, [comingSoon, user]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020617] via-[#08122B] to-[#0A1833] text-white">
      {/* Header */}
      <div className="bg-transparent px-4 py-3 mt-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium transition-colors hover-scale"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
            <div className="flex items-center space-x-3">
              <ShoppingCart className="w-8 h-8 text-purple-600" />
              <div>
                <h1 className="font-bold text-white text-xl">IFG Marketplace</h1>
                <p className="text-sm text-gray-400">Buy & Sell with IFG Tokens</p>
              </div>
            </div>
          </div>
          {user && userTokens && (
            <div className="flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-white px-4 py-2 rounded-full">
              <User className="w-5 h-5 text-purple-600" />
              <span className="font-semibold text-gray-900">{userTokens.balance} IFG</span>
            </div>
          )}
        </div>
      </div>

      {/* Display Coming Soon Message */}
      {comingSoon ? (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-t from-[#0A1833]/90 to-transparent text-center">
          <div className="bg-white/20 backdrop-blur-xl p-10 rounded-lg shadow-[0_0_30px_rgba(255,215,0,0.25)] max-w-lg mx-auto">
            <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Coming Soon!</h2>
            <p className="text-lg text-gray-200 mb-4">We are working hard to bring the IFG Marketplace online.</p>
            <p className="text-sm text-gray-300">Stay tuned for updates, and check back soon for an exciting marketplace experience!</p>
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Add your normal marketplace content here */}
        </div>
      )}
    </div>
  );
};

export default Marketplace;
