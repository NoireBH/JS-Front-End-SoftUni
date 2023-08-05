function solve(input) {
  let plants = [];
  let n = input.shift();

  for (let index = 0; index < n; index++) {
    let [plantName, rarity] = input.shift().split("<->");

    let plant = {
      plant: plantName,
      rarity,
      rating: [],
    };

    plants.push(plant);
  }

  let cmdInfo = input.shift().split(": ");
  let command = cmdInfo[0];
  let plantInfo = cmdInfo[1];

  while (command !== "Exhibition") {
    if (command === "Rate") {
      let [plant, rating] = plantInfo.split(" - ");

      let plantToRate = plants.find((x) => x.plant === plant);

      if (plantToRate === undefined) {
        console.log("error");
      } else {
        plantToRate.rating.push(Number(rating));
      }
    } else if (command === "Update") {
      let [plant, rarity] = plantInfo.split(" - ");

      let plantToUpdate = plants.find((x) => x.plant === plant);

      if (plantToUpdate === undefined) {
        console.log("error");
      } else {
        plantToUpdate.rarity = rarity;
      }
    } else if (command === "Reset") {
      let plant = plantInfo;
      let plantToReset = plants.find((x) => x.plant === plant);

      if (plantToReset === undefined) {
        console.log("error");
      } else {
        plantToReset.rating = [];
      }
    }

    cmdInfo = input.shift().split(": ");
    command = cmdInfo[0];
    plantInfo = cmdInfo[1];
  }

  console.log("Plants for the exhibition:");

  for (const plant of plants) {
    let average = plant.rating.reduce((a, b) => a + b, 0) / plant.rating.length;


    if (plant.rating.length > 0) {
      console.log(
        `- ${plant.plant}; Rarity: ${plant.rarity}; Rating: ${average.toFixed(2)}`
      );
    }

    else {
      let n = 0
      console.log(
        `- ${plant.plant}; Rarity: ${plant.rarity}; Rating: ${n.toFixed(2)}`
      );
    }
    
  }
}

solve((["2",
"Candelabra<->10",
"Oahu<->10",
"Rate: Oahu - 7",
"Rate: Candelabra - 6",
"Exhibition"])
)
