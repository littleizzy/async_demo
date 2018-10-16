//One way of dealing christmas tree

console.log("Before");
getUser(1, getRepositories);
console.log("After");


function getRepositories(user) {
	getRepositories(user.githubUsername, getCommits);
}

function getCommits(repos) {
	getCommits(repos[0], displayCommits);
}

function displayCommits(commits) {
	console.log(commits);
}

function getUser(id, callback) {
	setTimeout(() => {
		console.log("Reading a user from database...");
		callback({ id: id, githubUsername: 'izzy' });
	}, 2000);
}

function getRepositories(username, callback) { // this function if originally synchronous as it only has console.log statement
	setTimeout(() => { //adding setTimeout function makes it async
		console.log(`Fetching ${username}'s repositories from github...`);
		callback(['repo1', 'repo2', 'repo3']);
	}, 2000);
}

/* Original Callback Hell

console.log('Before');
getUser(1, (user) => {
  getRepositories(user.gitHubUsername, (repos) => {
    getCommits(repos[0], (commits) => {
      console.log(commits);
    })
  })
});
console.log('After');

*/
