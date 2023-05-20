function solve(number){

    let numberAsString = number.toString();
    let sum = 0;
    let sameNumbers = true;

    for (let index = 0; index <= numberAsString.length - 1; index++) {

        if (numberAsString[index] === numberAsString[index + 1]) {           
        }

        else{

            if(index < numberAsString.length - 1){
                sameNumbers = false;  
            }
                    
        }

        sum += Number(numberAsString[index]);
        
    }

    if(sameNumbers){
        console.log('true');
        console.log(sum);
    }

    else {
        console.log('false');
        console.log(sum);
    }

}

solve(2222222);