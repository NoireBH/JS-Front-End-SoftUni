function solve(typeOfFruit,grams,priceInKilograms){

    let weightInKg = grams / 1000;
    let money = weightInKg * priceInKilograms;
    console.log(`I need $${money.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${typeOfFruit}.`);
}