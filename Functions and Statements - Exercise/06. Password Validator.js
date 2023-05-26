function passValidator(password){

    const lettersAndDigitsRegex =  /^[A-Za-z0-9]*$/;
    const digitRegex = /\d{2,}/;

    let isLettersAndDigits = false;
    let has2Digits = false;
    let hasCharactersAreBetween6And10 = false;

    if (password.length >= 6 && password.length <= 10) {
        hasCharactersAreBetween6And10 = true;
    }

    else {
        console.log("Password must be between 6 and 10 characters");
    }

    if(password.match(lettersAndDigitsRegex)){

        isLettersAndDigits = true;
    }

    else {
        console.log("Password must consist only of letters and digits");
    }

    if (password.match(digitRegex)) {
        
        has2Digits = true;
    }

    else {
        console.log("Password must have at least 2 digits");
    }

    if (isLettersAndDigits && has2Digits && hasCharactersAreBetween6And10) {
        
        console.log("Password is valid");

    }
}

passValidator('logIn');
passValidator('MyPass123');
passValidator('Pa$s$s');