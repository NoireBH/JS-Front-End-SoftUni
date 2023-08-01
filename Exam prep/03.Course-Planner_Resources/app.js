function solve() {
  const BASE_URL = "http://localhost:3030/jsonstore/tasks/";

  let domInputs = {
    title: document.getElementById("course-name"),
    type: document.getElementById("course-type"),
    description: document.getElementById("description"),
    teacher: document.getElementById("teacher-name"),
  };

  let otherDomElements = {
    loadCoursesBtn: document.getElementById("load-course"),
    addCourseBtn: document.getElementById("add-course"),
    editCourseBtn: document.getElementById("edit-course"),
    listDiv: document.getElementById("list"),
  };

  otherDomElements.loadCoursesBtn.addEventListener("click", loadCoursesHandler);
  otherDomElements.addCourseBtn.addEventListener("click", addCourseHandler);
  otherDomElements.editCourseBtn.addEventListener("click", saveEditHandler);

  let currentId;

  async function saveEditHandler(e) {
    e.preventDefault();
    const httpHandlers = {
      method: "PATCH",
      body: JSON.stringify({
        title: domInputs.title.value,
        type: domInputs.type.value,
        description: domInputs.description.value,
        teacher: domInputs.teacher.value,
      }),
    };

    const res = await fetch(`${BASE_URL}${currentId}`, httpHandlers);
    otherDomElements.editCourseBtn.disabled = true;
    otherDomElements.addCourseBtn.disabled = false;
    clearInputs(domInputs);
    loadCoursesHandler();
  }

  function editCourseHandler(e) {
    let parent = this.parentNode;
    currentId = parent.id;
    otherDomElements.editCourseBtn.disabled = false;
    otherDomElements.addCourseBtn.disabled = true;
    domInputs.title.value = parent.children[0].textContent;
    domInputs.teacher.value = parent.children[1].textContent;
    domInputs.type.value = parent.children[2].textContent;
    domInputs.description.value = parent.children[3].textContent;
  }

  async function finishCourseHandler(e) {
    const httpHandlers = {
      method: "DELETE",
    };

     await fetch(`${BASE_URL}${this.parentNode.id}`,httpHandlers);
    loadCoursesHandler();
  }

  async function addCourseHandler(e) {
    e.preventDefault();
    const httpHandlers = {
      method: "POST",
      body: JSON.stringify({
        title: domInputs.title.value,
        type: domInputs.type.value,
        description: domInputs.description.value,
        teacher: domInputs.teacher.value,
      }),
    };

    const res = await fetch(BASE_URL, httpHandlers);
    clearInputs(domInputs);
    loadCoursesHandler();
  }

  async function loadCoursesHandler() {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    const dataValues = Object.values(data);

    otherDomElements.listDiv.innerHTML = "";

    for (const course of dataValues) {
      const divContainer = createDomElement(
        "div",
        otherDomElements.listDiv,
        null,
        course._id,
        ["container"]
      );
      const title = createDomElement("h2", divContainer, `${course.title}`);
      const teacher = createDomElement("h3", divContainer, `${course.teacher}`);
      const type = createDomElement("h3", divContainer, `${course.type}`);
      const description = createDomElement(
        "h4",
        divContainer,
        `${course.description}`
      );
      const editBtn = createDomElement(
        "button",
        divContainer,
        "Edit Course",
        null,
        ["edit-btn"]
      );
      const finishBtn = createDomElement(
        "button",
        divContainer,
        "Finish Course",
        null,
        ["finish-btn"]
      );
      editBtn.addEventListener("click", editCourseHandler);
      finishBtn.addEventListener("click", finishCourseHandler);
    }
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
    let check = inputArray.every((x) => x.value !== "");
    // let check = Object.values(inputArray).every(x => x.value !== '');
    //The alternative way
    return check;
  }
}

solve();
