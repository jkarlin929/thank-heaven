const db = require('../db/config');

const Review = {};

Review.findAll = () => {
  return db.query(`SELECT * FROM reviews`);
};

Review.findById = id => {
  return db.oneOrNone(
    `
    SELECT * FROM reviews
    WHERE id = $1
  `,
    [id]
  );
};

Review.create = review => {
  return db.one(
    `
    INSERT INTO reviews
    (quote, name, location)
    VALUES ($1, $2, $3)
    RETURNING *
  `,
    [review.quote, review.name, review.location]
  );
};

Review.update = (review, id) => {
  return db.one(
    `
    UPDATE reviews SET
      quote = $1,
      name = $2,
      location = $3
    WHERE id = $4
    RETURNING *
  `,
    [review.quote, review.name, review.location, id]
  );
};

Review.destroy = id => {
  return db.none(
    `
    DELETE FROM reviews
    WHERE id = $1
  `,
    [id]
  );
};

module.exports = Review;
