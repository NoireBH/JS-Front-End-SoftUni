window.addEventListener("load", solve);

function solve() {
  const labelToIconMap = {
    "Feature": "&#8865;",
    "Low Priority Bug": "&#9737;",
    "High Priority Bug": "&#9888;",
  };

  let domInputElements = {
    title: document.getElementById("title"),
    description: document.getElementById("description"),
    label: document.getElementById("label"),
    points: document.getElementById("points"),
    assignee: document.getElementById("assignee"),
  };

  let otherDomElements = {
    createTaskBtn: document.getElementById("create-task-btn"),
    deleteTaskBtn: document.getElementById("delete-task-btn"),
    tasksSection: document.getElementById("tasks-section"),
    taskId: document.getElementById('task-id'),
    totalSprintPoints: document.getElementById('total-sprint-points')
  };

  otherDomElements.deleteTaskBtn.disabled = true;
  otherDomElements.createTaskBtn.addEventListener("click", createTaskHandler);
  otherDomElements.deleteTaskBtn.addEventListener('click', deleteTaskHandler);

  let numberOfTask = 1;
  let totalPts = 0;
  let valuesOfInput = Object.values(domInputElements);

  function createTaskHandler() {
    let allFieldsAreFilled = valuesOfInput.every((input) => input.value !== "");

    if (!allFieldsAreFilled) {
      return;
    }

    const article = createDomElement(
      "article",
      otherDomElements.tasksSection,
      null,
      `task-${numberOfTask++}`,
      ["task-card"]
    );

    if (domInputElements.label.value === "Feature") {
      currentClass = "feature";
    } else if (domInputElements.label.value === "Low Priority Bug") {
      currentClass = "low-priority";
    } else if (domInputElements.label.value === "High Priority Bug") {
      currentClass = "high-priority";
    }

    const taskCardLabelDiv = createDomElement(
      "div",
      article,
      `${domInputElements.label.value} ${labelToIconMap[label.value]}`,
      null,
      ["task-card-label", `${currentClass}`],
      null,
      true
    );
    taskCardLabelDiv.innerHTML = `${domInputElements.label.value} ${labelToIconMap[label.value]}`;
    const taskCardTitleH3 = createDomElement(
      "h3",
      article,
      `${domInputElements.title.value}`,
      null,
      ["task-card-title"]
    );
    const taskCardDescP = createDomElement(
      "p",
      article,
      `${domInputElements.description.value}`,
      null,
      ["task-card-description"]
    );
    const divPointsContainer = createDomElement(
      "div",
      article,
      `Estimated at ${domInputElements.points.value} pts`,
      null,
      ["task-card-points"]
    );
    const divAssigneeContainer = createDomElement(
      "div",
      article,
      `Assigned to: ${domInputElements.assignee.value}`,
      numberOfTask,
      ["task-card-assignee"]
    );
    const divActionContainer = createDomElement("div", article, null, null, [
      "task-card-actions",
    ]);
    const deleteBtn = createDomElement("button", divActionContainer, "Delete");
    deleteBtn.addEventListener("click", loadTaskForDeletionHandler);

    totalPts +=Number(domInputElements.points.value);
    otherDomElements.totalSprintPoints.textContent = `Total Points ${totalPts}pts`;


    clearInputs();
  }

  function loadTaskForDeletionHandler(e) {
    let taskContainer = this.parentNode.parentNode;
    let label = null;

    if (taskContainer.children[0].classList.contains("feature")) {
      label = "Feature";
    } else if (taskContainer.children[0].classList.contains("low-priority")) {
      label = "Low Priority Bug";
    } else if (taskContainer.children[0].classList.contains("high-priority")) {
      label = "High Priority Bug";
    }

    domInputElements.label.value = label;
    domInputElements.label.disabled = true;
    domInputElements.title.value = taskContainer.children[1].textContent;
    domInputElements.title.disabled = true;
    domInputElements.description.value = taskContainer.children[2].textContent;
    domInputElements.description.disabled = true;
    var numberPattern = /\d+/g;
    let number = taskContainer.children[3].textContent.match(numberPattern);
    domInputElements.points.value = number;
    totalPts -=Number(number);
    domInputElements.points.disabled = true;
    domInputElements.assignee.value = taskContainer.children[4].textContent.split(': ')[1];
    domInputElements.assignee.disabled = true;

    otherDomElements.deleteTaskBtn.disabled = false;
    otherDomElements.createTaskBtn.disabled = true;
    otherDomElements.taskId.value = taskContainer.id;
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
    valuesOfInput.forEach((element) => {
      element.value = "";
    });
  }

  function deleteTaskHandler(){
    const taskId = document.getElementById('task-id').value;
        const taskToRemove = document.getElementById(taskId);
        taskToRemove.remove();
        otherDomElements.deleteTaskBtn.setAttribute('disabled', true);
        otherDomElements.createTaskBtn.removeAttribute('disabled');
        Object.values(domInputElements)
            .forEach((input) => {
                input.removeAttribute('disabled');
            });
        clearInputs();
        otherDomElements.totalSprintPoints.textContent = `Total Points ${totalPts}pts`;
  }
}
