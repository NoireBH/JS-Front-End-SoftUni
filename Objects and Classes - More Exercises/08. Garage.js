function solve(array){

    let garages = [];
    
    for (const info of array) {
        let [garageNumber,carInfo] = info.split(' - ');
        
        let found = garages.find(g => g.garageNumber === garageNumber);
        if (!found) {

            garages.push({
                garageNumber: garageNumber,
                carInfo: [],
            });

            found = garages.find(g => g.garageNumber === garageNumber);
        }
            found.carInfo.push(carInfo);
    }
            let output = '';
         garages.forEach(garage => {
        output += `Garage № ${garage.garageNumber}\n`;

        for (let currCar of garage.carInfo) {
            currCar = currCar.replace(': ', ' - ');
            currCar = currCar.replace(': ', ' - '); // replaceAll doesnt work in judge
            currCar = currCar.replace(': ', ' - ');
            currCar = currCar.replace(': ', ' - ');
            output += `--- ${currCar}\n`;
        }
    });

    console.log(output);

  
}


solve(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);

solve(['1 - color: green, fuel type: petrol',
'1 - color: dark red, manufacture: WV',
'2 - fuel type: diesel',
'3 - color: dark blue, fuel type: petrol']
);