const p = new Promise((resolve, reject) => { //this p promises to give us either the result or err
	//Some async work ...
	setTimeout(() => {
		//resolve(1); //pending -> resolved/fulfilled
		reject(new Error('message')); //pending -> rejected
	}, 2000);
});

//somewhere else we need to consume this promise

p
	.then(result => console.log("Result", result)) //call then to get result
	.catch(err => console.log('Error', err.message)); //call catch to get err

	//Error has a message property.
