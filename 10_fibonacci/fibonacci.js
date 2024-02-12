const fibonacci = function(termOfSequence) {
    if (termOfSequence < 0) {
        return "OOPS"
    }
    sequence = [0,1];
    finalResult = 0
    for (currentTerm = 0; currentTerm <= termOfSequence - 2; currentTerm++) {
        sequence.push((sequence[currentTerm] + sequence[currentTerm + 1]))
        console.log(sequence)
    }
    return sequence[termOfSequence]

};

// Do not edit below this line
module.exports = fibonacci;
