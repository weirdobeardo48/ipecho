var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log(req.headers);
  let ip = req.headers['x-forwarded-for'] == undefined ? req.connection.remoteAddress : req.headers['x-forwarded-for'];
  res.status(200);
  res.send(ip);
});

module.exports = router;

router.get('/json', function (req, res, next) {
  try {
    // console.log(req);
    res.status(200);
    let ip = req.headers['x-forwarded-for'] == undefined ? req.connection.remoteAddress : req.headers['x-forwarded-for'];
    result = {};
    result['IP'] = ip;
    result['User-Agent'] = req.headers['user-agent'];
    res.json(result);
  } catch (e) {
    console.log(e);
    res.status(502);
    res.json({
      'status': 'error'
    });
  }
});