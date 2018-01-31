const db = require('../db/config');

const Product = {};

Product.findAll = () => {
  return db.query(`SELECT * FROM products`);
};

Product.findById = id => {
  return db.oneOrNone(
    `
    SELECT * FROM products
    WHERE id = $1
  `,
    [id]
  );
};

Product.create = product => {
  return db.one(
    `
    INSERT INTO products
    (name, brand_id, description, image, featured)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
  `,
    [product.name, product.brand_id, product.description, product.image, product.featured]
  );
};

Product.update = (product, id) => {
  return db.one(
    `
    UPDATE products SET
      name = $1,
      brand_id = $2,
      description = $3,
      image = $4,
      featured = $5
    WHERE id = $6
    RETURNING *
  `,
    [product.name, product.brand_id, product.description, product.image, product.featured, id]
  );
};

Product.destroy = id => {
  return db.none(
    `
    DELETE FROM products
    WHERE id = $1
  `,
    [id]
  );
};

module.exports = Product;
