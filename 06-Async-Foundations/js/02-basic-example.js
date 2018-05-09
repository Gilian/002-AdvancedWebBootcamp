function greet(name, formatter) {
    return "Hello " + formatter(name);
}

function uppercaseName(name) {
    return name.toUpperCase();
}

function lowercaseName(name) {
    return name.toLowerCase();
}

console.log(greet("Tim", uppercaseName));
console.log(greet("Tim", lowercaseName));

// Call anonymous function
greet("Tim", function(name) {
    console.log(name.toUpperCase());
});
