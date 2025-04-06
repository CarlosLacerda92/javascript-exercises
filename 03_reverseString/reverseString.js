const reverseString = function(string) {

    const arrayOfCharacters = [...string];
    let reversedString      = '';

    for (let i = (arrayOfCharacters.length - 1); i >= 0; i--) {
        reversedString += arrayOfCharacters[i];
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
