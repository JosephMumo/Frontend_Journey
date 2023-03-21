function myDisplayer(some) {
    console.log(some);
};

let myPromise = new Promise(function(myResolve, myReject) {
    let myPasswd = 12345;
    // producing code part(this may take time)

    if(myPasswd === 12345) {
        myResolve("Login Successful");
    } else {
        myReject("Wrong Login Credentials");
    };
});
// consuming the code. Must wait for a fulfilled promise
myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
);
// working with javascript promises
// Note: promise.then() takes two arguments 
//     A callback function if successful and another callback function if some error has occurred