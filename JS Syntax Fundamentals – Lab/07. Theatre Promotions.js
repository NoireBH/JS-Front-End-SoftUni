function solve(day,age){
    let price = 0;

    if(age < 0 || age > 122){
        console.log("Error!")
        return;
    }
         
    if (day ==='Weekday') {
        if (age <= 18) {
            price = 12;
        }

        else if (18 < age && age <= 64) {
            price = 18;
        }

        else if (64 < age && age <= 122) {
            price = 12;
        }
    }

    else if (day === 'Weekend') {
        if (age <= 18) {
            price = 15;
        }

        else if (18 < age && age <= 64) {
            price = 20;
        }

        else if (64 < age && age <= 122) {
            price = 15;
        }
    }

    else {
        if (age <= 18) {
            price = 5;
        }

        else if (18 < age && age <= 64) {
            price = 12;
        }

        else if (64 < age && age <= 122) {
            price = 10;
        }
    }

    console.log(`${price}$`)
}
solve('Weekday',64);
solve('Weekend',19);
solve('Holiday',64);
solve('Holiday',123);
solve('Holiday',-1);