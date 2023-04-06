function getData() {
    return new Promise(function(resolve, reject) {
        let data = 'weatherData';
        if (data === 'weatherData') {
            resolve(`We have the data`);
        } else {
            reject(`Some Error`);
        }
    })
}

const myPromise = getData();
myPromise.then(function(value) {
    console.log(`Promise returned the data successfully`);
}), (function(error) {
    console.log('Some errror')
})