var btn = document.querySelector('#btn-refresh');
var price = document.querySelector('#price');

btn.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const json_valueResponse = JSON.parse(xhr.responseText).bpi.EUR.rate;
            const int_valueResponse = json_valueResponse.split(".", 1); // Limitiert auf den ersten Anteil
            price.innerText = int_valueResponse + "€";
        }
    };
    xhr.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
    xhr.send();
});
