window.addEventListener("load", solve);

function solve() {
  let domInputs = {
    student: document.getElementById("student"),
    university: document.getElementById("university"),
    score: document.getElementById("score"),
  };

  let otherDomElements = {
    nextBtn: document.getElementById("next-btn"),
    previewList: document.getElementById("preview-list"),
    candidateList: document.getElementById('candidates-list'),
  };

  otherDomElements.nextBtn.addEventListener("click", nextHandler);

  function nextHandler() {
    if (!fieldsAreFilled(domInputs)) {
      return;
    }

    otherDomElements.nextBtn.disabled = true;

    let li = createDomElement("li", otherDomElements.previewList, null, null, [
      "application",
    ]);
    let article = createDomElement("article", li);
    let studentName = createDomElement(
      "h4",
      article,
      `${domInputs.student.value}`
    );
    let university = createDomElement(
      "p",
      article,
      `University: ${domInputs.university.value}`
    );
    let score = createDomElement(
      "p",
      article,
      `Score: ${domInputs.score.value}`
    );

    let editBtn = createDomElement("button", li, "edit", null, [
      "action-btn",
      "edit",
    ]);
    let applyBtn = createDomElement("button", li, "apply", null, [
      "action-btn",
      "apply",
    ]);

    let editName = domInputs.student.value;
    let editUniversity = domInputs.university.value;
    let editScore = domInputs.score.value;

    clearInputs(domInputs);

    editBtn.addEventListener('click',editHandler);
    applyBtn.addEventListener('click', applyHandler);

    function editHandler(){
      li.remove();
      otherDomElements.nextBtn.disabled = false;
      domInputs.student.value = editName;
      domInputs.university.value = editUniversity;
      domInputs.score.value = editScore;
    }

    function applyHandler(){
      li.children[1].remove();
      li.children[1].remove();
      otherDomElements.candidateList.appendChild(li);
      otherDomElements.nextBtn.disabled = false;
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
    let check = Object.values(inputArray).every((x) => x.value !== "");
    return check;
  }
}
