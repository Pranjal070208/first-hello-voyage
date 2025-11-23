-- Create enum for user roles
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at timestamp with time zone DEFAULT now(),
  UNIQUE (user_id, role)
);

-- Enable RLS
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- RLS policies for user_roles table
CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all roles"
ON public.user_roles
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert roles"
ON public.user_roles
FOR INSERT
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update roles"
ON public.user_roles
FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete roles"
ON public.user_roles
FOR DELETE
USING (public.has_role(auth.uid(), 'admin'));

-- Create storage bucket for competition images
INSERT INTO storage.buckets (id, name, public)
VALUES ('competition-images', 'competition-images', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies for competition images
CREATE POLICY "Anyone can view competition images"
ON storage.objects
FOR SELECT
USING (bucket_id = 'competition-images');

CREATE POLICY "Admins can upload competition images"
ON storage.objects
FOR INSERT
WITH CHECK (
  bucket_id = 'competition-images' 
  AND public.has_role(auth.uid(), 'admin')
);

CREATE POLICY "Admins can update competition images"
ON storage.objects
FOR UPDATE
USING (
  bucket_id = 'competition-images' 
  AND public.has_role(auth.uid(), 'admin')
);

CREATE POLICY "Admins can delete competition images"
ON storage.objects
FOR DELETE
USING (
  bucket_id = 'competition-images' 
  AND public.has_role(auth.uid(), 'admin')
);

-- Enable realtime for competition_entries
ALTER PUBLICATION supabase_realtime ADD TABLE competition_entries;

-- Enable realtime for profiles
ALTER PUBLICATION supabase_realtime ADD TABLE profiles;

-- Add RLS policy for admins to view all competition entries
CREATE POLICY "Admins can view all entries"
ON public.competition_entries
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

-- Add RLS policy for admins to view all profiles
CREATE POLICY "Admins can view all profiles"
ON public.profiles
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

-- Add RLS policies for admins to manage competitions
CREATE POLICY "Admins can insert competitions"
ON public.arcade_competitions
FOR INSERT
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update competitions"
ON public.arcade_competitions
FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete competitions"
ON public.arcade_competitions
FOR DELETE
USING (public.has_role(auth.uid(), 'admin'));