// A promises is a object-task which will be executed later

// Successful promise
var p1 = new Promise(function(resolve, reject) {
    resolve([1, 2, 3, 4, 5]);
});

p1.then(function(arr){
    console.log("Promise p1 resolved with data: ", p1);
});

// Unsuccessful promises
var p2 = new Promise(function(resolve, reject) {
    reject("ERROR!");
});

p2.then(function(data){
    console.log("Promise p2 resolved with data: ", p2);
}).catch(function(data){
    console.log("Promise p2 rejected with data: ", p2);
});
