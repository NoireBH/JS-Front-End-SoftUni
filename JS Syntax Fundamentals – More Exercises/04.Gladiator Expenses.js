function expenses(lostFights,helmetPrice,swordPrice,shieldPrice,armorPrice){

    let gladiatorExpenses = 0;
    let brokenShieldCounter = 0;

    for (let index = 1; index <= lostFights; index++) {
        
        if (index % 6 === 0) {
            gladiatorExpenses += helmetPrice + swordPrice + shieldPrice;
            brokenShieldCounter++;

            if (brokenShieldCounter === 2) {
                gladiatorExpenses += armorPrice;
                brokenShieldCounter = 0;
            }
        }

       else if (index % 2 === 0) {
            gladiatorExpenses += helmetPrice;
        }
        
        else if (index % 3 === 0) {
            gladiatorExpenses += swordPrice;
        }
    }

    console.log(`Gladiator expenses: ${gladiatorExpenses.toFixed(2)} aureus`)
}

expenses(7,
    2,
    3,
    4,
    5
    );
    expenses(23,
        12.50,
        21.50,
        40,
        200
        );