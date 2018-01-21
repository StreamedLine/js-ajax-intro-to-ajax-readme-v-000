function showCommits(event, data){
  const commits = JSON.parse(this.responseText)
  const commitsList = `<ul>${commits.map(commit => '<li><strong>' + commit.author.login + '</strong> - ' + commit.commit.message + '</li>').join('')}</ul>`
  document.getElementById("commits").innerHTML = commitsList
}

function getCommits(el) {
	const req = new XMLHttpRequest();
	req.addEventListener("load", showCommits);
	req.open("GET", "https://api.github.com/repos/streamedline/" + el.dataset.repo + "/commits");
	req.send();
}

function showRepositories(event, data) {
  var repos = JSON.parse(this.responseText)
  console.log(repos)
  const repoList = `<ul>${repos.map(r => '<li>' + r.name + ' - <a href="#" data-repo="' + r.name + '" onclick="getCommits(this)">Get Commits</a></li>').join('')}</ul>`
  document.getElementById("repositories").innerHTML = repoList
}

function getRepositories() {
	const req = new XMLHttpRequest();
	req.addEventListener("load", showRepositories);
	req.open("GET", "https://api.github.com/users/streamedline/repos");
	req.send();
}

