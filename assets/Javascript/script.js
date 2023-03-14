var APIKey = "9744be1fb817e05df45b93dbee033bc4";
var city;
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";//for user input

// fetch(queryURL)
function getApi() {
    fetch(queryURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for (var i = 0; i < data.length; i++) {
            console.log (data);
        }

    })
}

fetchButton.addEventListener('click', getApi);