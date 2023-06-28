function getSequences(inputArray){

    let sequences = [];

    for (const array of inputArray) {
        sequences.push(JSON.parse(array));
    }

    for (let index = 0; index < sequences.length; index++) {
       
        let array1 = sequences[index];

        for (let index2 = index + 1; index2 < sequences.length; index2++) {
            
            let array2 = sequences[index2];

            if(array1.sort().join(',')=== array2.sort().join(',')){
                sequences.splice(index2,1);
                index--;
            }
        }        
    }

    let orderedSequences = sequences.sort (function(a,b){
       return a.length - b.length;
    });

    for (const sequence of orderedSequences) {
        console.log((`[${sequence.sort(function(a,b){
            return b - a;
         }).join(', ')}]`));
    }
}

getSequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13]",
"[4, -3, 3, -2, 2, -1, 1, 0]"]
);

getSequences(["[7.14, 7.180, 7.339, 80.099]",
"[7.339, 80.0990, 7.140000, 7.18]",
"[7.339, 7.180, 7.14, 80.099]"]
);
