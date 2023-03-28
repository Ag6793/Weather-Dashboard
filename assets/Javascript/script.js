// var apiKey = "46b2f5e4840b0ff2146a6e57e65a86d2";
// var city;
// //var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey;
// var fetchButton = document.getElementById('fetch-button');
// var cityNameEl = document.getElementById('cityName');
// var tempEl = document.getElementById('temp');
// var windEl = document.getElementById('wind');
// var humidityEl = document.getElementById('humidity');
// // var dateEl = document.getElementById('')  <= Needs today's date displayed and 5 days out displayed as well

// var todayResultContentEl = document.querySelector('#today-result-content');
// var fiveDayResultContentEl = document.querySelector('#fiveday-result-content');
// var searchFormEl = document.querySelector('#search-form');

//Need to add local storage to store any persistent data

let weather = {
  apiKey: "46b2f5e4840b0ff2146a6e57e65a86d2",
  fetchWeather: function (city) {
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + this.apiKey
    )
    .then((response) => response.json())
    .then((data) => this.displayWeather(data));
  },
  displayWeather: function(data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log( name, icon, description, temp, humidity, speed);
    document.querySelector("#city").innerText = name;
    document.querySelector("#icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector("#description").innerText = description;
    document.querySelector("#temp").innerText = "Temp: " + temp + "॰F";
    document.querySelector("#humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector("#speed").innerText = "Wind Speed: " + speed + "mph";

  }
}

  