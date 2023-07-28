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

// turn the associative array with Object.values first then use it as a parameter
function fieldsAreFilled(inputArray){
  let check = inputArray.every(x => x.value !== '');
  // let check = Object.values(inputArray).every(x => x.value !== '');
  //The alternative way
  return check;
}