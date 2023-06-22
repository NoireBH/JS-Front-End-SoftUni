function storeProvision(currentStock,orderedStock){

    let products = {};

    for (let index = 1; index <= currentStock.length; index++) {
        
        if (index % 2 == 0) {
            
            products[currentStock[index - 2]] = Number(currentStock[index - 1]);
        }

    }

    for (let index = 1; index <= orderedStock.length; index++) {
        
        if (index % 2 == 0) {
            
            
            if (products.hasOwnProperty(orderedStock[index - 2])) {
                products[orderedStock[index - 2]] += Number(orderedStock[index - 1]);
            }

            else {
                products[orderedStock[index - 2]] = Number(orderedStock[index - 1]);
            }

        }

    }

    for (const key in products) {
        
        console.log(`${key} -> ${products[key]}`);

    }

}

    storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    );


    storeProvision([
        'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
        ],
        [
        'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
        ]
        );