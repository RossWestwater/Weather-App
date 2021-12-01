var apiKey = "816530db7a449d157c7b8d86d26bfcff";
var cityInput = document.querySelector("#city-name");
var formEl = document.querySelector("#search-form");
var currWeatherEl = document.querySelector("#current-weather");
var historyEl = document.querySelector("#search-history");
var cardEl = document.querySelector("#five-day");
var savedHistory = [];

var getCity = function (city) {
 
  var cityLocate = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`

  fetch(cityLocate).then(function (response) {
    if (response.ok) {
    return response.json()
    }
    else {
      savedHistory.shift();
      historyEl.removeChild(historyEl.childNodes[0]);
      localStorage.setItem("savedsearch", JSON.stringify(savedHistory));
      alert("Please enter a valid city name");
      return;
    }
  }).then(function (data) {
    (weatherObj[0].lat).splice(0, 1, data.coord.lat);
    (weatherObj[0].lon).splice(0, 1, data.coord.lon);
    (weatherObj[0].city).splice(0, 1, data.name);
    getWeather(data.coord.lat, data.coord.lon);
  })
}

var getWeather = function (latitude, longitude) {
  var currWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&units=imperial&appid=${apiKey}`
  fetch(currWeather).then(function (response) {
    if (response.ok) {
    return response.json()
    }
  }).then(function (data1) {
    // current weather
    console.log(data1);
    (weatherObj[0].humidity).splice(0, 1, data1.current.humidity);
    (weatherObj[0].temp).splice(0, 1, data1.current.temp);
    (weatherObj[0].uv).splice(0, 1, data1.daily[0].uvi);
    (weatherObj[0].wind).splice(0, 1, data1.current.wind_speed);
    (weatherObj[0].img).splice(0, 1, data1.current.weather[0].icon);
    for (let i = 1; i < data1.daily.length - 2; i++) {
      const future = data1.daily[i];
    (weatherObj[i].humidity).splice(0, 1, future.humidity);
    (weatherObj[i].temp).splice(0, 1, future.temp.day);
    (weatherObj[i].wind).splice(0, 1, future.wind_speed);
    (weatherObj[i].img).splice(0, 1, future.weather[0].icon);
    }
    console.log(weatherObj);
    displayWeather();
  })
} 

  var formSubmitHandler = function(event) {
    // prevent page from refreshing
    event.preventDefault();
  
  // // get value from input element
    var cityName = cityInput.value.trim();
    if (cityName) {
      getCity(cityName);
      createHistory(cityName);
      saveHistory(cityName);
      cityInput.value = "";
    } 
    else {
      alert("Please enter a City Name");
    }
    };

  var createHistory = function (cityHistory) {
    historyBtn = document.createElement("button");
    historyBtn.innerText = cityHistory;
    historyBtn.setAttribute("type", "click");
    historyBtn.setAttribute("class", "btn btn-secondary btn-block mt-3");

    historyEl.addEventListener("click", historySearch);

    historyEl.prepend(historyBtn);
  };

  var historySearch = function (event) {
    event.trigger;
    getCity(event.target.textContent);
  }

  var saveHistory = function (cityHistory) {
    if (savedHistory.length < 10) {
      savedHistory.unshift(cityHistory)
      localStorage.setItem("savedsearch", JSON.stringify(savedHistory));
    }
    else if (cityHistory === "a") {
      console.log(savedHistory);
      savedHistory.shift()
      localStorage.setItem("savedsearch", JSON.stringify(savedHistory));
    }
    else {
      savedHistory.unshift(cityHistory);
      savedHistory.pop();
      localStorage.setItem("savedsearch", JSON.stringify(savedHistory));
    }
  }
  
  var loadHistory = function () {
      var loadCities = localStorage.getItem("savedsearch");
      if (!loadCities) {
        return false;
      }
      savedHistory = JSON.parse(loadCities);
      for (let i = 0; i < savedHistory.length; i++) {
        const cities = savedHistory[i];
        createHistory(cities);
      }
    }

loadHistory();
formEl.addEventListener("submit", formSubmitHandler);

// var d = (data1.daily[1].dt * 1000);
// console.log(d);
// var date = new Date(+d);
// console.log(d);
// console.log(date.toDateString());
// console.log(date.getFullYear());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getHours());
// console.log(date.toLocaleTimeString());