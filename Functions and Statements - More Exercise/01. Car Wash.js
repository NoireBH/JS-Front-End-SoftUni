function carWash(commands){
    
    let washValue = 0;

    for (const command of commands) {
        
        if (command === 'soap') {
            
            washValue += 10;
        }

        else if(command === 'water'){
            washValue *= 1.2;
        }

        else if(command === 'vacuum cleaner'){
            washValue *= 1.25;
        }

        else if(command === 'mud'){
            washValue *= 0.90;
        }
    }

    console.log(`The car is ${washValue.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);