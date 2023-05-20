function solve(numberOfPeople,peopleType,day){

    let totalPrice = 0;

    if (peopleType === 'Students') {
        
        if (day === 'Friday') {
            totalPrice = 8.45 * numberOfPeople;
        }

        else if(day === 'Saturday') {
            totalPrice = 9.80 * numberOfPeople;
        }

        else if(day === 'Sunday'){
            totalPrice = 10.46 * numberOfPeople;
        }


    } 

    else if(peopleType === 'Business') {

        if (day === 'Friday') {
            totalPrice = 10.90 * numberOfPeople;
        }

        else if(day === 'Saturday') {
            totalPrice = 15.60 * numberOfPeople;
        }

        else if(day === 'Sunday'){
            totalPrice = 16 * numberOfPeople;
        }
    }

    else if(peopleType === 'Regular') {

        if (day === 'Friday') {
            totalPrice = 15 * numberOfPeople;
        }

        else if(day === 'Saturday') {
            totalPrice = 20 * numberOfPeople;
        }

        else if(day === 'Sunday'){
            totalPrice = 22.50 * numberOfPeople;
        }
    }

    if (numberOfPeople >= 30 && peopleType === 'Students') {
        totalPrice = totalPrice * 0.85;
    } 
    
    else if (numberOfPeople >= 100 && peopleType === 'Business') {
        
        if (day === 'Friday') {
            totalPrice -= 10.90 * 10;
        }

        else if(day === 'Saturday') {
            totalPrice -= 15.60 * 10;
        }

        else if(day === 'Sunday'){
            totalPrice -= 16 * 10;
        }
    }

    else if(numberOfPeople >= 10 && numberOfPeople <= 20 && peopleType === 'Regular'){
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

solve(30, 'Students', 'Sunday');
solve(40, 'Regular', 'Saturday');