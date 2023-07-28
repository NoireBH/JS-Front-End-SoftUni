function solve(input) {
  let horseArray = input.shift().split("|");

  let commandInfo = input.shift().split(" ");
  let command = commandInfo[0];

  while (command !== "Finish") {
    if (command === "Retake") {
      let overtakingHorseIndex = horseArray.indexOf(commandInfo[1]);
      let overtakenHorseIndex = horseArray.indexOf(commandInfo[2]);

      if (overtakingHorseIndex < overtakenHorseIndex) {
        let overtakingHorse = horseArray[overtakingHorseIndex];
        let overtakenHorse = horseArray[overtakenHorseIndex];

        horseArray[overtakingHorseIndex] = overtakenHorse;
        horseArray[overtakenHorseIndex] = overtakingHorse;
        console.log(`${overtakingHorse} retakes ${overtakenHorse}.`);
      }
    } else if (command === "Trouble") {
      let horse = commandInfo[1];
      let horseIndex = horseArray.indexOf(horse);
      if (horseIndex > 0) {
        [horseArray[horseIndex], horseArray[horseIndex - 1]] = [
          horseArray[horseIndex - 1],
          horseArray[horseIndex],
        ];
        console.log(`Trouble for ${horse} - drops one position.`);
      }
    } else if (command === "Rage") {
      let horse = commandInfo[1];
      let horseIndex = horseArray.indexOf(horse);

      if (horseIndex === horseArray.length - 2) {
        let overtakingHorse = horseArray.splice(horseIndex, 1);
        horseArray.push(overtakingHorse[0]);
      } else if (horseIndex < horseArray.length - 2) {
        let overtakingHorse = horseArray.splice(horseIndex, 1);
        let overtakenHorse = horseArray.splice(horseIndex + 1, 1);
        horseArray.splice(horseIndex + 1,0,overtakingHorse[0]);
        horseArray.splice(horseIndex + 1,0,overtakenHorse[0]);
      }

      console.log(`${horse} rages 2 positions ahead.`);

    } else {
      let firstPlace = horseArray.pop();
      let lastPlace = horseArray.shift();
      horseArray.push(firstPlace);
      horseArray.push(lastPlace);

      console.log(`What a miracle - ${lastPlace} becomes first.`);
    }

    commandInfo = input.shift().split(" ");
    command = commandInfo[0];
  }

  console.log(horseArray.join("->"));
  console.log(`The winner is: ${horseArray[horseArray.length - 1]}`);
}

solve([
  "Bella|Alexia|Sugar",
  "Retake Alexia Sugar",
  "Rage Bella",
  "Trouble Bella",
  "Finish",
]);

solve([
  "Onyx|Domino|Sugar|Fiona",
  "Trouble Onyx",
  "Retake Onyx Sugar",
  "Rage Domino",
  "Miracle",
  "Finish",
]);
