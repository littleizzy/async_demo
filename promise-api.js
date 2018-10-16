// Explore the api of promise object of JavaScript

// creating a promise thats already resolved/rejected for testing purpose
const p1 = Promise.resolve({id: 1});
p1.then(result => console.log(result));

const p2 = Promise.reject(new Error('reason for rejection...')); //creating new Error object so it includes call stack
p2.catch(error => console.log(error));

//Promises in parallel
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Some async work 3...');
    resolve('p3 is resolved');
    //reject(new Error('p3 is rejected for some reason...'));
  }, 2000);
});

const p4 = new Promise((resolve) => {
  setTimeout(() => {
    console.log('Some async work 4...');
    resolve('p4 is resolved');
  }, 2000);
});

Promise.all([p3, p4])
  .then(result => console.log('All result:', result)) //When all resolved -> All result: [ 'p3 is resolved', 'p4 is resolved' ]
  .catch(err => console.log('Error Message', err.message));

Promise.race([p3, p4])
  .then(result => console.log('Faster result:', result)) // Faster result: p3 is resolved, rather than an array of results
  .catch(err => console.log('Error Message', err.message));
