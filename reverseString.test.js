const reverseString = require("./reverseString");

test('hello world to dlrow olleh', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
});

test('tsering dhondup to pudnohd gnirest', () => {
    expect(reverseString('tsering dhondup')).toBe('pudnohd gnirest');
});

