CREATE TABLE IF NOT EXISTS brands (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  location VARCHAR(255),
  story text,
  quote VARCHAR(255),
  image VARCHAR(255),
  featured boolean
);
