window.addEventListener("load", solve);

function solve() {
  let domInputs = {
    name: document.getElementById("gem-name"),
    color: document.getElementById("color"),
    carats: document.getElementById("carats"),
    price: document.getElementById("price"),
    type: document.getElementById("type"),
  };

  let otherDomElements = {
    addGemBtn: document.getElementById("add-btn"),
    previewList: document.getElementById("preview-list"),
    collectionList: document.getElementById("collection"),
  };

  otherDomElements.addGemBtn.addEventListener("click", addGemHandler);

  function addGemHandler() {
    if (!fieldsAreFilled(domInputs)) {
      return;
    }

    let li = createDomElement("li", otherDomElements.previewList, null, null, [
      "gem-info",
    ]);
    let article = createDomElement("article", li);
    let name = createDomElement("h4", article, `${domInputs.name.value}`);
    let color = createDomElement(
      "p",
      article,
      `Color: ${domInputs.color.value}`
    );
    let carats = createDomElement(
      "p",
      article,
      `Carats: ${domInputs.carats.value}`
    );
    let price = createDomElement(
      "p",
      article,
      `Price: ${domInputs.price.value}`
    );
    let type = createDomElement("p", article, `Type: ${domInputs.type.value}`);

    let saveBtn = createDomElement("button", li, "Save to Collection", null, [
      "save-btn",
    ]);
    let editBtn = createDomElement("button", li, "Edit Information", null, [
      "edit-btn",
    ]);
    let cancelBtn = createDomElement("button", li, "Cancel", null, [
      "cancel-btn",
    ]);

    let editName = domInputs.name.value;
    let editColor = domInputs.color.value;
    let editCarats = domInputs.carats.value;
    let editPrice = domInputs.price.value;
    let editType = domInputs.type.value;

    clearInputs(domInputs);
    otherDomElements.addGemBtn.disabled = true;

    editBtn.addEventListener("click", editHandler);
    saveBtn.addEventListener("click", saveHandler);
    cancelBtn.addEventListener("click", cancelHandler);

    function editHandler() {
      domInputs.name.value = editName;
      domInputs.color.value = editColor;
      domInputs.carats.value = editCarats;
      domInputs.price.value = editPrice;
      domInputs.type.value = editType;

      otherDomElements.previewList.children[0].remove();
      otherDomElements.addGemBtn.disabled = false;
    }

    function saveHandler() {
      let collectionLi = createDomElement(
        "li",
        otherDomElements.collectionList
      );
      p = createDomElement(
        "p",
        collectionLi,
        `${name.textContent} - Color: ${color.textContent}/ Carats: ${carats.textContent}/ Price: ${price.textContent}$/ Type: ${type.textContent}`,
        null,
        ["collection-item"]
      );
      li.remove();
      otherDomElements.addGemBtn.disabled = false;
    }

    function cancelHandler() {
      otherDomElements.addGemBtn.disabled = false;
      li.remove();
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
    //The alternative way
    return check;
  }
}
