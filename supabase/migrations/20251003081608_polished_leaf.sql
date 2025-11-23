/*
  # Create marketplace and user tokens tables

  1. New Tables
    - `user_tokens`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to users)
      - `balance` (integer, default 10000)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    - `marketplace_products`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to users)
      - `title` (text)
      - `description` (text)
      - `price` (integer, in IFG tokens)
      - `image_url` (text)
      - `product_url` (text)
      - `category` (text)
      - `status` (text, active/sold/inactive)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    - `marketplace_transactions`
      - `id` (uuid, primary key)
      - `buyer_id` (uuid, foreign key to users)
      - `seller_id` (uuid, foreign key to users)
      - `product_id` (uuid, foreign key to marketplace_products)
      - `amount` (integer)
      - `status` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create user_tokens table
CREATE TABLE IF NOT EXISTS user_tokens (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  balance integer DEFAULT 10000 NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create marketplace_products table
CREATE TABLE IF NOT EXISTS marketplace_products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  title text NOT NULL,
  description text NOT NULL,
  price integer NOT NULL CHECK (price > 0),
  image_url text,
  product_url text,
  category text NOT NULL,
  status text DEFAULT 'active' CHECK (status IN ('active', 'sold', 'inactive')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create marketplace_transactions table
CREATE TABLE IF NOT EXISTS marketplace_transactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  buyer_id uuid REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  seller_id uuid REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  product_id uuid REFERENCES marketplace_products(id) ON DELETE CASCADE NOT NULL,
  amount integer NOT NULL,
  status text DEFAULT 'completed' CHECK (status IN ('pending', 'completed', 'failed')),
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE user_tokens ENABLE ROW LEVEL SECURITY;
ALTER TABLE marketplace_products ENABLE ROW LEVEL SECURITY;
ALTER TABLE marketplace_transactions ENABLE ROW LEVEL SECURITY;

-- Create policies for user_tokens
CREATE POLICY "Users can read their own tokens"
  ON user_tokens
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own tokens"
  ON user_tokens
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create policies for marketplace_products
CREATE POLICY "Anyone can read active products"
  ON marketplace_products
  FOR SELECT
  TO authenticated
  USING (status = 'active');

CREATE POLICY "Users can insert their own products"
  ON marketplace_products
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own products"
  ON marketplace_products
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own products"
  ON marketplace_products
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create policies for marketplace_transactions
CREATE POLICY "Users can read their own transactions"
  ON marketplace_transactions
  FOR SELECT
  TO authenticated
  USING (auth.uid() = buyer_id OR auth.uid() = seller_id);

CREATE POLICY "Users can insert transactions as buyers"
  ON marketplace_transactions
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = buyer_id);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_user_tokens_user_id ON user_tokens(user_id);
CREATE INDEX IF NOT EXISTS idx_marketplace_products_user_id ON marketplace_products(user_id);
CREATE INDEX IF NOT EXISTS idx_marketplace_products_status ON marketplace_products(status);
CREATE INDEX IF NOT EXISTS idx_marketplace_products_category ON marketplace_products(category);
CREATE INDEX IF NOT EXISTS idx_marketplace_transactions_buyer_id ON marketplace_transactions(buyer_id);
CREATE INDEX IF NOT EXISTS idx_marketplace_transactions_seller_id ON marketplace_transactions(seller_id);

-- Create triggers for updated_at
CREATE TRIGGER update_user_tokens_updated_at
  BEFORE UPDATE ON user_tokens
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_marketplace_products_updated_at
  BEFORE UPDATE ON marketplace_products
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to initialize user tokens when a new user is created
CREATE OR REPLACE FUNCTION initialize_user_tokens()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO user_tokens (user_id, balance)
  VALUES (NEW.id, 10000);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to initialize tokens for new users
DROP TRIGGER IF EXISTS on_auth_user_created_initialize_tokens ON users;
CREATE TRIGGER on_auth_user_created_initialize_tokens
  AFTER INSERT ON users
  FOR EACH ROW EXECUTE FUNCTION initialize_user_tokens();