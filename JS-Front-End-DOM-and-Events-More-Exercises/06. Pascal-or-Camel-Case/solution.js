function solve() {
  let input = document.getElementById('text').value;
  let currentCase = document.getElementById('naming-convention').value;
  let resultSpan = document.getElementById('result');
  let error = false;
  let changedInput = input.toLowerCase().split(' ');

  if (currentCase === 'Pascal Case') {

    for (let i = 0; i < changedInput.length; i++) {
      
      changedInput[i] =  changedInput[i].charAt(0).toUpperCase() + changedInput[i].slice(1);
    }
  }

  else if(currentCase === 'Camel Case'){

    for (let i = 1; i < changedInput.length; i++) {
      
      changedInput[i] =  changedInput[i].charAt(0).toUpperCase() + changedInput[i].slice(1);
      
    }
  }

  else {
    error = true;
  }

  if (!error) {
    resultSpan.innerHTML = changedInput.join('');
  }

  else {
    resultSpan.innerHTML = 'Error!';
  }
}