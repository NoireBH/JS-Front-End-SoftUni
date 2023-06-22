function createTowns(array){

    let towns = [];
    
    for (const town of array) {
        
        let townSplit = town.split(' | ');     
        let townAsObject = {town: townSplit[0], latitude: Number(townSplit[1]).toFixed(2), longitude: Number(townSplit[2]).toFixed(2)};
        towns.push(townAsObject);

    }

    for (const town of towns) {
        
        console.log(town);
    }

}

createTowns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
);

createTowns(['Plovdiv | 136.45 | 812.575']);