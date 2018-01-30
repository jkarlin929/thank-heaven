const express = require('express');
const reviewsRouter = express.Router();

const reviewsController = require('../controllers/controller-reviews');

reviewsRouter.get('/', reviewsController.index);
reviewsRouter.post('/', reviewsController.create);
reviewsRouter.get('/:id', reviewsController.show);
reviewsRouter.put('/:id', reviewsController.update);
reviewsRouter.delete('/:id', reviewsController.destroy);

module.exports = reviewsRouter;
