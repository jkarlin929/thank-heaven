const express = require('express');
const reviewsRouter = express.Router();

const reviewsController = require('../controllers/controller-reviews');

reviewsRouter.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3333");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("X-Total-Count", "6")
  next();
});

reviewsRouter.get('/', reviewsController.index);
reviewsRouter.post('/', reviewsController.create);
reviewsRouter.get('/:id', reviewsController.show);
reviewsRouter.put('/:id', reviewsController.update);
reviewsRouter.delete('/:id', reviewsController.destroy);

module.exports = reviewsRouter;
