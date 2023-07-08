async function loadCommits() {
  let userName = document.getElementById("username").value;
  let repository = document.getElementById("repo").value;
  let commits = document.getElementById("commits");
  const link = `https://api.github.com/repos/${userName}/${repository}/commits`;

  try {
    const response = await fetch(link);
    const data = await response.json();
    for (const commit of data) {
      let li = document.createElement("li");
      let info = `${commit.author.login}: ${commit.commit.message}`;
      li.textContent = info;
      commits.appendChild(li);
    }
  } 
  catch (error) {
    let li = document.createElement('li');
    li.textContent = `Error : ${error.status} (Not Found)`;
    commits.appendChild(li);
  }
}

