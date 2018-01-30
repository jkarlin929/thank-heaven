\c thank-heaven;

CREATE TABLE IF NOT EXISTS brands (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  location VARCHAR(255),
  story VARCHAR(255),
  quote VARCHAR(255),
  featured boolean
);
