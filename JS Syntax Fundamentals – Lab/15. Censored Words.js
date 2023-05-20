function solve(text,word){

    censored = text.replace(word, '*'.repeat(word.length));
    
    while (censored.includes(word)) {
        censored = censored.replace(word, '*'.repeat(word.length));
    }

    console.log(censored);
}


solve('A small sentence with some words', 'small');