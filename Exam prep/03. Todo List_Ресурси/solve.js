// TODO
function attachEvents() {
  const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';  
  const loadAllBtn = document.getElementById('load-button');
  const addBtn = document.getElementById('add-button');
  loadAllBtn.addEventListener('click',loadTasks);
  addBtn.addEventListener('click', addTask);


  function loadTasks(event){
    event.preventDefault();
    const res =  fetch(BASE_URL)
    .then((res) => res.json())
    .then(console.log(res));
    
    console.log(data)
    
  }

  async function addTask(){

  }
}

attachEvents();
