var APIKey = "9744be1fb817e05df45b93dbee033bc4";
// var city;
var requestURL = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";//for user input
var fetchButton = document.getElementById('fetch-button');
var todayForcast = document.getElementById('todayForcast'); //Today's forcast div body
var fiveDayForcast = document.getElementById('5DayForcast'); //5 Day forcast div body
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
            var textItem = document.createElement('p');
            textItem.textContent = data[i].html_url;
            todayForcast.appendChild(textItem);
        }

    })
}

fetchButton.addEventListener('click', getApi);