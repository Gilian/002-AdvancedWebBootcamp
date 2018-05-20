var btn = document.querySelector("button");
btn.addEventListener("click", function(){

    var url = 'https://api.github.com/users/coltasd';
    fetch(url)
    .then(handleRequestError)
    .then(function(request) {
        console.log("Everything is fine");
    })
    .catch(function(error) {
        console.log("Oops!" + " " + error);
    });
});

function handleRequestError(request) {
    if (!request.ok) {
        throw Error(request.status);
    }
    return request.json();
}
