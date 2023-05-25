function simpleCalculator(num1, num2, operator) {

    const multiply = (num1, num2) => num1 * num2;
    const divide = (num1, num2) => num1 / num2;
    const add = (num1, num2) => num1 + num2;
    const subtract = (num1, num2) => num1 - num2;

    if (operator === 'multiply') {
        return multiply(num1, num2);
    }

    else if (operator === 'divide') {
        return divide(num1, num2);
    }

    else if (operator === 'add') {
        return add(num1, num2);
    }

    else if (operator === 'subtract') {
        return subtract(num1, num2);
    }

}

console.log(simpleCalculator(5,
    5,
    'multiply'
));
console.log(simpleCalculator(40,
    8,
    'divide'
    
));
console.log(simpleCalculator(12,
    19,
    'add'
    
));

console.log(simpleCalculator(50,
    13,
    'subtract'
    
));