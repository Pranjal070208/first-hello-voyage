/*
  # Fix Marketplace RLS Policies

  1. Changes
    - Updates the SELECT policy on marketplace_products to allow users to read their own products regardless of status
    - This allows sellers to manage their products (active, sold, inactive)
  
  2. Security
    - Authenticated users can read active products from anyone
    - Authenticated users can read all their own products regardless of status
*/

-- Drop the existing SELECT policy
DROP POLICY IF EXISTS "Anyone can read active products" ON marketplace_products;

-- Create new SELECT policy that allows users to read active products OR their own products
CREATE POLICY "Users can read active products and own products" ON marketplace_products
  FOR SELECT USING (
    status = 'active' OR auth.uid() = user_id
  );