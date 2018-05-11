function callback() {
    console.log("Timeout ended!");
}

var delay = 1000;
setTimeout(callback, delay);

setTimeout(function() {
    console.log(`Finished Waiting in ${delay}!`);
}, 2000);

var num = 0;
setInterval(function() {
    num += 1;
    console.log(num);
}, 200);
