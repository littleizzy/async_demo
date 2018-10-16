console.log("Before"); //Blocking or synchronous function

setTimeout(() => {
	console.log("Reading a user from database..."); 
}, 2000); //Non-blocking or asynchronous function

console.log("After"); //Blocking or synchronous function


// Output: Before
//		   After
//		   Reading a user from database... (2s after)


//Asynchronous call does not mean multi-threading, we still have only
//one thread in this case, it's just the order