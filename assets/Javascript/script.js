var APIKey = "46b2f5e4840b0ff2146a6e57e65a86d2";
var city;
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
var fetchButton = document.getElementById('fetch-button');
var cityNameEl = document.getElementById('cityName');
var tempEl = document.getElementById('temp');
var windEl = document.getElementById('wind');
var humidityEl = document.getElementById('humidity');
var uvIndexEl = document.getElementById('uvIndex');
// var dateEl = document.getElementById('')  <= Needs today's date displayed and 5 days out displayed as well

var todayResultContentEl = document.querySelector('#today-result-content');
var fiveDayResultContentEl = document.querySelector('#fiveday-result-content');
var searchFormEl = document.querySelector('#search-form');

//Need to add local storage to store any persistent data


var searchFormEl = document.querySelector('#search-form');

function getApi() {
  fetch(queryUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = data[i].html_url;
        repoList.appendChild(listItem);
      }
    });
}

fetchButton.addEventListener('click', getApi);

  