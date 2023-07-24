window.addEventListener("load", solve);

function solve() {
  let totalLikes = 0;

  let domFormInputs = {
    genre: document.getElementById("genre"),
    name: document.getElementById("name"),
    author: document.getElementById("author"),
    date: document.getElementById("date"),
  };

  let otherDomElements = {
    addBtn: document.getElementById("add-btn"),
    hitsContainer: document.getElementsByClassName("all-hits-container")[0],
    totalLikes: document.getElementsByClassName("likes")[0].children[0],
    savedSongsContainer: document.getElementsByClassName('saved-container')[0],
  };

  let songAndLikes = [];

  otherDomElements.addBtn.addEventListener("click", addSongHandler);

  function addSongHandler(event) {
    event.preventDefault();

    let domArray = Object.values(domFormInputs);

    let AllfieldsFilled = domArray.every((field) => field.value !== "");

    if (AllfieldsFilled) {
      const hitsInfoContainer = createDomElement(
        "div",
        otherDomElements.hitsContainer,
        null,
        null,
        ["hits-info"]
      );

      const image = createDomElement(
        "img",
        hitsInfoContainer,
        null,
        null,
        null,
        {
          src: "./static/img/img.png",
        }
      );

      const h2Genre = createDomElement(
        "h2",
        hitsInfoContainer,
        `Genre: ${domFormInputs.genre.value}`
      );
      const h2Name = createDomElement(
        "h2",
        hitsInfoContainer,
        `Name: ${domFormInputs.name.value}`
      );
      const h2Author = createDomElement(
        "h2",
        hitsInfoContainer,
        `Author: ${domFormInputs.author.value}`
      );
      const h3Date = createDomElement(
        "h3",
        hitsInfoContainer,
        `Date: ${domFormInputs.date.value}`
      );
      const saveBtn = createDomElement(
        "button",
        hitsInfoContainer,
        "Save song",
        null,
        ["save-btn"]
      );
      const likeBtn = createDomElement(
        "button",
        hitsInfoContainer,
        "Like song",
        null,
        ["like-btn"]
      );
      const deleteBtn = createDomElement(
        "button",
        hitsInfoContainer,
        "Delete",
        null,
        ["delete-btn"]
      );

      for (const key in domFormInputs) {
        domFormInputs[key].value = "";
      }

      likeBtn.addEventListener("click", likeSongHandler);
      saveBtn.addEventListener("click", saveSongHandler);
      deleteBtn.addEventListener("click", deleteSongHandler);
    }
  }

  function saveSongHandler(event){
    let currentSongContainer = this.parentNode;
    currentSongContainer.children[5].remove();
    currentSongContainer.children[5].remove();
    otherDomElements.savedSongsContainer.appendChild(currentSongContainer);
    
  }

  function likeSongHandler(event) {
    totalLikes++;
    otherDomElements.totalLikes.textContent = `Total Likes: ${totalLikes}`;
    event.target.disabled = true;
  }

  function deleteSongHandler(event){
    let currentSongContainer = this.parentNode;
    currentSongContainer.remove();
    totalLikes--;
    otherDomElements.totalLikes.textContent = `Total Likes: ${totalLikes}`;
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
