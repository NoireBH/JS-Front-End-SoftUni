function attachEvents() {
  const BASE_URL = "http://localhost:3030/jsonstore/grocery/";

  const inputDomSelectors = {
    product: document.getElementById("product"),
    count: document.getElementById("count"),
    price: document.getElementById("price"),
  };
  const otherDomSelectors = {
    addBtn: document.getElementById("add-product"),
    updateBtn: document.getElementById("update-product"),
    loadBtn: document.getElementById("load-product"),
  };

  const tBody = document.getElementById("tbody");

  otherDomSelectors.loadBtn.addEventListener("click", loadProductsHandler);
  otherDomSelectors.addBtn.addEventListener("click", addProductHandler);
  otherDomSelectors.updateBtn.addEventListener("click", confirmUpdateHandler);

  let id = null;

  async function confirmUpdateHandler() {
    const httpHandlers = {
      method: "PATCH",
      body: JSON.stringify({
        product: inputDomSelectors.product.value,
        count: inputDomSelectors.count.value,
        price: inputDomSelectors.price.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    const res = await fetch(`${BASE_URL}${id}`, httpHandlers);
    otherDomSelectors.updateBtn.disabled = true;
    otherDomSelectors.addBtn.disabled = false;
    loadProductsHandler();
  }

  async function loadProductsHandler(event) {
    if (event) {
      event.preventDefault();
    }

    tBody.innerHTML = "";

    const res = await fetch(BASE_URL);
    const data = await res.json();
    const dataArray = Object.values(data);

    for (const product of dataArray) {
      const trContainer = document.createElement("tr");
      trContainer.id = product._id;

      const tdName = createDomElement(
        "td",
        trContainer,
        `${product.product}`,
        null,
        ["name"]
      );
      const tdCount = createDomElement(
        "td",
        trContainer,
        `${product.count}`,
        null,
        ["count"]
      );
      const tdPrice = createDomElement(
        "td",
        trContainer,
        `${product.price}`,
        null,
        ["price"]
      );
      const tdButtons = createDomElement("td", trContainer, null, null, [
        "btn",
      ]);
      const updateBtn = createDomElement("button", tdButtons, `Update`, null, [
        "update",
      ]);
      const deleteBtn = createDomElement("button", tdButtons, `Delete`, null, [
        "delete",
      ]);

      updateBtn.addEventListener("click", updateProductHandler);
      deleteBtn.addEventListener("click", deleteProductHandler);

      tBody.appendChild(trContainer);
    }
  }

  async function updateProductHandler(e) {
    const trContainer = this.parentNode.parentNode;
    let productName = trContainer.children[0].textContent;
    let count = trContainer.children[1].textContent;
    let price = trContainer.children[2].textContent;

    inputDomSelectors.product.value = productName;
    inputDomSelectors.count.value = count;
    inputDomSelectors.price.value = price;

    otherDomSelectors.updateBtn.disabled = false;
    otherDomSelectors.addBtn.disabled = true;

    id = trContainer.id;
  }

  async function deleteProductHandler(e) {
    const httpHandlers = {
      method: "Delete",
    };

    await fetch(
      `${BASE_URL}${e.target.parentNode.parentNode.id}`,
      httpHandlers
    );

    loadProductsHandler();
  }

  async function addProductHandler(e) {
    e.preventDefault();
    const httpHandlers = {
      method: "POST",
      body: JSON.stringify({
        product: inputDomSelectors.product.value,
        count: inputDomSelectors.count.value,
        price: inputDomSelectors.price.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    const res = await fetch(BASE_URL, httpHandlers);

    loadProductsHandler();
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

attachEvents();
