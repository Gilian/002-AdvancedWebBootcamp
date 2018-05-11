function findIndex (arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return i;
        }
    }
    return -1;
}

// Example One
var index = [3, 4, 6, 2, 1];
console.log(findIndex(index, function(num, index, array){
    return num === 6;
}));

// Example Two
var arr = [5, 11, 13, 8, 6, 7];
console.log(findIndex(arr, function(num, index, array){
    return num % 2 === 0;
}));

// Example Three
var langs = ["Java", "C++", "Python", "Ruby"];
console.log(findIndex(langs, function(lang, index, arr){
    return lang === "JavaScript";
}));
