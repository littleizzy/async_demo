console.log("Before"); 
const user = getUser(1);
console.log(user);
console.log("After"); 


function getUser(id) {
	setTimeout(() => {
	console.log("Reading a user from database..."); 
	return {id: id, name: "izzy"};
	}, 2000); 
	return 1; // but if we add this line, it will be Before -> 1 -> After
}

/*
This gives us Before -> Undefined -> After
That's because by the time console.log(user) is executed, the program
is still in the 2000ms timeout, thus user is undefined.


How do we get it to print the actual user object?
Three ways to deal with Async functions: callback, promises, async/wait

*/