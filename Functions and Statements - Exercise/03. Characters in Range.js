function charactersInRange(start,end){
    
    let arrayOfChars = [];
    let firstCharAscii = start.charCodeAt(0);
    let secondCharAscii = end.charCodeAt(0);
    let minAscii = Math.min(firstCharAscii,secondCharAscii) + 1;
    let maxAscii = Math.max(firstCharAscii,secondCharAscii);
    
    for (let index = minAscii; index < maxAscii; index++) {
       arrayOfChars.push(String.fromCharCode(index));
       
    }

    console.log(arrayOfChars.join(' '));
}

charactersInRange('#',
':'
);
charactersInRange('C',
'#'
);