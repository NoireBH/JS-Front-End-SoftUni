// TODO:
function attachEvents() {
  let selectors = {
    loadTasksBtn: document.getElementById("load-board-btn"),
    addTaskBtn: document.getElementById("create-task-btn"),
  };

  let progressContainers = {
    todoTasksContainer: document.getElementById("todo-section").children[1],
    inProgressTasksContainer: document.getElementById("in-progress-section")
      .children[1],
    codeReviewTasksContainer: document.getElementById("code-review-section")
      .children[1],
    doneTasksContainer: document.getElementById("done-section").children[1],
  };

  let domInputs = {
    title: document.getElementById("title"),
    description: document.getElementById("description"),
  };

  let tasks = {};

  const BASE_URL = "http://localhost:3030/jsonstore/tasks/";

  selectors.loadTasksBtn.addEventListener("click", loadBoardHandler);
  selectors.addTaskBtn.addEventListener("click", addTaskHandler);

  async function loadBoardHandler() {
    Object.values(progressContainers).forEach((element) => {
      element.innerHTML = "";
    });

    const res = await fetch(BASE_URL);
    const data = await res.json();
    let dataValues = Object.values(data);

    for (const task of dataValues) {
      let parentEl = null;
      let moveTo = null;

      if (task.status === "ToDo") {
        parentEl = progressContainers.todoTasksContainer;
        tasks["todo"] = task;
        moveTo = "Move to In Progress";
      } else if (task.status === "In Progress") {
        parentEl = progressContainers.inProgressTasksContainer;
        tasks["inProgress"] = task;
        moveTo = "Move to Code Review";
      } else if (task.status === "Code Review") {
        parentEl = progressContainers.codeReviewTasksContainer;
        tasks["codeReview"] = task;
        moveTo = "Move to Done";
      } else if (task.status === "Done") {
        parentEl = progressContainers.doneTasksContainer;
        tasks["done"] = task;
        moveTo = "Close";
      }

      let li = createDomElement("li", parentEl, null, `${task._id}`, ["task"]);
      let h3 = createDomElement("h3", li, `${task.title}`);
      let p = createDomElement("p", li, `${task.description}`);
      let button = createDomElement("button", li, `${moveTo}`);

      if (task.status !== "Done") {
        button.addEventListener("click", moveTaskHandler);
      } else {
        button.addEventListener("click", deleteTaskHandler);
      }
    }
  }

  async function moveTaskHandler(e) {
    let taskTomove = this.parentNode;
    let parent = taskTomove;
    let newStatus = null;

    if (this.textContent === "Move to In Progress") {
      newStatus = "In Progress";
    } else if (this.textContent === "Move to Code Review") {
      newStatus = "Code Review";
    } else if (this.textContent === "Move to Done") {
      newStatus = "Done";
    }

    let httpRequest = {
      method: "PATCH",
      body: JSON.stringify({
        status: `${newStatus}`,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    await fetch(`${BASE_URL}${parent.id}`, httpRequest);

    loadBoardHandler();
  }

  async function deleteTaskHandler(e) {
    let httpRequest = {
      method: "DELETE",
    };

    await fetch(`${BASE_URL}${this.parentNode.id}`, httpRequest);
    loadBoardHandler();
  }

  async function addTaskHandler() {
    let httpRequest = {
      method: "POST",
      body: JSON.stringify({
        title: domInputs.title.value,
        description: domInputs.description.value,
        status: "ToDo",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    const res = await fetch(BASE_URL, httpRequest);

    clearInputs();
    loadBoardHandler();
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

  function clearInputs() {
    Object.values(domInputs).forEach((element) => {
      element.value = "";
    });
  }
}

attachEvents();
