function printMatrix(number){

   new Array(number).fill(new Array(number).fill(number)).forEach(row => console.log(row.join(' ')));

}

printMatrix(3);
printMatrix(7);