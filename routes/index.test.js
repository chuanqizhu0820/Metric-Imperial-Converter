const converter = require('./__mock__/index')

test('should correctly read a whole number input', () => {
  let valueUnit = '999kg';
  console.log(converter(valueUnit));
  expect(converter(valueUnit).initNum).toBe(999);
});

test('should correctly read a decimal number input.', () => {
  let valueUnit = '99.9kg';
  console.log(converter(valueUnit));
  expect(converter(valueUnit).initNum).toBe(99.9);
});

test('should correctly read a fractional input.', () => {
  let valueUnit = '99/9kg';
  console.log(converter(valueUnit));
  expect(converter(valueUnit).initNum).toBe(11);
});

test('should correctly read a fractional input with a decimal.', () => {
  let valueUnit = '9.9/9kg';
  console.log(converter(valueUnit));
  expect(converter(valueUnit).initNum).toBe(1.1);
});

test('should correctly return an error on a double-fraction (i.e. 3/2/3).', () => {
  let valueUnit = '3/2/3kg';
  console.log(converter(valueUnit));
  expect(converter(valueUnit)).toBe("Error of double-fraction");
});

test('should correctly default to a numerical input of 1 when no numerical input is provided.', () => {
  let valueUnit = 'kg';
  console.log(converter(valueUnit));
  expect(converter(valueUnit).initNum).toBe(1);
});

test('should correctly read kg.', () => {
  let valueUnit = '999kg';
  console.log(converter(valueUnit));
  expect(converter(valueUnit).initUnit).toBe("kilogram");
});

test('should correctly read l', () => {
  let valueUnit = '999l';
  console.log(converter(valueUnit));
  expect(converter(valueUnit).initUnit).toBe("liter");
});

test('should correctly read km', () => {
  let valueUnit = '999km';
  console.log(converter(valueUnit));
  expect(converter(valueUnit).initUnit).toBe("kilometer");
});

test('should correctly read lbs', () => {
  let valueUnit = '999lbs';
  console.log(converter(valueUnit));
  expect(converter(valueUnit).initUnit).toBe("pound");
});

test('should correctly read gal', () => {
  let valueUnit = '999gal';
  console.log(converter(valueUnit));
  expect(converter(valueUnit).initUnit).toBe("gallon");
});

test('should correctly read mi', () => {
  let valueUnit = '999mi';
  console.log(converter(valueUnit));
  expect(converter(valueUnit).initUnit).toBe("mile");
});

test('should correctly return an error for an invalid input unit.', () => {
  let valueUnit = '999mm';
  console.log(converter(valueUnit));
  expect(converter(valueUnit)).toBe("invalid unit");
});

test('should correctly convert gal to L.', () => {
  let valueUnit = '999gal';
  console.log(converter(valueUnit));
  expect(converter(valueUnit).returnUnit).toBe("liter");
});

test('should correctly convert L to gal.', () => {
  let valueUnit = '999l';
  console.log(converter(valueUnit));
  expect(converter(valueUnit).returnUnit).toBe("gallon");
});

test('should correctly convert mi to km.', () => {
  let valueUnit = '999mi';
  console.log(converter(valueUnit));
  expect(converter(valueUnit).returnUnit).toBe("kilometer");
});

test('should correctly convert km to mi.', () => {
  let valueUnit = '999km';
  console.log(converter(valueUnit));
  expect(converter(valueUnit).returnUnit).toBe("mile");
});

test('should correctly convert lbs to kg.', () => {
  let valueUnit = '999lbs';
  console.log(converter(valueUnit));
  expect(converter(valueUnit).returnUnit).toBe("kilogram");
});

test('should correctly convert kg to lbs', () => {
  let valueUnit = '999kg';
  console.log(converter(valueUnit));
  expect(converter(valueUnit).returnUnit).toBe("pound");
});

test('should correctly convert kg to lbs', () => {
  let valueUnit = '999kg';
  console.log(converter(valueUnit));
  expect(converter(valueUnit).returnUnit).toBe("pound");
});




