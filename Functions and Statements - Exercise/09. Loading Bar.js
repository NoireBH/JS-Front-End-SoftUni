function loading(number){

    let percentage = number;
    let loadingBar = `${percentage}% [..........]`;

    let dotsToReplace = number / 10;

    for (let index = 0; index < dotsToReplace; index++) {
        
      loadingBar  = loadingBar.replace('.','%');
    }

    if (percentage != 100) {
        
        console.log(loadingBar);
        console.log('Still loading...');
    }

    else {
        
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
    }
}

loading(30);
loading(50);
loading(100);