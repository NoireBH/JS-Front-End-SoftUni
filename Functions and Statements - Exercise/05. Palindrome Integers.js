function checkIfPalidrome(numbers){

    for (let index = 0; index < numbers.length; index++) {
        
        if (numbers[index] == numbers[index].toString().split("").reverse().join("")) {
            
            console.log('true');
        }

        else {
            console.log('false');
        }
        
    }

}

checkIfPalidrome([123,323,421,121]);
checkIfPalidrome([32,2,232,1010]);