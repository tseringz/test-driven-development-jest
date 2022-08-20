const analyzeArray = require('./analyzeArray');

test('object contains min,max,average and length of an array', () => {
    expect(analyzeArray([3,9,10,14,12])).toEqual({ average: 10, min: 3, max: 14, length: 5 });
});

test('object contains min,max,average and length of an array', () => {
    expect(analyzeArray([3,9,10,14,-1,20])).toEqual({ average: 9, min: -1, max: 20, length: 6 });
});
