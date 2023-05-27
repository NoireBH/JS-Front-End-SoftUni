function perfectNumber(number){

    let divisors = [];

    for (let currNum = 1; currNum < number; currNum++) {
        
        if (number % currNum === 0) {
            
            divisors.push(currNum);
        }
        
    }

    let sumOfDivisors = divisors.reduce((previousValue,currectValue) => {
        
        return previousValue + currectValue;
    }, 0);

    if (sumOfDivisors === number) {
        console.log("We have a perfect number!");
    }

    else {
        console.log("It's not so perfect.");
    }

}

perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);