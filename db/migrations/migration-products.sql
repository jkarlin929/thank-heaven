\c thank-heaven;

CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  brand_id INTEGER REFERENCES brands (id),
  description VARCHAR(255),
  image VARCHAR(255),
  featured boolean
);
