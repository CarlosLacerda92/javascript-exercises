const findTheOldest = function(people) {

    return people.reduce((accumulator, current) => {

        if (!accumulator.yearOfDeath) {
            accumulator.yearOfDeath = new Date().getFullYear();
        }

        if (!current.yearOfDeath) {
            current.yearOfDeath = new Date().getFullYear();
        }

        let accAge  = accumulator.yearOfDeath - accumulator.yearOfBirth;
        let currAge = current.yearOfDeath - current.yearOfBirth;

        return accAge > currAge ? accumulator : current;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
