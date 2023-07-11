function attachEvents() {
  const btnLoadPosts = document.getElementById("btnLoadPosts");
  btnLoadPosts.addEventListener("click", loadPosts);
    const btnViewPosts = document.getElementById('btnViewPost');
    btnViewPosts.addEventListener('click',viewPosts);


    const postsContainer = document.getElementById('posts');
    let postBodies = {};

  async function loadPosts() {
    const BASE_URL = 'http://localhost:3030/jsonstore/blog/posts';
    let res = await fetch(BASE_URL);
    let data = await res.json();

    postsContainer.innerHTML = '';

    for (const key in data) {
        let optionContainer = document.createElement('option');
        optionContainer.value = key;
        optionContainer.textContent = data[key].title;
        postsContainer.appendChild(optionContainer);
        postBodies[key] = data[key].body;
        
    }

  }

  async function viewPosts(){
    const BASE_URL = 'http://localhost:3030/jsonstore/blog/comments';
    let res = await fetch(BASE_URL);
    let data = await res.json(); 

    let postId = postsContainer.value;
    let dataObject = Object.values(data);

    let postTitleContainer = document.getElementById('post-title');
    let title = postsContainer.options[postsContainer.selectedIndex].text;
    postTitleContainer.textContent = title;

    let bodyContainer = document.getElementById('post-body');
    let body = postBodies[postId];
    bodyContainer.textContent = body;
    
    const ulListContainer = document.getElementById('post-comments');
    ulListContainer.innerHTML = '';

    for (const key in dataObject) {
        if (dataObject[key].postId == postId) {
            let comment = document.createElement('li');
            comment.id = dataObject[key].id;
            comment.textContent = dataObject[key].text;
            ulListContainer.appendChild(comment);
        }
    }
   

  }
}

attachEvents();
