console.log("Playground is now open");

// But callback into message
function sendMessage(message, callback){
    return callback(message);
}

sendMessage("Message for console", console.log);
sendMessage("Message for alert", alert);

var answer = sendMessage("are you sure?", confirm);

console.log(answer);
