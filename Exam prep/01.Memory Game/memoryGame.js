function solve(input) {
  let sequence = input.shift().split(" ");

  let command = input.shift();
  let moves = 0;
  while (command !== "end" && sequence.length > 0) {
    moves++;
    let [index1, index2] = command.split(" ");

    if (
      index1 === index2 ||
      index1 < 0 ||
      index1 >= sequence.length ||
      index2 < 0 ||
      index2 >= sequence.length
    ) {
      sequence.splice(sequence.length / 2, 0, `-${moves}a`, `-${moves}a`);
      console.log("Invalid input! Adding additional elements to the board");
    } else if (sequence[index1] === sequence[index2]) {
      console.log(
        `Congrats! You have found matching elements - ${sequence[index1]}!`
      );
      sequence.splice(index1, 1);
      if (index2 === '0') {
        sequence.splice(index2, 1);
      }

      else {
        sequence.splice(index2 - 1, 1);
      }
      
    } else {
      console.log("Try again!");
    }

    command = input.shift();
  }

  if (sequence.length === 0) {
    console.log(`You have won in ${moves} turns!`);
  } else {
    console.log("Sorry you lose :(");
    console.log(`${sequence.join(" ")}`);
  }
}

solve(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);
