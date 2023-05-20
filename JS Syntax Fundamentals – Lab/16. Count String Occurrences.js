function solve(string, searchedWord){
    let words = string.split(' ');
    let count = 0;
    for (const word of words) {
        if (word === searchedWord) {
            count++;
        }
    }

    console.log(count);
}