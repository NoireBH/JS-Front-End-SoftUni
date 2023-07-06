function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      
      let restaurantInfo = JSON.parse(document.querySelector('#inputs textarea').value);
      let bestRestaurantOutput = document.querySelector('#bestRestaurant p');
      let workersOutputElement = document.querySelector('#workers p');
      let restaurantsArray = [];
      
      restaurantInfo.forEach(res => {
         let restaurantInfo = res.split(' - ');
         let restaurantName = restaurantInfo.shift();
         let employees = restaurantInfo.pop().split(', ');
         let employeeArray = [];
         
         for (const employee of employees) {
            let [employeeName,salary] = employee.split(' ');
            let salaryNum = Number(salary);
            let employeeObj = {employeeName,salary: salaryNum};
            employeeArray.push(employeeObj);
         }

         
         let resObject = {restaurantName, employees : employeeArray};
         restaurantsArray.push(resObject);

      });

      let bestRestaurant = 0;
      let bestRestaurantaverageSalary = 0;
      let bestRestaurantSalary = 0;

      for (const restaurant of restaurantsArray) {
         
         let currSalaryTotal = 0;
         restaurant.employees.forEach(e => {
            currSalaryTotal +=e.salary;
         });

         let avg = currSalaryTotal / this.employees.length;
         if (avg > bestRestaurantaverageSalary) {
            bestRestaurantaverageSalary = avg;
            bestRestaurant = restaurant.restaurantName;
            bestRestaurantSalary;
         }
      }
      
   }
}