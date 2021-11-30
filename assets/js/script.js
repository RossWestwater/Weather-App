var apiKey = "816530db7a449d157c7b8d86d26bfcff";
var cityInput = document.querySelector("#city-name");
var formEl = document.querySelector("#search-form");
var currWeatherEl = document.querySelector("#current-weather");
var historyEl = document.querySelector("#search-history");
var cardEl = document.querySelector("#five-day");

var getCity = function (city) {
 
  var cityLocate = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`

  fetch(cityLocate).then(function (response) {
    if (response.ok) {
    return response.json()
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
    (weatherObj[0].humidity).splice(0, 1, data1.current.humidity);
    (weatherObj[0].temp).splice(0, 1, data1.current.temp);
    (weatherObj[0].uv).splice(0, 1, data1.current.uvi);
    (weatherObj[0].wind).splice(0, 1, data1.current.wind_speed);
    for (let i = 1; i < data1.daily.length - 2; i++) {
      const future = data1.daily[i];
    (weatherObj[i].humidity).splice(0, 1, future.humidity);
    (weatherObj[i].temp).splice(0, 1, future.temp.day);
    (weatherObj[i].wind).splice(0, 1, future.wind_speed);
    }
  })
   displayWeather();
} 

  var formSubmitHandler = function(event) {
    // prevent page from refreshing
    event.preventDefault();
  
    // // get value from input element
    var cityName = cityInput.value.trim();
    if (cityName) {
      getCity(cityName);
      // createHistory(cityName);
      cityInput.value = "";
    } 
    else {
      alert("Please enter a City Name");
    }
  };

  var createHistory = function (cityName) {
    historyBtn = document.createElement("button");
    historyBtn.innerText = cityName;
    historyBtn.setAttribute("type", "click");
    historyBtn.setAttribute("class", "btn btn-secondary btn-block mt-3");
    // historyEl.addEventListener("click", function (event) {
    //   event.target;
    //   console.log(event);
    // })
    historyEl.append(historyBtn);

  };

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