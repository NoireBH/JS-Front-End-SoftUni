function attachEvents() {
  const submitButton = document.getElementById("submit");
  const refreshButton = document.getElementById("refresh");
  const authorName = document.getElementsByName("author")[0];
  const message = document.getElementsByName("content")[0];
  submitButton.addEventListener("click", submitComment);
  refreshButton.addEventListener("click", refreshComments);

  const BASE_URL = "http://localhost:3030/jsonstore/messenger";

  async function submitComment() {
    fetch(BASE_URL, {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        author: authorName.value,
        content: message.value,
      }),
    });

    
  }

  async function refreshComments() {
    let res = await fetch(BASE_URL);
    let data = await res.json();
    let textAreaContent = document.getElementById('messages');
    textAreaContent.textContent = '';

    let commentArray = [];

    for (const key in data) {
       
      commentArray.push(`${data[key].author}: ${data[key].content}`);
        
    }

    textAreaContent.textContent = commentArray.join('\n');
    
  }
}

attachEvents();
