var APIKey = "46b2f5e4840b0ff2146a6e57e65a86d2";
var city;
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
var fetchButton = document.getElementById('fetch-button');

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

  