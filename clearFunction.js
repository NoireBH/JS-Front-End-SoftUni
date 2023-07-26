function clearInputs() {
  Object.values(domInputs).forEach((element) => {
    element.value = "";
  });
}
