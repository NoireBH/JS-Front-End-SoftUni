function modifyNumber(number) {

    number = String(number).split('').map(Number);
    let average = number.reduce((a, b) => a + b, 0) / number.length;
    number = number.join('');
    number = Number(number);

    while (average < 5) {

        number = String(number).split('').map(Number);
        number.push(9);
        average = number.reduce((a, b) => a + b, 0) / number.length;
        number = number.join('');
        number = Number(number);
    }

    console.log(number);
}

modifyNumber(101);
modifyNumber(5835);