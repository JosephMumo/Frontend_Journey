async function myDisplayer() {
    let myPromise = new Promise(function(resolve, reject) {
        setTimeout(function() {resolve("Learning Async and Await")}, 5000);
    });
    console.log(await myPromise)
}

myDisplayer()

// async makes any function return a promise
// the two arguments: resolve & reject are already predefined in javascript. But oftenly we don't need reject.
// the await keyword directs the function to pause the execution and wait for a promise to be resolved before it continues.
// myDisplayer function in the above case has a promise that has a timeout to be resolved after 3seconds.
// the await keyword pauses the execution of myDisplayer function until the promise (myPromise) has been resolved
