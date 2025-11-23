/*
  # Fix Marketplace Product Visibility

  1. Changes
    - Update SELECT policy to allow everyone (including anonymous users) to view active products
    - Authenticated users can also view their own products regardless of status
  
  2. Security
    - Active products are visible to everyone (public access)
    - Users can only see their own inactive/sold products
*/

-- Drop the existing SELECT policy
DROP POLICY IF EXISTS "Users can read active products and own products" ON marketplace_products;

-- Create new SELECT policy for active products (everyone can see)
CREATE POLICY "Everyone can view active products" ON marketplace_products
  FOR SELECT 
  USING (status = 'active');

-- Create additional SELECT policy for users to see their own products
CREATE POLICY "Users can view own products" ON marketplace_products
  FOR SELECT 
  TO authenticated
  USING (auth.uid() = user_id);