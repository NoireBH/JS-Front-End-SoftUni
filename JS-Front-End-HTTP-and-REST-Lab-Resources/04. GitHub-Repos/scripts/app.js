function loadRepos() {

   let result = document.getElementById('res');

   fetch('https://api.github.com/users/testnakov/repos')
   .then((data) => data.text())
   .then((data) => {
      result.textContent = data;
   })
}