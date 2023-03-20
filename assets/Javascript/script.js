var APIKey = "9744be1fb817e05df45b93dbee033bc4";
var city;
var requestURL = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";//for user input

//Need to have a saved search history & ability to remove search history
//Today's forcast
//5-day forcast



function getApi() {
    fetch(requestURL)
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