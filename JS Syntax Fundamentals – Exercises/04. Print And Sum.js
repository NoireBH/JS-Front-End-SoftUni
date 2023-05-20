function solve(num1,num2){
    let sum = 0;
    let numArray = [];
    for (let index = num1; index <= num2; index++) {
        sum += index;
        numArray.push(index);
    }

    console.log(numArray.join(' '));
    console.log(`Sum: ${sum}`);
}

solve(5,10);