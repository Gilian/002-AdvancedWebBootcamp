// Goal: Double all entries in the array with callback
var arr = [1, 2, 3, 4, 5, 6];
var strings = ["mega", "geiler", "string"];
var result = "";

function forEach(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

// Beispielaufruf 1
forEach(arr, function(number) {
    console.log(number * 2);
});

// Beispielaufruf 2
forEach(strings, function(str, index, array) {
    if (array.length - 1 !== index) {
        result += str + " ";
    } else {
        result += str + "!!!";
    }
});

console.log(result);
