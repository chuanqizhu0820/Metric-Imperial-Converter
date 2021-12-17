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
  console.log(unit);

  for (const item in metricToImperial){
    if (item===unit){
      const inputUnit = metricToImperial[item].fullName;
      const covertedValue = number * metricToImperial[item].value;
      const convertedUnit = metricToImperial[item].unit;
      console.log(`${number} ${inputUnit}s converts to ${covertedValue} ${convertedUnit}s`);
    }
  }


})
module.exports = router;
