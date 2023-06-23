function wordTracker(words) {
  let wordsToLookFor = words.shift().split(" ");
  let tracker = {};
  wordsToLookFor.forEach((wordToLookFor) => {
    for (const word of wordsToLookFor) {
      let count = words.filter((w) => w === word).length;
      tracker[word] = count;
    }
  });

  let sortedTracker = Object.entries(tracker).sort((wordA, wordB) => {
    let [nameA, countA] = wordA;
    let [nameB, countB] = wordB;

    return countB - countA;
  });

  for (const [word, count] of sortedTracker) {
    console.log(`${word} - ${count}`);
  }
}

wordTracker([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
