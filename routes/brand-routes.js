const express = require('express');
const brandsRouter = express.Router();

const brandsController = require('../controllers/controller-brands');

brandsRouter.use(function(req, res, next) {
  // res.header("Access-Control-Allow-Origin", "http://localhost:3333");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Total-Count");
  next();
});

brandsRouter.get('/', brandsController.index);
brandsRouter.post('/', brandsController.create);
brandsRouter.get('/:id', brandsController.show);
brandsRouter.put('/:id', brandsController.update);
brandsRouter.delete('/:id', brandsController.destroy);

module.exports = brandsRouter;
