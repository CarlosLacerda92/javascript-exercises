const getTheTitles = function(books) {
    return books.reduce((acc, current) => {
        acc.push(current.title);
        return acc;
    }, []);
};

// Do not edit below this line
module.exports = getTheTitles;
