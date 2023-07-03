function editElement(htmlRef, match, replacer) {

    let regex = new RegExp(match, 'g');
   let result = htmlRef.textContent.replace(regex,replacer);
   htmlRef.textContent = result;

    // doesnt work in judge
    //   let replaced = htmlRef.textContent.replaceAll(match, replacer);
    //   htmlRef.textContent = replaced;
}
