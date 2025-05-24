const fibonacci = function(number) {

    number = Number(number);

    if (number < 0) {
        return 'OOPS';
    }

    if (number === 0) {
        return 0;
    }

    const sequence = [1];

    for (let i = 0; i < number; i++) {

        const previousNumber = (i - 1) < 0 ? 0 : sequence[i - 1];
        const currentNumber  = sequence[i];
        
        let fibbonaciNumber = previousNumber + currentNumber;

        sequence.push(fibbonaciNumber);
    }

    return sequence[number - 1];
};

// Do not edit below this line
module.exports = fibonacci;
