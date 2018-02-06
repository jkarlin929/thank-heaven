const express = require('express');
const productsRouter = express.Router();

const productsController = require('../controllers/controller-products');

productsRouter.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3333");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

productsRouter.get('/', productsController.index);
productsRouter.post('/', productsController.create);
productsRouter.get('/:id', productsController.show);
productsRouter.put('/:id', productsController.update);
productsRouter.delete('/:id', productsController.destroy);

module.exports = productsRouter;
