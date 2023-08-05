window.addEventListener("load", solve);

function solve() {
  let BASE_URL = "http://localhost:3030/jsonstore/tasks/";

  let domInputs = {
    name: document.getElementById("name"),
    days: document.getElementById("num-days"),
    date: document.getElementById("from-date"),
  };

  let otherDomElements = {
    loadVacationsBtn: document.getElementById("load-vacations"),
    vacationList: document.getElementById("list"),
    editVacationBtn: document.getElementById("edit-vacation"),
    addVacationBtn: document.getElementById("add-vacation"),
  };

  otherDomElements.loadVacationsBtn.addEventListener(
    "click",
    loadVacationsHandler
  );
  otherDomElements.addVacationBtn.addEventListener("click", addVacationHandler);
  otherDomElements.editVacationBtn.addEventListener(
    "click",
    editVacationHandler
  );

  let currentId = null;

  async function addVacationHandler(e) {
    e.preventDefault();

    if (!fieldsAreFilled(domInputs)) {
      return;
    }

    const httpHandlers = {
      method: "POST",
      body: JSON.stringify({
        name: domInputs.name.value,
        days: domInputs.days.value,
        date: domInputs.date.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    const res = await fetch(BASE_URL, httpHandlers);

    clearInputs(domInputs);
    loadVacationsHandler(e);
  }

  async function loadVacationsHandler(e) {
    e.preventDefault();
    const res = await fetch(BASE_URL);
    const data = await res.json();

    let dataValues = Object.values(data);

    otherDomElements.vacationList.innerHTML = "";
    otherDomElements.editVacationBtn.disabled = true;

    for (const vacation of dataValues) {
      let containerDiv = createDomElement(
        "div",
        otherDomElements.vacationList,
        null,
        `${vacation._id}`,
        ["container"]
      );
      let personName = createDomElement("h2", containerDiv, `${vacation.name}`);
      let date = createDomElement("h3", containerDiv, `${vacation.date}`);
      let days = createDomElement("h3", containerDiv, `${vacation.days}`);
      let changeBtn = createDomElement("button", containerDiv, "Change", null, [
        "change-btn",
      ]);
      let doneBtn = createDomElement("button", containerDiv, "Done", null, [
        "done-btn",
      ]);

      changeBtn.addEventListener("click", changeVacationHandler);
      doneBtn.addEventListener("click", doneHandler);
    }
  }

  function changeVacationHandler(e) {
    let parent = this.parentNode;

    let name = parent.children[0].textContent;
    let date = parent.children[1].textContent;
    let days = parent.children[2].textContent;

    domInputs.name.value = name;
    domInputs.days.value = days;
    domInputs.date.value = date;

    currentId = parent.id;
    parent.remove();
    otherDomElements.addVacationBtn.disabled = true;
    otherDomElements.editVacationBtn.disabled = false;
  }

  async function editVacationHandler(e) {
    e.preventDefault();
    const httpHandlers = {
      method: "PUT",
      body: JSON.stringify({
        name: domInputs.name.value,
        days: domInputs.days.value,
        date: domInputs.date.value,
        _id: currentId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    const res = await fetch(`${BASE_URL}${currentId}`, httpHandlers);

    otherDomElements.editVacationBtn.disabled = true;
    otherDomElements.addVacationBtn.disabled = false;
    clearInputs(domInputs);
    loadVacationsHandler(e);
  }

  async function doneHandler(e) {
    e.preventDefault();
    let id = this.parentNode.id;
    const httpHandlers = {
      method: "DELETE",
    };
    const res = await fetch(`${BASE_URL}${id}`, httpHandlers);
    loadVacationsHandler(e);
  }

  function createDomElement(
    type,
    parentNode,
    content,
    id,
    classes,
    attributes,
    userInnerHtml
  ) {
    const htmlElement = document.createElement(type);

    if (content && userInnerHtml) {
      htmlElement.innerHTML = content;
    } else {
      if (content && type !== "input") {
        htmlElement.textContent = content;
      }

      if (content && type === "input") {
        htmlElement.value = content;
      }
    }

    if (classes && classes.length > 0) {
      htmlElement.classList.add(...classes);
    }

    if (id) {
      htmlElement.id = id;
    }

    if (attributes) {
      for (const key in attributes) {
        htmlElement[key] = attributes[key];
      }
    }

    if (parentNode) {
      parentNode.appendChild(htmlElement);
    }

    return htmlElement;
  }

  function clearInputs(domInputs) {
    Object.values(domInputs).forEach((element) => {
      element.value = "";
    });
  }

  function fieldsAreFilled(inputArray) {
    let check = Object.values(inputArray).every((x) => x.value !== "");
    return check;
  }
}
