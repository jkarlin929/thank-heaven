const Review = require('../models/reviews');

const reviewsController = {};

reviewsController.index = (req, res) => {
  Review.findAll()
    .then(reviews => {
      res.json({
     
        headers: {
          'Content-Type': 'application/json;',
          'Content-Range': reviews.length,
        }
        data: {
          message: 'ok',
          data: reviews,
      }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

reviewsController.show = (req, res) => {
  Review.findById(req.params.id)
    .then(reviews => {
      res.json({
        message: 'ok',
        data: reviews,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

reviewsController.create = (req, res) => {
  Review.create({
    quote: req.body.quote,
    name: req.body.name,
    location: req.body.location,
  })
    .then(reviews => {
      res.json({
        message: 'ok',
        data: reviews,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

reviewsController.update = (req, res) => {
  Review.update(
    {
      quote: req.body.quote,
      name: req.body.name,
      location: req.body.location,
    },
    req.params.id,
  )
    .then(reviews => {
      res.json({
        message: 'ok',
        data: reviews,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

reviewsController.destroy = (req, res) => {
  Review.destroy(req.params.id)
    .then(reviews => {
      res.json({
        message: 'ok',
        data: reviews,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

module.exports = reviewsController;
