const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

require('dotenv').config();

app.use(cookieParser());

// app.use(session({
// 	secret: process.env.SESSION_KEY,
// 	resave: false,
// 	saveUninitialized: true,
// }));


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(express.static('build'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
  res.set('Content-Range', '4');
});

const productsRoutes = require('./routes/product-routes');
app.use('/data/products', productsRoutes);

const brandsRoutes = require('./routes/brand-routes');
app.use('/data/brands', brandsRoutes);

const reviewsRoutes = require('./routes/review-routes');
app.use('/data/reviews', reviewsRoutes);

// app.use('*', (req,res) => {
//   res.status(400).json({
//     message: 'NOPE',
//   })
// });
app.get('/products', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
});
app.get('/brands', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
});

app.get('/reviews', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
});
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
});
const authRouter = require('./routes/auth-routes');
app.use('/admin', authRouter);

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
});

// app.use(passport.initialize());
// app.use(passport.session());


// const authHelpers = require('./services/auth/auth-helpers');
// app.use(authHelpers.loginRequired);


app.get('/api', function (req, res) {
  res.status(200).send('API works.');
});

let UserController = require('./controllers/controller-users');
app.use('/api/users', UserController);

let AuthController = require( './services/auth/AuthController');
app.use('/api/auth', AuthController);


app.get('*', (req, res) => {
  res.redirect('/')
});


app.listen(PORT, () => {
  console.log(`liveonport${PORT}`)
})
