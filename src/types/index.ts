export interface User {
  id: string;
  email: string;
  full_name: string;
  created_at: string;
  updated_at: string;
}

export interface ContactForm {
  id: string;
  name: string;
  email: string;
  phone_number?: string;
  subject: string;
  message: string;
  created_at: string;
}

export interface Profile {
  id: string;
  full_name: string;
  avatar_url?: string;
  bio?: string;
  website?: string;
  created_at: string;
  updated_at: string;
}

export interface CompetitionEntry {
  id: string;
  user_id: string;
  team_name: string;
  project_title: string;
  project_description: string;
  category: string;
  team_members: string[];
  contact_email: string;
  phone_number?: string;
  school_organization?: string;
  country: string;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
  updated_at: string;
}

export interface UserAchievement {
  id: string;
  user_id: string;
  title: string;
  description?: string;
  type: 'certificate' | 'badge' | 'award' | 'completion';
  issued_date: string;
  certificate_url?: string;
  metadata: Record<string, any>;
  created_at: string;
}

export interface ChatConversation {
  id: string;
  user_id: string;
  title: string;
  status: 'active' | 'closed' | 'archived';
  created_at: string;
  updated_at: string;
}

export interface ChatMessage {
  id: string;
  conversation_id: string;
  sender_type: 'user' | 'bot';
  message: string;
  metadata: Record<string, any>;
  created_at: string;
}

export interface UserCourse {
  id: string;
  user_id: string;
  course_title: string;
  course_description?: string;
  status: 'enrolled' | 'in_progress' | 'completed' | 'dropped';
  progress_percentage: number;
  enrolled_date: string;
  completed_date?: string;
  certificate_issued: boolean;
  created_at: string;
  updated_at: string;
}

export interface AuthState {
  user: User | null;
  profile: Profile | null;
  loading: boolean;
}

export interface UserTokens {
  id: string;
  user_id: string;
  balance: number;
  created_at: string;
  updated_at: string;
}

export interface MarketplaceProduct {
  id: string;
  user_id: string;
  title: string;
  description: string;
  price: number;
  image_url?: string;
  product_url?: string;
  product_link?: string;
  category: string;
  status: 'active' | 'sold' | 'inactive';
  created_at: string;
  updated_at: string;
  seller_name?: string;
}

export interface MarketplaceTransaction {
  id: string;
  buyer_id: string;
  seller_id: string;
  product_id: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  created_at: string;
}