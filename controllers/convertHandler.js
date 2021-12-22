function ConvertHandler() {
  
  this.getNum = function(input) {

    let numberStr = input.replace(/[a-zA-Z]+$/, '');
    let number = null;
    if(numberStr.length===0){
        return number = 1;
    }
    if (/[^0-9./]/.test(numberStr)){
        return 'invalid number'
    }

    let numArr = numberStr.match(/(\d+[.]\d+|[/]|\d+)/g);

    if(numArr==null){
        return 'invalid number'
    }
    if (numArr.length===1 
        && /(\d+[.]\d+|\d+)/.test(numArr[0]))
    {
        number = parseFloat(numArr[0]);
    }
    else if(numArr.length===3 
            && /(\d+[.]\d+|\d+)/.test(numArr[0]) 
            && /(\d+[.]\d+|\d+)/.test(numArr[2]) 
            && numArr[1]==='/')
    {
        number = parseFloat(numArr[0])/parseFloat(numArr[2]); 
    }else{
       return 'invalid number'
    }    
    return number.toFixed(5);
  };
  
  this.getUnit = function(input) {

    let unit = '';
    let unitArr = input.match(/[a-zA-Z]+$/);
    if(['mi','kg','km','lbs','l',,'gal'].indexOf(unitArr[0].toLowerCase())>=0){
        unit = unitArr[0].toLowerCase();
    }else{
        return 'invalid unit'
    }
    if(unit==='l'){
        unit = 'L';
    }
    return unit;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    switch(initUnit){
        case 'gal':
            result='L';
        case 'L':
            result='gal';
        case 'lbs':
            result='kg';
        case 'kg':
            result='lbs';
        case 'mi':
            result='km';
        case 'km':
            result='mi';     
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    switch(unit){
        case 'gal':
            result='gallon';
        case 'L':
            result='liter';
        case 'lbs':
            result='pound';
        case 'kg':
            result='kilogram';
        case 'mi':
            result='kilometer';
        case 'km':
            result='mile';     
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch(initUnit){
        case 'gal':
            result=initNum*galToL;
        case 'L':
            result=initNum/galToL;
        case 'lbs':
            result=initNum*lbsToKg;
        case 'kg':
            result=initNum/lbsToKg;
        case 'mi':
            result=initNum*miToKm;
        case 'km':
            result=initNum/miToKm;
    }
    return result.toFixed(5);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    result = initNum+' '+this.spellOutUnit(initUnit)+' converts to '+returnNum+' '+this.spellOutUnit(returnUnit);
    return result;
  };
  
}

module.exports = ConvertHandler;