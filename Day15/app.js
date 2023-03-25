console.log('Start');

function loginUser(email, pasword, callback) {
    setTimeout(() => {
        console.log(email);
        callback ({user : email})
    }, 5000);
}

const user = loginUser('joe@gmail.com', 123, user => {
    console.log(user)
});
console.log('End');