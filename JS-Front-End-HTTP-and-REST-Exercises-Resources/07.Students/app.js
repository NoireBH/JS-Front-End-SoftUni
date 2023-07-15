function attachEvents() {
  let inputs = document.getElementsByTagName("input");

  const submitBtn = document.getElementById("submit");
  submitBtn.addEventListener("click", addStudent);

  const BASE_URL = "http://localhost:3030/jsonstore/collections/students";
  showStudents();
  
  async function addStudent() {
    try {
      const firstName = inputs[0].value;
      const lastName = inputs[1].value;
      const facultyNumber = inputs[2].value;
      const grade = inputs[3].value;

      const httpHeaders = {
        method: "Post",
        body: JSON.stringify({ firstName, lastName, facultyNumber, grade }),
      };

      const res = await fetch(BASE_URL, httpHeaders);
      const data = await res.json();
      showStudents();
    } catch (error) {}
  }

  async function showStudents() {
    try {
      const res = await fetch(BASE_URL);
      const data = await res.json();
      let resultsTBody = document.getElementById("results").children[1];
      console.log(resultsTBody);
      resultsTBody.innerHTML = "";

      for (const key in data) {
        let firstName = data[key].firstName;
        let lastName = data[key].lastName;
        let facultyNumber = data[key].facultyNumber;
        let grade = data[key].grade;

        let tr = document.createElement("tr");
        let tdfirstName = document.createElement("td");
        let tdlastName = document.createElement("td");
        let tdfacultyNumber = document.createElement("td");
        let tdgrade = document.createElement("td");

        tdfirstName.textContent = firstName;
        tdlastName.textContent = lastName;
        tdfacultyNumber.textContent = facultyNumber;
        tdgrade.textContent = grade;

        tr.appendChild(tdfirstName);
        tr.appendChild(tdlastName);
        tr.appendChild(tdfacultyNumber);
        tr.appendChild(tdgrade);
        resultsTBody.appendChild(tr);
      }
    } catch (error) {}
  }
}

attachEvents();
