console.log("Script loaded!");

// Declare variable
const url = "https://randomuser.me/api/";
const btn = document.querySelector("#btn");
const avatar = document.querySelector("#avatar");
const fullname = document.querySelector("#fullname");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const city = document.querySelector("#city");

btn.addEventListener("click", function() {
    console.log("Click!");
    // Fetch
    fetch(url)
        .then(handleErrors)
        .then(parseJSON)
        .then(updateProfile)
        .catch(printError);
});

// Functions
function handleErrors(request) {
    console.log("Handling Errors");
    if (!request.ok) {
        throw Error(request.status);
    }
    return request;
}

function parseJSON(request) {
    console.log("Parsing JSON");
    return request.json()
        .then(function(data) {
            return data.results[0];
        }
    );
}

function updateProfile(data) {
    avatar.src = data.picture.medium;
    fullname.innerText = capitalizeFirstLetter(data.name.first) + " " + capitalizeFirstLetter(data.name.last);
    username.innerText = data.login.username;
    email.innerText = data.email;
    city.innerText = data.location.city;
}

function printError(error) {
    console.log("There was an error!: " + " " + error);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
