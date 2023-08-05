function solve(input) {
  let participants = input.shift();

  let riders = [];

  for (let index = 0; index < participants; index++) {
    let [riderName, fuelCapacity, position] = input.shift().split("|");

    if (fuelCapacity > 100) {
      fuelCapacity = 100;
    }

    let rider = { rider: riderName, fuelCapacity, position };

    riders.push(rider);
  }

  let commandInfo = input.shift().split(' - ');
  let command = commandInfo[0];

  while (command !== 'Finish') {
    
    if (command === 'StopForFuel') {
        let riderName = commandInfo[1];
        let minimumFuel = Number(commandInfo[2]);
        let changedPosition = commandInfo[3];

        let riderToFind = riders.find(r => r.rider === riderName);

        if (minimumFuel > riderToFind.fuelCapacity) {
            console.log(`${riderName} stopped to refuel but lost his position, now he is ${changedPosition}.`);
            riderToFind.position = changedPosition;
        }

        else if (minimumFuel <= riderToFind.fuelCapacity) {
            console.log(`${riderName} does not need to stop for fuel!`);
        }

        
    }

    else if (command === 'Overtaking') {
        let rider1Name = commandInfo[1];
        let rider2Name = commandInfo[2];

        let rider1 = riders.find(r => r.rider === rider1Name);
        let rider2 = riders.find(r => r.rider === rider2Name);

        if (rider1.position < rider2.position) {
            let temp = rider1.position;

            rider1.position = rider2.position;
            rider2.position = temp;
            console.log(`${rider1Name} overtook ${rider2Name}!`);
        }
    }

    else if (command === 'EngineFail') {
        let riderName = commandInfo[1];
        let lapsLeft = commandInfo[2];
        console.log(`${riderName} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
        let riderToRemove = riders.find(r => r.rider === riderName);
        let riderIndex = riders.indexOf(riderToRemove);

        riders.splice(riderIndex,1);
    }

     commandInfo = input.shift().split(' - ');
    command = commandInfo[0];

  }

  for (const rider of riders) {
    console.log(`${rider.rider}`);
    console.log(`  Final position: ${rider.position}`);
    
  }

}

solve([
  "3",
  "Valentino Rossi|100|1",
  "Marc Marquez|90|2",
  "Jorge Lorenzo|80|3",
  "StopForFuel - Valentino Rossi - 50 - 1",
  "Overtaking - Marc Marquez - Jorge Lorenzo",
  "EngineFail - Marc Marquez - 10",
  "Finish",
]);

solve((["4",
"Valentino Rossi|100|1",
"Marc Marquez|90|3",
"Jorge Lorenzo|80|4",
"Johann Zarco|80|2",
"StopForFuel - Johann Zarco - 90 - 5",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"])
);
