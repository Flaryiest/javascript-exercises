const reverseString = function(inputString) {
    let splitString = inputString.split("");
    splitString.reverse();
    let reversedString = splitString.join();
    reversedString = reversedString.replaceAll(",", "");
    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
