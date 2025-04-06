const removeFromArray = function(array, ...args) {
    return array.filter((item) => {
        return !args.includes(item);
    });
};

// Do not edit below this line
module.exports = removeFromArray;
