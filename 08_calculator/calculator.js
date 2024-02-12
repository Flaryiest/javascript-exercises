const add = function(numberOne, numberTwo) {
	return numberOne + numberTwo
};

const subtract = function(numberOne, numberTwo) {
	return numberOne - numberTwo
};

const sum = function(listOfNumbers) {
  let finalResult = 0
  for (let number in listOfNumbers) {
    finalResult += listOfNumbers[number];
  }
  return finalResult
	
};

const multiply = function(listOfNumbers) {
  let finalResult = 1
  for (let number in listOfNumbers) {
    finalResult = finalResult * listOfNumbers[number]
  }
  return finalResult
};

const power = function(numberOne, numberTwo) {
  let finalResult = numberOne;
  for (let number = 1; number < numberTwo; number++) {
    console.log(number, numberOne)
    finalResult = finalResult * numberOne;
  }
  return finalResult
};

const factorial = function(maxNumber) {
	let finalResult = 1
  for (let number = 1; number <= maxNumber; number++) {
    finalResult = finalResult * number
  }
  return finalResult
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
