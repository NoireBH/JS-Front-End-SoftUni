function convertToObject(jsonString){

    let data = JSON.parse(jsonString);

    for (const key in data) {
        console.log(`${key}: ${data[key]}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');