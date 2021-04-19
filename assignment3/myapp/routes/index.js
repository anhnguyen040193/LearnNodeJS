var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/admin', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/admin/users', function (req, res, next) {
  res.render('user', { title: 'User' });
});

module.exports = router;
