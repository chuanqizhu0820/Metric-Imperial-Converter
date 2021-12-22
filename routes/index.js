var express = require('express');
var converter = require('../controllers/convertHandler')
var router = express.Router();
const convertHandler = new converter();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Metric/Imperial Converter' });
});

router.post('/api/convert', (req, res)=>{
  let value = req.body.numUnit;

  let initUnit = convertHandler.getUnit(value);
  let initNum = convertHandler.getNum(value);
  if(initUnit=='invalid unit' && initNum !== 'invalid number'){
    res.send('invalid unit')
  }else if(initUnit!=='invalid unit' && initNum == 'invalid number'){
    res.send('invalid number')
  }else if((initUnit =='invalid unit' && initNum == 'invalid number')){
    res.send('invalid number and unit')
  }else{
    let returnUnit = convertHandler.getReturnUnit(initUnit);
    let returnNum = convertHandler.convert(initNum, initUnit);
    let returnString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
    res.json(
    {
      initNum:initNum,
      initUnit:initUnit,
      returnNum:returnNum,
      returnUnit:returnUnit,
      string:returnString
    }
  )
  }
})

module.exports = router;
