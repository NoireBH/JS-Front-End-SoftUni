function solve(number){

    let numberString = number.toString();
    let sum = 0;

    for (const num of numberString) {
       let digit = Number(num);
        sum += digit;
    }

    console.log(sum);
}

solve(543);