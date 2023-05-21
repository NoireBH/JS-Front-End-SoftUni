function solve(array,element){
    
    let returnedArray = [];

    for (let index = 0; index < array.length; index += element) {
        
        returnedArray.push(array[index]);
    }

    return returnedArray;
}

solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2
);
