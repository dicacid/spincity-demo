-- SpinCity Demo Schema (Supabase compatible, no auth.users dep)

CREATE TABLE streams (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  viewers integer DEFAULT 0,
  tips_total numeric(12,2) DEFAULT 0.00
);

CREATE TABLE tips (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  stream_id uuid REFERENCES streams(id) ON DELETE CASCADE,
  amount numeric(12,2) NOT NULL,
  tipped_at timestamptz DEFAULT now()
);

CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  username text UNIQUE NOT NULL,
  balance numeric(12,2) DEFAULT 0.00
);

-- Indexes
CREATE INDEX idx_tips_stream ON tips(stream_id);
CREATE INDEX idx_tips_tipped_at ON tips(tipped_at);
