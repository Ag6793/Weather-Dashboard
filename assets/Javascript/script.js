var apiKey = "46b2f5e4840b0ff2146a6e57e65a86d2";
var city;
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey;
var fetchButton = document.getElementById('fetch-button');
var cityNameEl = document.getElementById('cityName');
var tempEl = document.getElementById('temp');
var windEl = document.getElementById('wind');
var humidityEl = document.getElementById('humidity');
// var dateEl = document.getElementById('')  <= Needs today's date displayed and 5 days out displayed as well

var todayResultContentEl = document.querySelector('#today-result-content');
var fiveDayResultContentEl = document.querySelector('#fiveday-result-content');
var searchFormEl = document.querySelector('#search-form');

//Need to add local storage to store any persistent data

var searchFormEl = document.querySelector('#search-form');

let weather = {
  fetchWeather: function () {
    fetch(queryURL)
    .then((response) => response.json())
    .then((data) => console.log(data));
  }
}

  