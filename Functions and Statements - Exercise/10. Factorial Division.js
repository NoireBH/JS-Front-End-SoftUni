function factorialDivision(num1, num2) {

    function getFactorial(number) {

        if (number === 1) {
            return 1;
        }

        return number * getFactorial(number - 1);
    }

    let result = getFactorial(num1) / getFactorial(num2);

    console.log(result.toFixed(2));
}

factorialDivision(5,
    2
);
factorialDivision(6,
    2
    );