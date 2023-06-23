function oddOccurences(line) {
  let words = line.split(" ");
  let allWords = {};

  for (const word of words) {
    let lowercaseWord = word.toLowerCase();

    if (!allWords.hasOwnProperty(lowercaseWord)) {
      allWords[lowercaseWord] = 1;
    } else {
      allWords[lowercaseWord]++;
    }
  }

  let sortedWordsArray = Object.entries(allWords).filter((a) =>{
    let [word,count] = a;

    return count % 2 !== 0;
  })
  .map(el => el[0]);

  console.log(sortedWordsArray.join(' '));

}

oddOccurences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
oddOccurences("Cake IS SWEET is Soft CAKE sweet Food");
