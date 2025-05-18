const palindromes = function(str) {

    let arr    = [];
    let newStr = '';

    str = str.toLowerCase();
    str = str.replace(/[^a-zA-Z0-9]/g, '');
    
    arr = str.split('');
    arr.reverse();

    //newStr = arr.join('');

    newStr = arr.reduce((text, current) => {
        return text + current;
    }, '');

    if (newStr != str) {
        return false;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
