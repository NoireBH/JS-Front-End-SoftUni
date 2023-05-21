function substring(word,text){

    let wordToLowerCase = word.toLowerCase();
    let textArr = text.split(' ');

    for (const text of textArr) {
        
        if (text.toLowerCase() === wordToLowerCase) {
            return word;
        }
    }

    return `${word} not found!`;
}

console.log(substring('javascript',
'JavaScript is the best programming language'
));
console.log(substring('python',
'JavaScript is the best programming language'
));