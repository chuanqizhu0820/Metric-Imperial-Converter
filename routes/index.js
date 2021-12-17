var express = require('express');
var router = express.Router();

const metricToImperial = 
{
  km: {
    fullName:'kilometer',
    unit: 'mile',
    value: 0.6214,
  },
  l: {
    fullName:'liter',
    unit: 'gallon',
    value: 0.26417,
  },
  kg:{
    fullName: "kilogram",
    unit: 'pound',
    value: 2.20462,
  },
  mi: {
    fullName: 'mile',
    unit: 'kilometer',
    value: 1.60934,
  },
  gal: {
    fullName: 'gallon',
    unit: 'liter',
    value: 3.78541,
  },
  lbs:{
    unit: 'kilogram',
    value: 0.45359,
    fullName:'pound',
  }
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Metric/Imperial Converter' });
});

router.post('/api/convert', (req, res)=>{
  let value = req.body.numUnit;
  let numberStr = value.match(/[0-9./]/g);
  let number = null;
  if(numberStr===null){
    number = 1;
  }
  else if(/[/]/.test(numberStr.join(''))){
    let numArr = numberStr.join('').split('/');
    number = parseFloat(numArr[0])/parseFloat(numArr[1]);
  }
  else{
    number = parseFloat(numberStr.join(''));
  }
  let unit = value.match(/[a-zA-Z]/g).join('');

  for (const item in metricToImperial){
    if (item===unit){
      const inputUnit = metricToImperial[item].fullName;
      const convertedValue = (number * metricToImperial[item].value).toFixed(4);
      const convertedUnit = metricToImperial[item].unit;
      const returnObj = {
        "initNum":number,
        "initUnit":inputUnit,
        "returnNum": convertedValue,
        "returnUnit": convertedUnit,
        "string":`${number} ${inputUnit}s converts to ${convertedValue} ${convertedUnit}s`
      }
      res.json(returnObj);
    }
  }


})
module.exports = router;
