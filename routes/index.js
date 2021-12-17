var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Metric/Imperial Converter' });
});

router.post('/api/convert', (req, res)=>{
  let value = req.body.numUnit;
  let number = parseFloat(value.match(/[0-9.]/g).join(''));
  let unit = value.match(/[a-zA-Z]/g).join('');
  console.log(number);
  console.log(unit);
})
module.exports = router;
