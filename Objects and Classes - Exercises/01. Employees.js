function createEmployees(array){

    let employees = [];

    for (const person of array) {
        
        let employee = {name : person, personalNumber : person.length}
        employees.push(employee);
    }

    for (const employee of employees) {
        
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`);
    }

}

createEmployees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );