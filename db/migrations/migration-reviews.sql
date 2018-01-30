\c thank-heaven;

CREATE TABLE IF NOT EXISTS reviews (
  id SERIAL PRIMARY KEY,
  quote VARCHAR(255),
  name VARCHAR(255),
  location VARCHAR(255)
);
