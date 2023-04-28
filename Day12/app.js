setInterval(myFunction, 1000);

function myFunction() {
    let d = new Date;
    document.getElementById('test').innerHTML =
    d.getHours() + ':' +
    d.getMinutes() + ':' +
    d.getSeconds();
}
// myFunction is a callback function that is parsed as an argument to setInterval.
// setInterval calls myFunction after every 1000 miliseconds (1 sec).
// The above is a good example of asynchronous function where two functions are running parallel to each other
