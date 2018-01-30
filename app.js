const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(express.static('build'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
});

const productsRoutes = require('./routes/product-routes');
app.use('/data/products', productsRoutes);

const brandsRoutes = require('./routes/brand-routes');
app.use('/data/brands', brandsRoutes);

const reviewsRoutes = require('./routes/review-routes');
app.use('/data/reviews', reviewsRoutes);

app.use('*', (req,res) => {
  res.status(400).json({
    message: 'NOPE',
  })
});

app.listen(PORT, () => {
  console.log(`liveonport${PORT}`)
})
