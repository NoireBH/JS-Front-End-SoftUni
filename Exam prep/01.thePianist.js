function thePianist(input) {
  let numberOfPieces = Number(input.shift());

  let piecesArray = [];
  let count = 0;
  while (count < numberOfPieces) {
    let info = input.shift().split("|");
    let pieceName = info[0];
    let composer = info[1];
    let key = info[2];

    let piece = { pieceName, composer, key };
    piecesArray.push(piece);
    count++;
  }

  let commandLine = input.shift();
  let command = commandLine.split("|")[0];

  while (command !== "Stop") {
    let splitCommandLine = commandLine.split("|");
    if (command === "Add") {
      let pieceName = splitCommandLine[1];
      let composer = splitCommandLine[2];
      let key = splitCommandLine[3];

      let piece = { pieceName, composer, key };
      piecesArray.push(piece);

      console.log(
        `${pieceName} by ${composer} in ${key} added to the collection!`
      );

    } else if (command === "Remove") {
      let pieceName = splitCommandLine[1];
      let pieceToRemove = piecesArray.find((x) => x.pieceName === pieceName);

      if (pieceToRemove != null) {
        let indexOfPiece = piecesArray.indexOf(pieceToRemove);
        console.log(`Successfully removed ${pieceName}!`)
        piecesArray.splice(indexOfPiece,1); 
      }
    }

    commandLine = input.shift();
    command = commandLine.split("|")[0];
  }
}

thePianist([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);

thePianist([
  "4",
  "Eine kleine Nachtmusik|Mozart|G Major",
  "La Campanella|Liszt|G# Minor",
  "The Marriage of Figaro|Mozart|G Major",
  "Hungarian Dance No.5|Brahms|G Minor",
  "Add|Spring|Vivaldi|E Major",
  "Remove|The Marriage of Figaro",
  "Remove|Turkish March",
  "ChangeKey|Spring|C Major",
  "Add|Nocturne|Chopin|C# Minor",
  "Stop",
]);
