function getShoppingList(input) {
  let shoppingList = input.shift().split("!");

  let commandSplit = input.shift().split(" ");
  let command = commandSplit[0];
  let product = commandSplit[1];
  let fullCommand = `${command} ${product}`;

  while (fullCommand !== "Go Shopping!") {
    if (command === "Urgent") {
      if (!shoppingList.includes(product)) {
        shoppingList.unshift(product);
      }
    } else if (command === "Unnecessary") {
      if (shoppingList.includes(product)) {
        let productToRemove = shoppingList.indexOf(product);
        shoppingList.splice(productToRemove, 1);
      }
    } else if (command === "Correct") {
      if (shoppingList.includes(product)) {
        let newName = commandSplit[2];
        let productToChange = shoppingList.indexOf(product);
        shoppingList[productToChange] = newName;
      }
    } else if (command === "Rearrange") {
      if (shoppingList.includes(product)) {
        let productToAddAtEnd = shoppingList.find((x) => x === product);
        let productToAddAtEndIndex = shoppingList.indexOf(product);
        shoppingList.splice(productToAddAtEndIndex, 1);
        shoppingList.push(productToAddAtEnd);
      }
    }

    commandSplit = input.shift().split(" ");
    command = commandSplit[0];
    product = commandSplit[1];
    fullCommand = `${command} ${product}`;
  }

  console.log(shoppingList.join(", "));
}

getShoppingList([
  "Tomatoes!Potatoes!Bread",
  "Unnecessary Milk",
  "Urgent Tomatoes",
  "Go Shopping!",
]);

getShoppingList([
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
