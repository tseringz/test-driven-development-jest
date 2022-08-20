const caesarCipher = require('./cipher');

test('key 4 will shift letter from current position to next 4th position', () => {
    expect(caesarCipher(4, 'brown fox jumped over the lazy dog$$$')).toBe('fvsar jsb nyqtih sziv xli pedc hsk$$$');
});

test('key will shift letter from current position to next 4th position', () => {
    expect(caesarCipher(-1, 'brown fox jumped over the lazy dog$$$')).toEqual('aqnvm enw itlodc nudq sgd kyx cnf$$$');
});

