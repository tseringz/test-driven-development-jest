
const arrayLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


function caesarCipher(key, str) {
    const cipherArray = [];
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    const strArray = str.split('');
    for(let j = 0; j < strArray.length; j++) { 
    for(let i = 0; i < arrayLetter.length; i++) {
        if(arrayLetter[i] === strArray[j]) {
            cipherArray.push(arrayLetter[(i + key) % 26]);
    } else if (strArray[j].match(regex) || strArray[j].match(/\s/g)) {
        cipherArray.push(strArray[j]);
        break;
    }
}
}
    return cipherArray.join('');
}

module.exports = caesarCipher; // deprecatedOptions
