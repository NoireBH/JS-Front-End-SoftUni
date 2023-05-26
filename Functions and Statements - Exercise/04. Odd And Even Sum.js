function oddAndEvenSum(number){

    let oddSum = 0;
    let evenSum = 0;
    let stringedNum = number.toString();

    for (let index = 0; index < stringedNum.length; index++) {
        
        if (Number(stringedNum[index]) % 2 === 0) {
            evenSum += Number(stringedNum[index]);
        } 
        
        else {
            oddSum += Number(stringedNum[index]);
        }
    }

    console.log(` Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);
