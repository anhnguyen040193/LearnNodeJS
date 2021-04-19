const { format } = require('date-fns');
var express = require('express');
var router = express.Router();
const fs = require('fs');
/* GET home page. */
router.get('/admin', function (req, res, next) {
  const getUserData = JSON.parse(fs.readFileSync('./mock-data/users.json', 'utf8'));
  const getProductData = JSON.parse(fs.readFileSync('./mock-data/product.json', 'utf8'));
  const getCategoryData = JSON.parse(fs.readFileSync('./mock-data/categories.json', 'utf8'));
  res.render('index', {
    totalUser: getUserData.body.length,
    totalProduct: getProductData.body.length,
    totalCategory: getCategoryData.body.length,
  });
});
//Users

router.get('/admin/users', function (req, res, next) {
  const getUserData = JSON.parse(fs.readFileSync('./mock-data/users.json', 'utf8'));
  const data = getUserData.body;
  const newData = data.map((values) => {
    const dob = format(new Date(values.dob), 'MM/dd/yyyy');
    delete values.dateUpdated;
    const newObj = { ...values, dob };
    return newObj;
  });
  res.render('user', { user: newData });
});

router.get('/admin/products', function (req, res, next) {
  const getProductData = JSON.parse(fs.readFileSync('./mock-data/product.json', 'utf8'));
  const data = getProductData.body;
  res.render('product', { product: data });
});

router.get('/admin/categories', function (req, res, next) {
  const getCategoryData = JSON.parse(fs.readFileSync('./mock-data/categories.json', 'utf8'));
  const data = getCategoryData.body;
  res.render('category', { category: data });
});

router.get('/admin/products/:id', function (req, res, next) {
  const getProductData = JSON.parse(fs.readFileSync('./mock-data/product.json', 'utf8'));
  const getDetailProduct = getProductData.body.find((values) => values._id === req.params.id);
  const converArr = [getDetailProduct];
  res.render('detailPage', { detailProduct: converArr });
});

module.exports = router;
