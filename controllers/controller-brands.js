const Brand = require('../models/brands');

const brandsController = {};

brandsController.index = (req, res) => {
  Brand.findAll()
    .then(brands => {
      res.json({
        message: 'ok',
        data: brands,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

brandsController.show = (req, res) => {
  Brand.findById(req.params.id)
    .then(brands => {
      res.json({
        message: 'ok',
        data: brands,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

brandsController.create = (req, res) => {
  Brand.create({
    name: req.body.name,
    location: req.body.location,
    story: req.body.story,
    quote: req.body.quote,
    featured: req.body.featured,
  })
    .then(brands => {
      res.json({
        message: 'ok',
        data: brands,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

brandsController.update = (req, res) => {
  Brand.update(
    {
      name: req.body.name,
      location: req.body.location,
      story: req.body.story,
      quote: req.body.quote,
      featured: req.body.featured,
    },
    req.params.id,
  )
    .then(brands => {
      res.json({
        message: 'ok',
        data: brands,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

brandsController.destroy = (req, res) => {
  Brand.destroy(req.params.id)
    .then(brands => {
      res.json({
        message: 'ok',
        data: brands,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

module.exports = brandsController;
