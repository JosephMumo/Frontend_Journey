// promise code production
function getId() {
    return new Promise(function(resolve, reject) {
        // resolve(`2425637448`)
        reject(`We could not locate the requested data`)
    })
}
function onSuccess(data) {
    console.log(`ID : ${data}`)
}
function onFailure(error) {
    console.log(`Error : ${error}`)
}
// Promise code consumption
getId().then(onSuccess, onFailure)