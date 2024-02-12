const sumAll = function(numbersToAdd) {
    for (number in numbersToAdd) {
      if (!(Number.isInteger(numbersToAdd[number]) )) {
        return "ERROR"
      }
      else if (numbersToAdd[number] < 0) {
        return "ERROR"
      }
    }
    let totalSum = 0;
    let highestNumber = Math.max(... numbersToAdd)
    let lowestNumber = Math.min(... numbersToAdd)
    for (let currentNumber = lowestNumber; currentNumber <= highestNumber; currentNumber++) {
        totalSum += currentNumber;
    
    }
    return totalSum;

};

// works on codepen but not here
// Do not edit below this line
module.exports = sumAll;    
