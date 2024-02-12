const removeFromArray = function(inputArray, ... itemsToRemove) {
    let outputArray = [];
    for (let inputValue in inputArray) {
        if (!(itemsToRemove.includes(inputArray[inputValue]))) {
            console.log(inputArray[inputValue], itemsToRemove)
            outputArray.push(inputArray[inputValue])
        }
    }

    return outputArray;

};

// Do not edit below this line
module.exports = removeFromArray;
