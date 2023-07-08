function loadRepos() {
	const BASE_URL = "https://api.github.com/users/";
	let userName = document.getElementById('username').value;
	 document.getElementById('repos').innerHTML = '';

	fetch(BASE_URL + userName + "/repos")
	.then((data) =>{
		
		if (data.ok == false) {
			throw new Error(`Error : ${data.status} ${data.statusText}`);
		}
		return data.json();
	})
	.then((repos) => {
		for (const repo of repos) {
			const list = document.getElementById('repos');
			let li = document.createElement('li');
			let a = document.createElement('a');
			a.href = repo.html_url;
			a.textContent = repo.full_name;
			li.appendChild(a);
			list.appendChild(li);
		}
		
	})
	.catch((err) => {
		const list = document.getElementById('repos');
		list.textContent = err.message;
	})
	
}