function solve(number, ...operations){

    let currentNum = Number(number);

    for (const operation of operations) {
        if (operation === 'chop') {
            currentNum /= 2;
        }

        else if(operation === 'dice'){
            currentNum = Math. sqrt(currentNum);
        }

        else if(operation === 'spice'){
            currentNum += 1;
        }

        else if(operation === 'bake'){
            currentNum *= 3;
        }

        else if(operation === 'fillet'){
            currentNum *= 0.80;
        }

        console.log(currentNum);
    }
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');