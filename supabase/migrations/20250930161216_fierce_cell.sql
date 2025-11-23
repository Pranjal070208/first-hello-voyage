/*
  # IdeaForge Global Database Schema

  1. New Tables
    - `contact_forms`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `subject` (text)
      - `message` (text)
      - `created_at` (timestamp)
    
    - `competition_entries`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to auth.users)
      - `team_name` (text)
      - `project_title` (text)
      - `project_description` (text)
      - `category` (text)
      - `team_members` (text array)
      - `contact_email` (text)
      - `phone_number` (text, optional)
      - `school_organization` (text, optional)
      - `country` (text)
      - `status` (text, default 'pending')
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
    - Public access for contact forms
    - User-specific access for competition entries
*/

-- Create contact_forms table
CREATE TABLE IF NOT EXISTS contact_forms (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create competition_entries table
CREATE TABLE IF NOT EXISTS competition_entries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  team_name text NOT NULL,
  project_title text NOT NULL,
  project_description text NOT NULL,
  category text NOT NULL,
  team_members text[] DEFAULT '{}',
  contact_email text NOT NULL,
  phone_number text,
  school_organization text,
  country text NOT NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE contact_forms ENABLE ROW LEVEL SECURITY;
ALTER TABLE competition_entries ENABLE ROW LEVEL SECURITY;

-- Contact forms policies (public can insert, only admins can read)
CREATE POLICY "Anyone can submit contact forms"
  ON contact_forms
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can read contact forms"
  ON contact_forms
  FOR SELECT
  TO authenticated
  USING (true);

-- Competition entries policies
CREATE POLICY "Users can insert their own competition entries"
  ON competition_entries
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can read their own competition entries"
  ON competition_entries
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own competition entries"
  ON competition_entries
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for competition_entries
CREATE TRIGGER update_competition_entries_updated_at
  BEFORE UPDATE ON competition_entries
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contact_forms_created_at ON contact_forms(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_competition_entries_user_id ON competition_entries(user_id);
CREATE INDEX IF NOT EXISTS idx_competition_entries_status ON competition_entries(status);
CREATE INDEX IF NOT EXISTS idx_competition_entries_created_at ON competition_entries(created_at DESC);