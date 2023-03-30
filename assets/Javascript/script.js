let weather = {
  apiKey: "46b2f5e4840b0ff2146a6e57e65a86d2",
  fetchWeather: function (city) {
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + this.apiKey
    )
    .then((response) => response.json())
    .then((data) => this.displayWeather(data))
  },
  displayWeather: function(data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log( name, icon, description, temp, humidity, speed);
    console.log("display weather is working");
    document.querySelector("#city").innerText = name;
    document.querySelector("#icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector("#description").innerText = description;
    document.querySelector("#temp").innerText = "Temp: " + temp + "॰F";
    document.querySelector("#humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector("#speed").innerText = "Wind Speed: " + speed + "mph";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  }
};

document.querySelector("button").addEventListener("click", function(){
  weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event){
  if(event.key == "Enter"){
    console.log("keyup is working");
    weather.search();
  }
});



  