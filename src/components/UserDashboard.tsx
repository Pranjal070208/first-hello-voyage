import React, { useState, useEffect } from 'react';
import { User, Trophy, BookOpen, Award, Calendar, Download, MessageCircle, Settings, LogOut, ChevronRight, Star, Clock, CheckCircle, Target, ArrowLeft, CreditCard as Edit3, Save, X, ShoppingCart, Coins } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { getUserAchievements, getUserCourses, getUserCompetitionEntries, updateProfile, getUserProducts, getUserTokens } from '../lib/supabase';
import { UserAchievement, UserCourse, CompetitionEntry, MarketplaceProduct, UserTokens } from '../types';
import ChatBot from './ChatBot';

const UserDashboard: React.FC = () => {
  const { user, profile, signOut, refreshProfile } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [achievements, setAchievements] = useState<UserAchievement[]>([]);
  const [courses, setCourses] = useState<UserCourse[]>([]);
  const [competitions, setCompetitions] = useState<CompetitionEntry[]>([]);
  const [userProducts, setUserProducts] = useState<MarketplaceProduct[]>([]);
  const [userTokens, setUserTokens] = useState<UserTokens | null>(null);
  const [loading, setLoading] = useState(true);
  const [showChatBot, setShowChatBot] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileForm, setProfileForm] = useState({
    full_name: profile?.full_name || '',
    bio: profile?.bio || '',
    website: profile?.website || ''
  });
  const [profileLoading, setProfileLoading] = useState(false);

  useEffect(() => {
    if (profile) {
      setProfileForm({
        full_name: profile.full_name || '',
        bio: profile.bio || '',
        website: profile.website || ''
      });
    }
  }, [profile]);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user) {
        setLoading(false);
        return;
      }
      
      setLoading(true);
      try {
        const [achievementsRes, coursesRes, competitionsRes, productsRes, tokensRes] = await Promise.all([
          getUserAchievements(),
          getUserCourses(),
          getUserCompetitionEntries(),
          getUserProducts(),
          getUserTokens()
        ]);

        if (achievementsRes.data) setAchievements(achievementsRes.data);
        if (coursesRes.data) setCourses(coursesRes.data);
        if (competitionsRes.data) setCompetitions(competitionsRes.data);
        if (productsRes.data) setUserProducts(productsRes.data);
        if (tokensRes.data) setUserTokens(tokensRes.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user]);

  const handleProfileUpdate = async () => {
    if (!user) return;
    
    setProfileLoading(true);
    try {
      const { error } = await updateProfile(user.id, profileForm);
      if (error) {
        console.error('Error updating profile:', error);
        alert('Failed to update profile. Please try again.');
      } else {
        await refreshProfile();
        setIsEditingProfile(false);
        alert('Profile updated successfully!');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile. Please try again.');
    } finally {
      setProfileLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed': return 'text-yellow-600 bg-yellow-100'; // Use yellow for completed
    case 'in_progress': return 'text-yellow-500 bg-yellow-200'; // Use yellow for in progress
    case 'enrolled': return 'text-yellow-500 bg-yellow-100'; // Keep yellow for enrolled
    case 'approved': return 'text-yellow-600 bg-yellow-100'; // Use yellow for approved
    case 'pending': return 'text-yellow-600 bg-yellow-100'; // Keep yellow for pending
    case 'rejected': return 'text-red-600 bg-red-100'; // Red remains the same
    default: return 'text-gray-600 bg-gray-100'; // Default to gray
  }
};


  const getAchievementIcon = (type: string) => {
    switch (type) {
      case 'certificate': return <Award className="w-6 h-6 text-yellow-500" />;
      case 'badge': return <Star className="w-6 h-6 text-blue-500" />;
      case 'award': return <Trophy className="w-6 h-6 text-purple-500" />;
      case 'completion': return <CheckCircle className="w-6 h-6 text-green-500" />;
      default: return <Target className="w-6 h-6 text-gray-500" />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#020617] via-[#08122B] to-[#0A1833]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020617] via-[#08122B] to-[#0A1833]">
      {/* Header with Back Button */}
      <div className="bg-[#020617] shadow-sm border-b px-4 py-3 mt-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 font-medium transition-colors hover-scale"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 hero-gradient rounded-full flex items-center justify-center text-white font-bold pulse-glow">
                {profile?.full_name?.charAt(0) || user?.email?.charAt(0) || 'U'}
              </div>
              <div>
                <h1 className="font-semibold text-white">{profile?.full_name || 'User'}</h1>
                <p className="text-sm text-yellow-400">Dashboard</p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {userTokens && (
              <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 px-3 py-1 rounded-full">
                <Coins className="w-4 h-4 text-purple-600" />
                <span className="font-semibold text-purple-700 text-sm">{userTokens.balance} IFG</span>
              </div>
            )}
            <button
              onClick={() => setShowChatBot(true)}
              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
{/* Sidebar */}
<nav className="px-4 lg:px-6 py-6">
  <div className="flex lg:flex-col space-x-2 lg:space-x-0 lg:space-y-2 overflow-x-auto lg:overflow-x-visible">
    {[
      { id: 'overview', label: 'Overview', icon: User },
      { id: 'profile', label: 'Profile', icon: Settings },
      { id: 'competitions', label: 'Competitions', icon: Trophy },
      { id: 'courses', label: 'Courses', icon: BookOpen },
      { id: 'achievements', label: 'Achievements', icon: Award },
      { id: 'marketplace', label: 'My Products', icon: ShoppingCart },
    ].map((tab) => (
      <button
        key={tab.id}
        onClick={() => setActiveTab(tab.id)}
        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors whitespace-nowrap ${
          activeTab === tab.id
            ? 'bg-yellow-500 text-white'
            : 'text-gray-300 hover:bg-yellow-500 hover:text-white'
        }`}
      >
        <tab.icon className="w-5 h-5" />
        <span className="font-medium">{tab.label}</span>
      </button>
    ))}
  </div>

  <div className="hidden lg:block mt-8 pt-8 border-t">
    <button
      onClick={() => setShowChatBot(true)}
      className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors w-full"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="font-medium">Help Desk</span>
    </button>
    <button
      onClick={signOut}
      className="flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors w-full mt-2"
    >
      <LogOut className="w-5 h-5" />
      <span className="font-medium">Sign Out</span>
    </button>
  </div>
</nav>
        
        {/* Main Content */}
        <div className="flex-1 p-4 lg:p-8">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-yellow-500 mb-2">Welcome back, {profile?.full_name || 'User'}!</h1>
                <p className="text-yellow-500">Here's your activity overview</p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                <div className="card-3d bg-[#020617] p-4 lg:p-6 rounded-xl shadow-xl border border-yellow-400">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Competitions</p>
                      <p className="text-2xl font-bold text-gray-900">{competitions.length}</p>
                    </div>
                    <Trophy className="w-8 h-8 text-yellow-500" />
                  </div>
                </div>
                <div className="card-3d bg-[#020617] p-4 lg:p-6 rounded-xl shadow-xl border border-yellow-400">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Courses</p>
                      <p className="text-2xl font-bold text-gray-900">{courses.length}</p>
                    </div>
                    <BookOpen className="w-8 h-8 text-blue-500" />
                  </div>
                </div>
                <div className="card-3d bg-[#020617] p-4 lg:p-6 rounded-xl shadow-xl border border-yellow-400">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Achievements</p>
                      <p className="text-2xl font-bold text-gray-900">{achievements.length}</p>
                    </div>
                    <Award className="w-8 h-8 text-purple-500" />
                  </div>
                </div>
                <div className="card-3d bg-[#020617] p-4 lg:p-6 rounded-xl shadow-xl border border-yellow-400">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Products</p>
                      <p className="text-2xl font-bold text-gray-900">{userProducts.length}</p>
                    </div>
                    <ShoppingCart className="w-8 h-8 text-indigo-500" />
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="card-3d bg-white rounded-xl shadow-sm border p-4 lg:p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {competitions.slice(0, 3).map((competition) => (
                    <div key={competition.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                      <Trophy className="w-5 h-5 text-yellow-500" />
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{competition.project_title}</p>
                        <p className="text-sm text-gray-600">Competition Entry</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(competition.status)}`}>
                        {competition.status}
                      </span>
                    </div>
                  ))}
                  {courses.slice(0, 2).map((course) => (
                    <div key={course.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                      <BookOpen className="w-5 h-5 text-blue-500" />
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{course.course_title}</p>
                        <p className="text-sm text-gray-600">{course.progress_percentage}% Complete</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(course.status)}`}>
                        {course.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-yellow-500 mb-2">Profile Settings</h2>
                  <p className="text-yellow-600">Manage your personal information</p>
                </div>
                {!isEditingProfile && (
                  <button
                    onClick={() => setIsEditingProfile(true)}
                    className="flex items-center space-x-2 px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition-colors"
                  >
                    <Edit3 className="w-4 h-4" />
                    <span>Edit Profile</span>
                  </button>
                )}
              </div>

              <div className="card-3d bg-white rounded-xl shadow-sm border p-6">
                <div className="flex items-center space-x-6 mb-6">
                  <div className="w-20 h-20 hero-gradient rounded-full flex items-center justify-center text-white font-bold text-2xl pulse-glow">
                    {profile?.full_name?.charAt(0) || user?.email?.charAt(0) || 'U'}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{profile?.full_name || 'User'}</h3>
                    <p className="text-gray-900">{user?.email}</p>
                    <p className="text-sm text-gray-500">Member since {new Date(user?.created_at || '').toLocaleDateString()}</p>
                  </div>
                </div>

                {isEditingProfile ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        value={profileForm.full_name}
                        onChange={(e) => setProfileForm({ ...profileForm, full_name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                      <textarea
                        value={profileForm.bio}
                        onChange={(e) => setProfileForm({ ...profileForm, bio: e.target.value })}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        placeholder="Tell us about yourself..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                      <input
                        type="url"
                        value={profileForm.website}
                        onChange={(e) => setProfileForm({ ...profileForm, website: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="https://your-website.com"
                      />
                    </div>

                    <div className="flex space-x-4 pt-4">
                      <button
                        onClick={handleProfileUpdate}
                        disabled={profileLoading}
                        className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                      >
                        {profileLoading ? (
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        ) : (
                          <Save className="w-4 h-4" />
                        )}
                        <span>{profileLoading ? 'Saving...' : 'Save Changes'}</span>
                      </button>
                      <button
                        onClick={() => {
                          setIsEditingProfile(false);
                          setProfileForm({
                            full_name: profile?.full_name || '',
                            bio: profile?.bio || '',
                            website: profile?.website || ''
                          });
                        }}
                        className="flex items-center space-x-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <X className="w-4 h-4" />
                        <span>Cancel</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-yellow-400 mb-1">Bio</h4>
                      <p className="text-gray-900">{profile?.bio || 'No bio added yet.'}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-yellow-400 mb-1">Website</h4>
                      {profile?.website ? (
                        <a href={profile.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                          {profile.website}
                        </a>
                      ) : (
                        <p className="text-gray-500">No website added yet.</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'competitions' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-yellow-600 mb-2">My Competitions</h2>
                <p className="text-gray-400">Track your competition entries and results</p>
              </div>

              <div className="grid gap-6">
                {competitions.map((competition) => (
                  <div key={competition.id} className="card-3d bg-white rounded-xl shadow-sm border p-4 lg:p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{competition.project_title}</h3>
                        <p className="text-yellow-400">{competition.team_name}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(competition.status)} mt-2 lg:mt-0 self-start`}>
                        {competition.status}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4">{competition.project_description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>Submitted {new Date(competition.created_at).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Target className="w-4 h-4" />
                        <span>{competition.category}</span>
                      </div>
                    </div>
                  </div>
                ))}
                {competitions.length === 0 && (
                  <div className="text-center py-12">
                    <Trophy className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-yellow-500 mb-2">No competitions yet</h3>
                    <p className="text-yellow-600">Join a competition to see your entries here</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-yellow-500 mb-2">My Courses</h2>
                <p className="text-gray-600">Track your learning progress</p>
              </div>

              <div className="grid gap-6">
                {courses.map((course) => (
                  <div key={course.id} className="card-3d bg-white rounded-xl shadow-sm border p-4 lg:p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{course.course_title}</h3>
                        <p className="text-gray-600">{course.course_description}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(course.status)} mt-2 lg:mt-0 self-start`}>
                        {course.status}
                      </span>
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Progress</span>
                        <span>{course.progress_percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${course.progress_percentage}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>Enrolled {new Date(course.enrolled_date).toLocaleDateString()}</span>
                      </div>
                      {course.certificate_issued && (
                        <div className="flex items-center space-x-1 text-green-600">
                          <Award className="w-4 h-4" />
                          <span>Certificate Issued</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {courses.length === 0 && (
                  <div className="text-center py-12">
                    <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-yellow-600 mb-2">No courses yet</h3>
                    <p className="text-yellow-600">Enroll in courses to track your progress here</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-yellow-600 mb-2">My Achievements</h2>
                <p className="text-gray-600">Your certificates, badges, and awards</p>
              </div>

              <div className="grid gap-6">
                {achievements.map((achievement) => (
                  <div key={achievement.id} className="card-3d bg-white rounded-xl shadow-sm border p-4 lg:p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {getAchievementIcon(achievement.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{achievement.title}</h3>
                          <span className="text-sm text-gray-500 mt-1 lg:mt-0">
                            {new Date(achievement.issued_date).toLocaleDateString()}
                          </span>
                        </div>
                        {achievement.description && (
                          <p className="text-gray-600 mb-3">{achievement.description}</p>
                        )}
                        {achievement.certificate_url && (
                          <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium">
                            <Download className="w-4 h-4" />
                            <span>Download Certificate</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                {achievements.length === 0 && (
                  <div className="text-center py-12">
                    <Award className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-yellow-600 mb-2">No achievements yet</h3>
                    <p className="text-yellow-600">Complete courses and competitions to earn achievements</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'marketplace' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-yellow-600 mb-2">My Marketplace Products</h2>
                <p className="text-gray-600">Manage your products in the IFG Marketplace</p>
              </div>

              <div className="grid gap-6">
                {userProducts.map((product) => (
                  <div key={product.id} className="card-3d bg-white rounded-xl shadow-sm border p-4 lg:p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
                        <p className="text-gray-600">{product.category}</p>
                      </div>
                      <div className="flex items-center space-x-4 mt-2 lg:mt-0">
                        <div className="flex items-center space-x-1">
                          <Coins className="w-4 h-4 text-purple-600" />
                          <span className="font-bold text-purple-700">{product.price} IFG</span>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          product.status === 'active' ? 'bg-green-100 text-green-700' :
                          product.status === 'sold' ? 'bg-blue-100 text-blue-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {product.status}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{product.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>Created {new Date(product.created_at).toLocaleDateString()}</span>
                      </div>
                      {product.product_url && (
                        <div className="flex items-center space-x-1">
                          <Target className="w-4 h-4" />
                          <a href={product.product_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                            View Product
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {userProducts.length === 0 && (
                  <div className="text-center py-12">
                    <ShoppingCart className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-yellow-600 mb-2">No products yet</h3>
                    <p className="text-yellow-600">Visit the marketplace to create your first product</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ChatBot Modal */}
      {showChatBot && (
        <ChatBot onClose={() => setShowChatBot(false)} />
      )}
    </div>
  );
};

export default UserDashboard;
