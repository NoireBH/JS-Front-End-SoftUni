function filterEmployees(data,criteria){

    let employeesInfo = JSON.parse(data);
    let criteriaName =  criteria.split('-')[0];
    let criteriaValue = criteria.split('-')[1];
    if (criteriaValue === 'all') {
        cycle(employeesInfo);              
    }

    else{
        let filteredEmployees = employeesInfo.filter(e => e[criteriaName] === criteriaValue);   
        cycle(filteredEmployees);
    }

     

    function cycle(filteredEmployees) {
        for (let index = 0; index < filteredEmployees.length; index++) {
            let employee = filteredEmployees[index];
            console.log(`${index}. ${employee['first_name']} ${employee['last_name']} - ${employee['email']}`);
        }
    }
}

filterEmployees(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
 'last_name-Johnson'

)