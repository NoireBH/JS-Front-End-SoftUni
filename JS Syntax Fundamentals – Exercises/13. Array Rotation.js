function solve(numbers,rotations){
    rotations %= numbers.length;

    for (let index = 0; index < rotations; index++) {
        let firstNum = numbers.shift();
        numbers.push(firstNum);
    }

    console.log(numbers.join(' '));

}

solve([51, 47, 32, 61, 21], 2);
solve([32, 21, 61, 1], 4);
solve([2, 4, 15, 31], 5);