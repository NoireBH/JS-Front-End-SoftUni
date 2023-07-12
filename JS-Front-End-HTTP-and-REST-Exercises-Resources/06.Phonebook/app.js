function attachEvents() {
  const loadBtn = document.getElementById("btnLoad");
  loadBtn.addEventListener("click", loadPhoneBook);
  const createBtn = document.getElementById("btnCreate");
  createBtn.addEventListener("click", createPhoneEntry);

  let personInput = document.getElementById("person");
  let phoneInput = document.getElementById("phone");

  const phoneBookContainer = document.getElementById("phonebook");

  const BASE_URL = "http://localhost:3030/jsonstore/phonebook";

  async function loadPhoneBook() {
    try {
      const res = await fetch(BASE_URL);
      const data = await res.json();

      phoneBookContainer.textContent = "";

      for (const key in data) {
        let li = document.createElement("li");
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.id = data[key]._id;
        li.textContent = `${data[key].person}: ${data[key].phone}`;
        deleteButton.addEventListener("click", deletePhoneEntry);
        li.appendChild(deleteButton);
        phoneBookContainer.appendChild(li);
      }
    } catch (error) {}
  }

  async function deletePhoneEntry(e) {
    try {
      const id = e.currentTarget.id;
      const httpHeaders = {
        method: "Delete",
      };

      await fetch(`${BASE_URL}/${id}`, httpHeaders);

      loadPhoneBook();

    } catch (error) {
      
    }
  }

  async function createPhoneEntry() {
    let person = personInput.value;
    let phone = phoneInput.value;

    try {
      const httpHeaders = {
        method: "Post",
        body: JSON.stringify({ person, phone }),
      };
      const res = await fetch(BASE_URL, httpHeaders);
      const data = await res.json();

      loadPhoneBook();
      personInput.value = "";
      phoneInput.value = "";
    } catch (error) {}
  }
}

attachEvents();
