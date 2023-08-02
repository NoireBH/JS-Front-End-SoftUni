window.addEventListener("load", solve);

function solve() {
  let domInputs = {
    model: document.getElementById("car-model"),
    year: document.getElementById("car-year"),
    name: document.getElementById("part-name"),
    number: document.getElementById("part-number"),
    condition: document.getElementById("condition"),
  };

  let domInputsValues = Object.values(domInputs);

  let otherDomElements = {
    nextbtn: document.getElementById("next-btn"),
    infoList: document.getElementsByClassName("info-list")[0],
    completeImg: document.getElementById("complete-img"),
    completeText: document.getElementById("complete-text"),
    confirmList: document.getElementsByClassName("confirm-list")[0],
  };

  otherDomElements.nextbtn.addEventListener("click", nextHandler);

  function nextHandler(e) {
    e.preventDefault();

    let year = Number(domInputs.year.value);

    if (!fieldsAreFilled(domInputsValues)) {
      return;
    }

    if (year < 1980 || year > 2023) {
      return;
    }

    otherDomElements.completeImg.style.visibility = "hidden";
    otherDomElements.completeText.textContent = "";

    let li = createDomElement("li", otherDomElements.infoList, null, null, [
      "part-content",
    ]);
    let article = createDomElement("article", li);
    let modelP = createDomElement(
      "p",
      article,
      `Car Model: ${domInputs.model.value}`
    );
    let yearP = createDomElement("p", article, `Car Year: ${year}`);
    let nameP = createDomElement(
      "p",
      article,
      `Part Name: ${domInputs.name.value}`
    );
    let numberP = createDomElement(
      "p",
      article,
      `Part Number: ${domInputs.number.value}`
    );
    let conditionP = createDomElement(
      "p",
      article,
      `Condition: ${domInputs.condition.value}`
    );

    let editBtn = createDomElement("button", li, "Edit", null, ["edit-btn"]);
    let continueBtn = createDomElement("button", li, "Continue", null, [
      "continue-btn",
    ]);

    let editModel = domInputs.model.value;
    let editYear = domInputs.year.value;
    let editName = domInputs.name.value;
    let editNumber = domInputs.number.value;
    let editCondition = domInputs.condition.value;

    clearInputs(domInputs);
    otherDomElements.nextbtn.disabled = true;
    editBtn.addEventListener("click", editHandler);
    continueBtn.addEventListener("click", continueHandler);

    function editHandler() {
      domInputs.model.value = editModel;
      domInputs.year.value = editYear;
      domInputs.name.value = editName;
      domInputs.number.value = editNumber;
      domInputs.condition.value = editCondition;

      li.remove();

      otherDomElements.nextbtn.disabled = false;
    }
  }

  function continueHandler() {
    otherDomElements.infoList.children[0].children[1].remove();
    otherDomElements.infoList.children[0].children[1].remove();
    otherDomElements.infoList.children[0].classList.remove();
    otherDomElements.infoList.children[0].classList.add("part-content");

    otherDomElements.confirmList.appendChild(
      otherDomElements.infoList.children[0]
    );
    let confirmBtn = createDomElement(
      "button",
      otherDomElements.confirmList.children[0],
      "Confirm",
      null,
      ["confirm-btn"]
    );
    let cancelBtn = createDomElement(
      "button",
      otherDomElements.confirmList.children[0],
      "Cancel",
      null,
      ["cancel-btn"]
    );

    confirmBtn.addEventListener("click", confirmHandler);
    cancelBtn.addEventListener("click", cancelHandler);

    function confirmHandler() {
      otherDomElements.confirmList.children[0].remove();
      otherDomElements.nextbtn.disabled = false;
      otherDomElements.completeImg.style.visibility = "visible";
      otherDomElements.completeText.textContent = "Part is Ordered!";
    }

    function cancelHandler(){
        otherDomElements.confirmList.children[0].remove();
        otherDomElements.nextbtn.disabled = false;
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
