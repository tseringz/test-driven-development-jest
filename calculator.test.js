const calculator = require('./calculator');

test('calculator object', () => {
    
    expect(calculator.sum(2,3)).toEqual(5);
});

test('calculator object', () => {
    expect(calculator.subtract(10,17)).toEqual(-7);
});


test('calculator object', () => {
    expect(calculator.divide(5,2)).toEqual(2.5);
});

test('calculator object', () => {
    expect(calculator.multiply(9,6)).toEqual(54);
});