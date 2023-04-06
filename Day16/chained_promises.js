function getStatus1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`200`)
        }, 2000);
    })
}

function getStatus2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`200`)
        }, 3000);
    })
}

function onSuccess(value) {
    console.log(`code : ${value}`)
}

function onFailure(error) {
    console.log(`error : ${error}`)
}

function onComplete() {
    console.log(`The chain is completed`)
}

getStatus1()
    .then(getStatus2)
    .then(onSuccess)
    .catch(onFailure)
    .finally(onComplete)