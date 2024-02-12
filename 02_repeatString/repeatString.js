const repeatString = function(repeatedString, numberOfTimesRepeated) {
    let finalString = "";
    if (numberOfTimesRepeated < 0) {
    return "ERROR"
    }
    while (numberOfTimesRepeated > 0) {
        finalString = finalString.concat(repeatedString)
        numberOfTimesRepeated -= 1

    }
    return finalString
};

// Do not edit below this line
module.exports = repeatString;
