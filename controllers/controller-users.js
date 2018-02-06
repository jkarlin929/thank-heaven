// controllers/users-controller.js

let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');

let VerifyToken = require('../services/auth/VerifyToken');

router.use(bodyParser.urlencoded({ extended: true }));
let User = require('../models/users');

// CREATES A NEW USER
router.post('/', function (req, res) {
  User.create({
    name : req.body.username,
    password : req.body.password
  },
  function (err, user) {
      if (err) return res.status(500).send("There was a problem adding the information to the database.");
      res.status(200).send(user);
  });
});

module.exports = router;
