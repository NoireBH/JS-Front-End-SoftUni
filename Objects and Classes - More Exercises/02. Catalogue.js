function createCatalogue(input){
    let catalogue =  [];
    
    input.forEach(product => {
        let[name, price] = product.split(' : ');
        let productObj = {name : name,price : Number(price)};
        catalogue.push(productObj);
    });

    catalogue.sort((a,b) => a.name.localeCompare(b.name));
    let currentLetter = '';

    for (const product of catalogue) {
        
        let firstChar = Array.from(product.name[0]);

        if (currentLetter === firstChar[0]) {
            console.log(`  ${product.name}: ${product.price}`)
        }

        else {
            currentLetter = firstChar[0];
            console.log(currentLetter);
            console.log(`  ${product.name}: ${product.price}`)
        }
    }
    

}

createCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]
    );