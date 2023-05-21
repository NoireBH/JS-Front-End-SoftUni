function sortingNumbers(numbers){

    let initialSort = [...numbers].sort((a,b) => a - b);
    let index = 0;
    let sorted = [];

    while (initialSort.length > 0) {
        
        if (index % 2 === 0) {
            let firstNum = initialSort.shift();
        sorted.push(firstNum);
        }

        else {
            let lastNum = initialSort.pop();
            sorted.push(lastNum);
        }
        

        index++;
    }

    return sorted;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));