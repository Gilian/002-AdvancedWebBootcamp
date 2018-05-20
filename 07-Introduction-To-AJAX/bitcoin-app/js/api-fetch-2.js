let url = "https://api.coindesk.com/v1/bpi/currentprice.json";

fetch(url)
    .then(function (response) {
        console.log(response);
        return response.text();
    })
    .then(function (data) {
        console.log(data)
        //console.log(typeof data.bpi.EUR.rate);
    });