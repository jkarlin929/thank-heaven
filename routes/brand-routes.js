const express = require('express');
const brandsRouter = express.Router();

const brandsController = require('../controllers/controller-brands');

brandsRouter.get('/', brandsController.index);
brandsRouter.post('/', brandsController.create);
brandsRouter.get('/:id', brandsController.show);
brandsRouter.put('/:id', brandsController.update);
brandsRouter.delete('/:id', brandsController.destroy);

module.exports = brandsRouter;
