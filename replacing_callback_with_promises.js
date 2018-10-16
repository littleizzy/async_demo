console.log('Before');
// Callback implementation
// getUser(1, (user) => {
//   getRepositories(user.gitHubUsername, (repos) => {
//     getCommits(repos[0], (commits) => {
//       console.log(commits);
//     })
//   })
// });

// Promise implementation
// getUser(1)
//   .then(user => getRepositories(user.gitHubUsername)) //promise returned by getUser
//   .then(repos => getCommits(repos[0])) //promise returned by getRepositories
//   .then(commits => console.log('Commits', commits))//promise returned by getCommits
//   .catch(err => console.log('Error', err.messge));  //single .catch to catch any of the err from the above 3 promises


// Async and Await implementation. Just syntatic sugar for promises
async function displayCommits() { //need to decorate with async
  try { //async function need to use try-catch block 
    const user = await getUser(1); //You can await a function that returns a promise
    const repos = await getRepositories(user.gitHubUsername);
    const commits = await getCommits(repos[0]);
    console.log('Commits', commits);
  }
  catch (err) {
    console.log('Error', err.message);
  }
}

displayCommits();
console.log('After');




/* We should modify callback functions to return a promise
  Step 1: add the new Promise statement
  Step 2: kick off some async work inside it
  Step 3: remove the callback functino from the parameter and code
  Step 4: add resolve to send the result of this operation to the consumer of this promise
*/
function getUser(id) {
  return new Promise((resolve, reject) => {
    //Kick off some async work
    setTimeout(() => {
      console.log('Reading a user from a database...');
      resolve({ id: id, gitHubUsername: 'Izzy' });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling GitHub API...');
      resolve(['repo1', 'repo2', 'repo3']);
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling GitHub API...');
      resolve(['commit']);
    }, 2000);
  });
}
