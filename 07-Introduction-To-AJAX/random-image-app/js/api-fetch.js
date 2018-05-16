// Fetch Image AJAX
var btn = document.querySelector("#btn");
var img = document.querySelector("#photo");

btn.addEventListener("click", function() {
    console.log("Go get dog!");
    var xhr =  new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // At this point you have a JSON-String and not an object
            const response = xhr.responseText;
            const responseMessage = JSON.parse(xhr.responseText).message;
            img.src = responseMessage;
            //console.log(response + "\n" + responseMessage);
        }
    }
    xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
    xhr.send();
});
