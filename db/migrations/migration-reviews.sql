\c thank-heaven;

CREATE TABLE IF NOT EXISTS reviews (
  id SERIAL PRIMARY KEY,
  quote VARCHAR(700),
  name VARCHAR(255),
  location VARCHAR(255)
);
