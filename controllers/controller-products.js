const Product = require('../models/products');
const Brand = require('../models/brands');

const productsController = {};

productsController.index = (req, res) => {
  Product.findAll()
    .then(products => {
      res.json({
        message: 'ok',
        data: products,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

productsController.show = (req, res) => {
  Product.findById(req.params.id)
    .then(products => {
      res.json({
        message: 'ok',
        data: products,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

productsController.create = (req, res) => {
  Product.create({
    name: req.body.name,
    brand_id: req.body.brand_id,
    description: req.body.description,
    image: req.body.image,
    featured: req.body.featured,
  })
    .then(products => {
      res.json({
        message: 'ok',
        data: products,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

productsController.update = (req, res) => {
  Product.update(
    {
      name: req.body.name,
      brand_id: req.body.brand_id,
      description: req.body.description,
      image: req.body.image,
      featured: req.body.featured,
    },
    req.params.id,
  )
    .then(products => {
      res.json({
        message: 'ok',
        data: products,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

productsController.destroy = (req, res) => {
  Product.destroy(req.params.id)
    .then(products => {
      res.json({
        message: 'ok',
        data: products,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

module.exports = productsController;
