// EXAMPLE 1 - Chaining Promises
ar promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        randomInt = Math.floor(Math.random() * 10);
        resolve(randomInt);
    }, 500);
});

promise.then(function(data) {
    console.log("Random int passed to resolve:", data);
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(Math.floor(Math.random() * 10));
        }, 3000);
    });
}).then(function(data) {
    console.log("Second random int passed to resolve:", data);
});

// EXAMPLE: 2 - Fast chaining
var prom = new Promise(function(resolve, reject) {
    resolve(5);
});

prom.then(function(data) {
    return data * 2;
}).then(function(data) {
    return data + 10;
}).then(function(data) {
    console.log(data);
});
