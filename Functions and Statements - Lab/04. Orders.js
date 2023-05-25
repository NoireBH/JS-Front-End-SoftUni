function order(type,quantity){

    const coffeePrice = 1.50;
    const waterPrice = 1.00;
    const cokePrice = 1.40;
    const snacksPrice = 2.00;

    switch (type) {
        case 'coffee':
            return (coffeePrice * quantity).toFixed(2);
            break;

            case 'water':
                return (waterPrice * quantity).toFixed(2);
                break;

                case 'coke':
            return (cokePrice * quantity).toFixed(2);
            break;

            case 'snacks':
            return (snacksPrice * quantity).toFixed(2);
            break;
            

        default:
            break;
    }
}

console.log(order("water", 5));
console.log(order("coffee", 2));
console.log(order("snacks", 3));