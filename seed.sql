-- Demo seed data
INSERT INTO streams (name, viewers, tips_total) VALUES
  ('DJ Neon', 150, 2500.00),
  ('DJ Pulse', 200, 3200.00),
  ('DJ Vibe', 80, 1200.00);

INSERT INTO users (username, balance) VALUES
  ('demo_dj', 4370.50),
  ('demo_viewer', 100.00);

INSERT INTO tips (stream_id, amount) VALUES
  ((SELECT id FROM streams WHERE name = 'DJ Neon'), 50.00),
  ((SELECT id FROM streams WHERE name = 'DJ Pulse'), 10.00),
  ((SELECT id FROM streams WHERE name = 'DJ Neon'), 100.00);
