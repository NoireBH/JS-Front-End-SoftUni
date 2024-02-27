function subSum(array,startIndex,endIndex){

    let sum = 0;

    if (!Array.isArray(array)) {
        return NaN;
    }

    if (endIndex > array.length - 1) {
        endIndex = array.length - 1;
    }

     if(startIndex < 0){
        startIndex = 0;
    }

    for (let index = startIndex; index <= endIndex; index++) {      
        sum += Number(array[index]);       
    }

    return Math.round((sum + Number.EPSILON) * 100) / 100;
}

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(subSum([10, 'twenty', 30, 40], 0, 2));
console.log(subSum([], 1, 2));
console.log(subSum('text', 0, 2));