window.addEventListener("load", solve);

function solve() {
  let inputFieldsDom = {
    title: document.getElementById("task-title"),
    category: document.getElementById("task-category"),
    content: document.getElementById("task-content"),
  };

  let otherDomEl = {
    publishBtn: document.getElementById("publish-btn"),
    reviewList: document.getElementById("review-list"),
  };

  let infoStorage = {};

  otherDomEl.publishBtn.addEventListener("click", publishHandler);

  function publishHandler() {
    let inputArray = Object.values(inputFieldsDom);

    if (!fieldsAreFilled(inputArray)) {
      return;
    }

    const liPost = createDomElement("li", otherDomEl.reviewList, null, null, [
      "rpost",
    ]);
    const article = createDomElement("article", liPost);
    const h4 = createDomElement("h4", article, inputFieldsDom.title.value);
    const pCategory = createDomElement(
      "p",
      article,
      `Category: ${inputFieldsDom.category.value}`
    );
    const pContent = createDomElement(
      "p",
      article,
      `Content: ${inputFieldsDom.content.value}`
    );
    let editBtn = createDomElement("button", liPost, "Edit", null, [
      "action-btn",
      "edit",
    ]);
    let postBtn = createDomElement("button", liPost, "Post", null, [
      "action-btn",
      "post",
    ]);

    infoStorage[`${inputFieldsDom.title.value}`] = {
      category: inputFieldsDom.category.value,
      content: inputFieldsDom.content.value,
    };

    editBtn.addEventListener('click',editHandler);
    postBtn.addEventListener('click',postHandler);
    clearInputs(inputFieldsDom);

  }

  function editHandler(e){
    let parent = this.parentNode;
    let article = parent.children[0];
    let title = article.children[0].textContent;
    let category = article.children[1].textContent;
    let content = article.children[2].textContent;
    
    inputFieldsDom.title.value = title;
    inputFieldsDom.category.value = infoStorage[title].category;
    inputFieldsDom.content.value = infoStorage[title].content;

    parent.remove();
  }

  function postHandler(e){
    let itemToDelete = this.parentNode;
    let button1Delete = itemToDelete.children[1];
    let button2Delete = itemToDelete.children[2];
    button1Delete.remove();
    button2Delete.remove();

    let publishedList = document.getElementById('published-list');
    publishedList.appendChild(itemToDelete);
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

    return check;
  }
}
