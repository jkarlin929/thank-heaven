const bcrypt = require('bcryptjs');
const User = require('../../models/users.js');

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var VerifyToken = require('./VerifyToken');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


/**
 * Configure JWT
 */
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens

var config = require('../../config'); // get config file

router.post('/login', (req, res) => {
  console.log('login route')

  // User.findByUserName( req.body.username, (err, user) => {
  //   console.log("inside findByUserName");
  //   if (err) return res.status(500).send('Error on the server.');
  //   if (!user) return res.status(404).send('No user found.');
    
  //   // check if the password is valid
  //   var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
  //   if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });

  //   // if user is found and password is valid
  //   // create a token
  //   var token = jwt.sign({ id: user.id }, config.secret, {
  //     expiresIn: 86400 // expires in 24 hours
  //   });
  //   console.log("ive done it right")
  //   // return the information including token as JSON
  //   res.status(200).json({ auth: true, token: token });
  // });


User.findByUserName(req.body.username)
  .then( user => {
    console.log(user);
    if (!user) {
      return res.status(500).json({
        message: 'no user here'
      })
    }
    let passwordIsValid = bcrypt.compare(req.body.password, user.password_digest);
    console.log("password compare", req.body.password, user.password_digest)
    if (!passwordIsValid) {
      console.log(passwordIsValid)
      return res.status(401).json({
        message: 'wrong password'
      })
    }
    let token = jwt.sign({
      id: user.id
    }, config.secret, {
      expiresIn: 86400
    })
    console.log('nailed it');
    res.status(200).json({
      auth: true,
      token
    })
  })
  .catch( err => {
    console.log(err);
    res.status(500).json(err)
  })
});

router.get('/logout', function(req, res) {
  res.status(200).send({ auth: false, token: null });
});

router.post('/register', function(req, res) {

  var hashedPassword = bcrypt.hashSync(req.body.password, 8);

  User.create({
    name : req.body.username,
    password : hashedPassword
  }, 
  function (err, user) {
    if (err) return res.status(500).send("There was a problem registering the user`.");

    // if user is registered without errors
    // create a token
    var token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });

    res.status(200).send({ auth: true, token: token });
  });

});

router.get('/me', VerifyToken, function(req, res, next) {

  User.findById(req.userId, { password: 0 }, function (err, user) {
    if (err) return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");
    res.status(200).send(user);
  });

});

module.exports = router;