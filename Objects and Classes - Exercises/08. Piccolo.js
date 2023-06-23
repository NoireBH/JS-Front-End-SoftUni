function piccolo(input){

    let carNumbers = new Set();

    for (const line of input) {
        let[command,carNum] = line.split(', ');

        if (command === 'IN') {
            carNumbers.add(carNum);
        }

        else if(command === 'OUT') {
            carNumbers.delete(carNum);
        }
    }

    if (carNumbers.size === 0) {
        console.log('Parking Lot is Empty');
    }

    else {
        let sortedCarNumbers = [...carNumbers.keys()]
        .sort((carNumA,carNumB) => carNumA.localeCompare(carNumB));

        sortedCarNumbers.forEach(number => {
            console.log(number);
        });
    }

}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
);

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
);