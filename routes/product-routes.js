const express = require('express');
const productsRouter = express.Router();

const productsController = require('../controllers/controller-products');

productsRouter.get('/', productsController.index);
productsRouter.post('/', productsController.create);
productsRouter.get('/:id', productsController.show);
productsRouter.put('/:id', productsController.update);
productsRouter.delete('/:id', productsController.destroy);

module.exports = productsRouter;
