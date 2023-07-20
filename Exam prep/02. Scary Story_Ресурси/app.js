window.addEventListener("load", solve);

function solve() {
  const previewListContainer = document.getElementById("preview-list");
  const publishBtn = document.getElementById("form-btn");
  publishBtn.addEventListener("click", addStoryToPreview);
  let fieldData = {};

  function addStoryToPreview(e) {
    publishBtn.disabled = true;
    const firstNameField = document.getElementById("first-name");
    const lastNAmeField = document.getElementById("last-name");
    const ageField = document.getElementById("age");
    const storyTitleField = document.getElementById("story-title");
    const storyGenreField = document.getElementById("genre");
    const storyField = document.getElementById("story");

    const firstName = document.getElementById("first-name").value;
    const lastNAme = document.getElementById("last-name").value;
    const age = document.getElementById("age").value;
    const storyTitle = document.getElementById("story-title").value;
    const storyGenre = document.getElementById("genre").value;
    const story = document.getElementById("story").value;

    fieldData["firstName"] = firstName;
    fieldData["lastName"] = lastNAme;
    fieldData["age"] = age;
    fieldData["storyTitle"] = storyTitle;
    fieldData["storyGenre"] = storyGenre;
    fieldData["story"] = story;

    const allFieldsHaveValues = Object.values(fieldData).every(
      (input) => input !== ""
    );

    if (!allFieldsHaveValues) {
      return;
    }

    firstNameField.value = "";
    lastNAmeField.value = "";
    ageField.value = "";
    storyTitleField.value = "";
    storyGenreField.value = "";
    storyField.value = "";

    const listContainer = createDomElement(
      "li",
      previewListContainer,
      null,
      null,
      ["story-info"]
    );

    const articleContainer = createDomElement("article", listContainer);
    const h4 = createDomElement(
      "h4",
      articleContainer,
      `Name: ${firstName} ${lastNAme}`
    );
    const pAge = createDomElement("p", articleContainer, `Age: ${age}`);
    const pTitle = createDomElement(
      "p",
      articleContainer,
      `Title: ${storyTitle}`
    );
    const pGenre = createDomElement(
      "p",
      articleContainer,
      `Genre: ${storyGenre}`
    );
    const pStory = createDomElement("p", articleContainer, story);

    const saveBtn = createDomElement(
      "button",
      listContainer,
      "Save Story",
      null,
      ["save-btn"]
    );
    const editBtn = createDomElement(
      "button",
      listContainer,
      "Edit Story",
      null,
      ["edit-btn"]
    );
    const deleteBtn = createDomElement(
      "button",
      listContainer,
      "Delete Story",
      null,
      ["delete-btn"]
    );

    saveBtn.disabled = false;
    editBtn.disabled = false;
    deleteBtn.disabled = false;

    editBtn.addEventListener("click", editStory);
    saveBtn.addEventListener('click', saveStory)
    deleteBtn.addEventListener('click',deleteStory)
  }

  function deleteStory(){
    previewListContainer.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "Preview";
    previewListContainer.appendChild(h3);
    publishBtn.disabled = false;
  }

  function saveStory(){
    const main = document.getElementById('main');
    main.innerHTML = '';
    let h1 = document.createElement('h1');
    h1.textContent = 'Your scary story is saved!';
    main.appendChild(h1);
  }

  function editStory() {
    const firstNameField = document.getElementById("first-name");
    const lastNAmeField = document.getElementById("last-name");
    const ageField = document.getElementById("age");
    const storyTitleField = document.getElementById("story-title");
    const storyGenreField = document.getElementById("genre");
    const storyField = document.getElementById("story");

    firstNameField.value = fieldData["firstName"];
    lastNAmeField.value = fieldData["lastName"];
    ageField.value = fieldData["age"];
    storyTitleField.value = fieldData["storyTitle"];
    storyGenreField.value = fieldData["storyGenre"];
    storyField.value = fieldData["story"];

    previewListContainer.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "Preview";
    previewListContainer.appendChild(h3);
    publishBtn.disabled = false;
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
      htmlElement.userInnerHtml = content;
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
}
