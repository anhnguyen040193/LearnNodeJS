const { format } = require('date-fns');
var express = require('express');
var router = express.Router();
const fs = require('fs');
const Category = require('../../model/category');
const Product = require('../../model/product');
const User = require('../../model/user');

const getUserData = JSON.parse(fs.readFileSync('./mock-data/users.json', 'utf8'));
const getProductData = JSON.parse(fs.readFileSync('./mock-data/product.json', 'utf8'));
const getCategoryData = JSON.parse(fs.readFileSync('./mock-data/categories.json', 'utf8'));

router.get('/', function (req, res, next) {
  res.redirect('/admin');
});
/* GET home page. */
router.get('/admin', async function (req, res, next) {
  let totalProduct;
  let totalCategory;
  let totalUser;
  await Category.find({}, function (err, docs) {
    if (err) return res.json(err);
    return (totalCategory = docs.length);
  });

  await Product.find({}, function (err, docs) {
    if (err) return res.json(err);
    return (totalProduct = docs.length);
  });
  await User.find({}, function (err, docs) {
    if (err) return res.json(err);
    return (totalUser = docs.length);
  });
  res.render('index', {
    totalUser,
    totalProduct,
    totalCategory,
  });
});
//Users

router.get('/admin/users', function (req, res, next) {
  const data = getUserData.body;
  const newData = data.map((values) => {
    const dob = format(new Date(values.dob), 'MM/dd/yyyy');
    delete values.dateUpdated;
    const newObj = { ...values, dob };
    return newObj;
  });
  res.render('user', { user: newData });
});

router.get('/admin/products', async function (req, res, next) {
  let data;
  await Product.find({}, function (err, docs) {
    console.log(docs);
    if (err) return res.json(err);
    return (data = docs);
  });
  res.render('product', {
    product: data,
  });
});

router.get('/admin/categories', function (req, res, next) {
  const data = getCategoryData.body;
  res.render('category', { category: data });
});

router.get('/admin/products/:id', async function (req, res, next) {
  let data;
  await Product.find({ _id: req.params.id }, function (err, docs) {
    console.log(docs);
    if (err) return res.json(err);
    return (data = docs);
  });
  res.render('detailPage', {
    detailProduct: data,
  });
});

router.get('/admin/products/v/create', function (req, res, next) {
  const data = getCategoryData.body;
  res.render('createProductPage', { category: data });
});

module.exports = router;
