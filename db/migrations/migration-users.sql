
\c thank-heaven
DROP TABLE IF EXISTS users; 

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  userName VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT NOT NULL
);