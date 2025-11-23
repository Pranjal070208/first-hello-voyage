/*
  # Add Profile Auto-Creation Trigger

  1. Changes
    - Creates a trigger function to automatically create user profiles when a new user signs up
    - Adds trigger to execute the function after user insertion
    - Populates full_name from user metadata if available
  
  2. Security
    - Ensures every new user gets a profile automatically
    - No action needed from the frontend
*/

-- Function to handle new user profile creation
CREATE OR REPLACE FUNCTION handle_new_user_profile()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, created_at, updated_at)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
    now(),
    now()
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Drop existing trigger if it exists
DROP TRIGGER IF EXISTS on_auth_user_created_profile ON auth.users;

-- Create trigger to automatically create profile for new users
CREATE TRIGGER on_auth_user_created_profile
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user_profile();

-- Backfill profiles for existing users who don't have them
INSERT INTO public.profiles (id, full_name, created_at, updated_at)
SELECT 
  u.id,
  COALESCE(u.raw_user_meta_data->>'full_name', ''),
  now(),
  now()
FROM auth.users u
WHERE NOT EXISTS (
  SELECT 1 FROM public.profiles p WHERE p.id = u.id
);