// routes/auth-routes.js

const express = require('express');
const authRouter = express.Router();
const passport = require('../services/auth/local');
const authHelpers = require('../services/auth/auth-helpers');
const usersController = require('../controllers/controller-users');
const validator = require('validator');

// authRouter.get('/login', authHelpers.loginRedirect, (req, res) => {
//   res.sendFile(path.join(__dirname + '/index.html'));
// });

// authRouter.get('/register', authHelpers.loginRedirect, (req, res) => {
//   res.render('auth/register');
// });

// authRouter.post('/register', usersController.create);

// authRouter.post('/login', passport.authenticate('local', {
//     successRedirect: '/admin',
//     failureRedirect: '/auth/login',
//     failureFlash: true,
//   })
// );

// authRouter.get('/logout', (req, res) => {
//   req.logout();
//   res.redirect('/');
// });

// module.exports = authRouter;
function validateLoginForm(payload) {
  const errors = {};
  let isFormValid = true;
  let message = '';

  if (!payload || typeof payload.email !== 'string' || payload.email.trim().length === 0) {
    isFormValid = false;
    errors.email = 'Please provide your email address.';
  }

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
    isFormValid = false;
    errors.password = 'Please provide your password.';
  }

  if (!isFormValid) {
    message = 'Check the form for errors.';
  }

  return {
    success: isFormValid,
    message,
    errors
  };
}

// authRouter.post('/signup', (req, res) => {
//   const validationResult = validateSignupForm(req.body);
//   if (!validationResult.success) {
//     return res.status(400).json({
//       success: false,
//       message: validationResult.message,
//       errors: validationResult.errors
//     });
//   }

//   return res.status(200).end();
// });

authRouter.post('/login', (req, res) => {
  const validationResult = validateLoginForm(req.body);
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    });
  }

  return res.status(200).end();
});


module.exports = authRouter;