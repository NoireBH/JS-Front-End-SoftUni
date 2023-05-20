function solve(inputarray){

    let evenSum = 0;
    let oddSum = 0;

    for (let index = 0; index < inputarray.length; index++) {
        inputarray[index] = Number(inputarray[index]);
        
        if (index % 2 === 0) {
            evenSum += inputarray[index];
        } 

        else {
            oddSum += inputarray[index];
        }
    }

    console.log(Math.abs(evenSum - oddSum))
}

solve([1,2,3,4,5,6]);
solve([3,5,7,9]);
solve([2,4,6,8,10]);