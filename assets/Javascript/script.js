// var APIKey = "9744be1fb817e05df45b93dbee033bc4";

// var requestURL = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";//for user input
// var fetchButton = document.getElementById('fetch-button');
// var todayForcast = document.getElementById('todayForcast'); //Today's forcast div body
// var fiveDayForcast = document.getElementById('5DayForcast'); //5 Day forcast div body


var searchFormEl = document.querySelector('#search-form');

function handleSearchFormSubmit(event) {
    event.preventDefault();
  
    var searchInputVal = document.querySelector('#search-input').value;
    // var formatInputVal = document.querySelector('#format-input').value;
  
    if (!searchInputVal) {
      console.error('You need a search input value!');
      return;
    }
  
    var queryString = './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;
  
    location.assign(queryString);
  }
  
  searchFormEl.addEventListener('submit', handleSearchFormSubmit);
  