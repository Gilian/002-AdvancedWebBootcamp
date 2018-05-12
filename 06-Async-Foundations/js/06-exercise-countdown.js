function callback() {
    console.log("Ring Ring");
}

// My Solutions
var countdownInMs = 5;
var timeOutID = setInterval(function() {
    if (countdownInMs > 0) {
        console.log(countdownInMs -= 1);
    } else {
        console.log("RING RING");
        clearInterval(timeOutID);
    }
}, 1000);

// Master Solution
function setCountdown(seconds) {
    var intervalID = setInterval(function() {
        seconds--;
        if (seconds > 0) {
            console.log(seconds);
        } else {
            console.log("RING RING RING");
            clearInterval(intervalID);
        }
    }, 1000);
}
