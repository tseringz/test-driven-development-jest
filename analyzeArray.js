
function analyzeArray(array) {
    let arrayLength = array.length;
    let minValue = Infinity;
    let maxValue = -Infinity; 
    let averageValue = 0;
    // Minimum and maximum values finder
    for(let i = 0; i < arrayLength; i++) {
        averageValue += array[i];
        if(array[i] < minValue) {
            minValue = array[i];
        } else if (array[i] > maxValue) {
            maxValue = array[i];
        }
    }

   return { average: Math.round(averageValue / arrayLength), min: minValue, max: maxValue, length: arrayLength };
    console.log(minValue, maxValue, Math.round(averageValue / arrayLength), arrayLength);
}


module.exports = analyzeArray;
