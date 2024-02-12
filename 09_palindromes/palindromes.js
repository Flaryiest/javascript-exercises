const palindromes = function(word) {
    charactorsToCheck = word.length;
    reversedWord = word.split("").reverse().join().toLowerCase();
    reversedWord = reversedWord.replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    reversedWord = reversedWord.replaceAll(" ", "")
    word = word.replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    word = word.replaceAll(" ", "")
    word = word.toLowerCase()
    console.log(word, reversedWord)
    for (let character = 0; character < charactorsToCheck; character++) {
        if (word[character] != reversedWord[character]) {
            console.log(word[character], reversedWord[character])
            return false
        }
    }
    return true

};

// Do not edit below this line
module.exports = palindromes;
