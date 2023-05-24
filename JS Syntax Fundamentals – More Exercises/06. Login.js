function login(passwords){

    let userName = passwords[0];
    let password = reverse(userName);
    let incorrectCount = 0;

    for (let index = 1; index < passwords.length; index++) {
        
        if (password === passwords[index]) {
            console.log(`User ${userName} logged in.`);
            break;
        }

        else {            
            incorrectCount++;
            if (incorrectCount === 4) {
                console.log(`User ${userName} blocked!`);
                break;
            }
            console.log("Incorrect password. Try again.");

        }
        
    }

    function reverse(s){
        return s.split("").reverse().join("");
    }
}


login(['Acer','login','go','let me in','recA']);
login(['momo','omom']);
login(['sunny','rainy','cloudy','sunny','not sunny']);