let url = "https://api.coindesk.com/v1/bpi/currentprice.json";
var price = document.querySelector('#price');

fetch(url)
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        price.innerText = data.bpi.EUR.rate + "€";
    });
