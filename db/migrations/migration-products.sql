CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  brand_id INTEGER references brands(id),
  description text,
  image VARCHAR(255),
  featured boolean
);
