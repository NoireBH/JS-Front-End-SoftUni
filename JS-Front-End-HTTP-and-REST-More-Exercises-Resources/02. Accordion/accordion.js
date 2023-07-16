function solution() {
  const BASE_URL = "http://localhost:3030/jsonstore/advanced/articles/list";
  let sectionContainer = document.getElementById("main");
  getData();

  async function getData() {
    const res = await fetch(BASE_URL);
    const data = await res.json();

    for (const key in data) {
      let divAccordion = document.createElement("div");
      divAccordion.classList.add("accordion");
      let divHead = document.createElement("div");
      divHead.classList.add("head");
      let span = document.createElement("span");
      span.textContent = data[key].title;
      let button = document.createElement("button");
      button.textContent = "More";
      button.classList.add("button");
      button.id = data[key]._id;

      let divExtra = document.createElement("div");
      divExtra.classList.add("extra");
      let p = document.createElement("p");
      
      divExtra.appendChild(p);


      button.addEventListener("click", async function () {
        const res = await fetch(
          `http://localhost:3030/jsonstore/advanced/articles/details/${this.id}`
        );
        const data2 = await res.json();

        p.textContent = '';
      p.textContent = data2.content;
        divAccordion.appendChild(divExtra);
            console.log(divAccordion);
        if (this.textContent === 'More') {
            divExtra.style.display = 'block';
            this.textContent = 'Less';
        }

        else {
            divExtra.style.display = 'none';
            this.textContent = 'More';
        }
      });

      divHead.appendChild(span);
      divHead.appendChild(button);
      
      divAccordion.appendChild(divHead);

      sectionContainer.appendChild(divAccordion);
    }
  }
}
