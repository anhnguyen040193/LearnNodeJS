var express = require('express');
// var mongoose = require('mongoose');
const Products = require('../../model/product');
var router = express.Router();

router.get('/', function (req, res, next) {
  const queryReq = JSON.parse(req.query.filter);
  let query = {};
  if (queryReq.where.salePrice) {
    query.salePrice = queryReq.where.salePrice;
  }
  Products.find(query, function (err, docs) {
    if (err) return res.json(err);
    if (docs.length > 0) {
      res.send({
        message: 'success get products',
        response: docs,
        totalLength: docs.length,
      });
    } else {
      res.send({
        message: 'not found',
      });
    }
  }).limit(parseInt(req.query.limit));
});

module.exports = router;
