function solve(n,inputArray){
    let array = [];

    for (let index = 0; index < n; index++) {
        array.push(inputArray[index]);        
    }

    let reversed = array.reverse();
    console.log(reversed.join(' '));
}

solve(3, [10,20,30,40,50]);