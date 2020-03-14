var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.headers);
  let ip = req.headers['x-forwarded-for'] == undefined ? req.connection.remoteAddress : req.headers['x-fowarded-for'];
  res.status(200);
  res.send(ip);
});

module.exports = router;
