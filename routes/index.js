var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Metric/Imperial Converter' });
});

router.post('/api/convert', (req, res)=>{
  console.log(req.body.valueUnit);
})
module.exports = router;
