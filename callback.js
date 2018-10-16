console.log("Before"); 

getUser(1, (user) => {
	console.log('User', user);
	getRepositories(user.githubUsername, (repo) => {
		console.log('Repositories', repo);
	});
});

console.log("After"); 


function getUser(id, callback) {
	setTimeout(() => {
		console.log("Reading a user from database..."); 
		callback({ id: id, githubUsername: 'izzy' });
	}, 2000); 
}

function getRepositories(username, callback) { // this function if originally synchronous as it only has console.log statement
	setTimeout(() => { //adding setTimeout function makes it async
		console.log(`Fetching ${username}'s repositories from github...`);
		callback( [ 'repo1', 'repo2', 'repo3']);
	}, 2000);
}