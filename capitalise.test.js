const capitalise = require('./capitalise');

test('tenzin is capitalise to Tenzin', () => {
    expect(capitalise('tenzin')).toBe('Tenzin');
});

test('my name is Tenzin is capitalise to My name is Tenzin', () => {
    expect(capitalise('my name is tenzin')).toBe('My name is tenzin');
});