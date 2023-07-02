function create(words) {

  for (const word of words) {

    let div = document.createElement("div");
    let p = document.createElement("p");

    p.textContent = word;
    p.style.display = 'none'

    let content = document.getElementById('content');
    div.addEventListener('click', () => {
      p.style.display = 'block';
    });

    div.appendChild(p);
    content.appendChild(div);
  }

}
