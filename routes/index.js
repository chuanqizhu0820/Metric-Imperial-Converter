var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Metric/Imperial Converter' });
});

router.post('/api/convert', (req, res)=>{
  let value = req.body.numUnit;
  let numberStr = value.match(/[0-9./]/g).join('');
  let number = null;
  if(/[/]/.test(numberStr)){
    let numArr = numberStr.split('/');
    number = parseInt(numArr[0])/parseInt(numArr[1]);
  }
  else{
    number = parseFloat(numberStr);
  }
  let unit = value.match(/[a-zA-Z]/g).join('');
  console.log(number);
  console.log(unit);
})
module.exports = router;
