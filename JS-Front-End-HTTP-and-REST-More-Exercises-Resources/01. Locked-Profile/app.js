function lockedProfile() {
  const BASE_URL = "http://localhost:3030/jsonstore/advanced/profiles";
  getProfiles();

  async function getProfiles() {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    let userCount = 1;
    const mainContainer = document.getElementById("main");
    mainContainer.innerHTML = "";
    for (const key in data) {
      // Create Elements

      let divContainer = document.createElement("div");
      divContainer.classList.add("profile");
      let imageContainer = document.createElement("img");
      imageContainer.classList.add("userIcon");
      imageContainer.src = "./iconProfile2.png";
      let labelLocked = document.createElement("label");
      labelLocked.textContent = "Lock";
      let inputLocked = document.createElement("input");
      inputLocked.type = "radio";
      inputLocked.value = "lock";
      inputLocked.name = `user${userCount}Locked`;
      let labelUnlocked = document.createElement("label");
      labelUnlocked.textContent = "Unlock";
      let inputUnlocked = document.createElement("input");
      inputUnlocked.type = "radio";
      inputUnlocked.value = "unlock";
      inputUnlocked.name = `user${userCount}Locked`;
      let br = document.createElement("br");
      let hr = document.createElement("hr");
      let labelUsername = document.createElement("label");
      labelUsername.textContent = "Username";
      let inputUserName = document.createElement("input");
      inputUserName.type = "text";
      inputUserName.value = data[key].username;
      inputUserName.name = `user${userCount}Username`;
      inputUserName.disabled = true;
      inputUserName.readOnly = true;
      let divHiddenContainer = document.createElement("div");
      divHiddenContainer.classList.add(`user${userCount}HiddenFields`);
      divHiddenContainer.style.display = "none";
      let labelEmail = document.createElement("label");
      labelEmail.textContent = "Email:";
      let inputEmail = document.createElement("input");
      inputEmail.type = "email";
      inputEmail.value = data[key].email;
      inputEmail.name = `user${userCount}Email`;
      inputEmail.disabled = true;
      inputEmail.readOnly = true;
      let labelAge = document.createElement("label");
      labelAge.textContent = "Age:";
      let inputAge = document.createElement("input");
      inputAge.type = "email";
      inputAge.name = `user${userCount}Age`;
      inputAge.value = data[key].age;
      inputAge.disabled = true;
      inputAge.readOnly = true;
      let button = document.createElement("button");
      button.textContent = "Show more";

      button.addEventListener("click", function () {
        if (button.textContent === "Show more" && inputUnlocked.checked) {
          divHiddenContainer.style.display = "block";
          button.textContent = "Hide it";
        } else if(button.textContent === 'Hide it' && inputUnlocked.checked) {
          divHiddenContainer.style.display = "none";
          button.textContent = "Show more";
        }
      });

      let hr2 = document.createElement("hr");
      divHiddenContainer.appendChild(hr2);
      divHiddenContainer.appendChild(labelEmail);
      divHiddenContainer.appendChild(inputEmail);
      divHiddenContainer.appendChild(labelAge);
      divHiddenContainer.appendChild(inputAge);
      //raiuse userCount

      userCount++;

      // AppendElements

      divContainer.appendChild(imageContainer);
      divContainer.appendChild(labelLocked);
      divContainer.appendChild(inputLocked);
      divContainer.appendChild(labelUnlocked);
      divContainer.appendChild(inputUnlocked);
      divContainer.appendChild(br);
      divContainer.appendChild(hr);
      divContainer.appendChild(labelUsername);
      divContainer.appendChild(inputUserName);
      divContainer.appendChild(divHiddenContainer);
      divContainer.appendChild(button);
      mainContainer.appendChild(divContainer);
    }
  }
}
