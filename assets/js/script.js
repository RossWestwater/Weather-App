var apiKey = "816530db7a449d157c7b8d86d26bfcff";
var cityInput = document.querySelector("#city-name");
var formEl = document.querySelector("#search-form");
var currWeatherEl = document.querySelector("#current-weather");
var historyEl = document.querySelector("#search-history");
var cardEl = document.querySelector("#five-day");
var savedHistory = [];

// take the city input and start running it through functions
var formSubmitHandler = function (event) {
  // prevent page from refreshing
  event.preventDefault();

  // // get value from input element
  var cityName = cityInput.value.trim();
  if (cityName) {
    // start identifying the city as a valid city and, if so, fetch its weather API data.
    getCity(cityName);
    // create a search button for the searched city
    createHistory(cityName);
    // save the searched input to local storage
    saveHistory(cityName);
    // reset the search input field after each "submit". if nothing was put in the input field, return an error.
    cityInput.value = "";
  } else {
    alert("Please enter a City Name");
  }
};

// search current weather for city (you can search this API by city name). get the coords for the next fetch and adjust the prior button/save calls if the input value is bad.
var getCity = function (city) {
  var cityLocate = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

  fetch(cityLocate)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        savedHistory.shift();
        historyEl.removeChild(historyEl.childNodes[0]);
        localStorage.setItem("savedsearch", JSON.stringify(savedHistory));
        alert("Please enter a valid city name");
        return;
      }
    })
    .then(function (data) {
      weatherObj[0].lat.splice(0, 1, data.coord.lat);
      weatherObj[0].lon.splice(0, 1, data.coord.lon);
      weatherObj[0].city.splice(0, 1, data.name);
      getWeather(data.coord.lat, data.coord.lon);
    });
};

// take the city coords and pass it through the fetch for the "onestop" weather report and stash all the relevant details in an array of objects
var getWeather = function (latitude, longitude) {
  var currWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&units=imperial&appid=${apiKey}`;
  fetch(currWeather)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
    })
    .then(function (data1) {
      // current weather
      console.log(data1);
      weatherObj[0].humidity.splice(0, 1, data1.current.humidity);
      weatherObj[0].temp.splice(0, 1, data1.current.temp);
      weatherObj[0].uv.splice(0, 1, data1.daily[0].uvi);
      weatherObj[0].wind.splice(0, 1, data1.current.wind_speed);
      weatherObj[0].img.splice(0, 1, data1.current.weather[0].icon);
      for (let i = 1; i < data1.daily.length - 2; i++) {
        const future = data1.daily[i];
        weatherObj[i].humidity.splice(0, 1, future.humidity);
        weatherObj[i].temp.splice(0, 1, future.temp.day);
        weatherObj[i].wind.splice(0, 1, future.wind_speed);
        weatherObj[i].img.splice(0, 1, future.weather[0].icon);
      }
      console.log(weatherObj);
      displayWeather();
    });
};

// create and add search history buttons
var createHistory = function (cityHistory) {
  historyBtn = document.createElement("button");
  historyBtn.innerText = cityHistory;
  historyBtn.setAttribute("type", "click");
  historyBtn.setAttribute("class", "btn btn-secondary btn-block mt-3");

  historyEl.addEventListener("click", historySearch);

  historyEl.prepend(historyBtn);
};
// if you click on a search history button, do the search for that city
var historySearch = function (event) {
  event.trigger;
  getCity(event.target.textContent);
};

// save searched cities to local storage
var saveHistory = function (cityHistory) {
  // limit only 10 buttons upon refresh, so the buttons don't get out of hand
  if (savedHistory.length < 10) {
    savedHistory.unshift(cityHistory);
    localStorage.setItem("savedsearch", JSON.stringify(savedHistory));
  } else {
    savedHistory.unshift(cityHistory);
    savedHistory.pop();
    localStorage.setItem("savedsearch", JSON.stringify(savedHistory));
  }
};
// take the search history saved to localstorage and create buttons (max 10 buttons created at refresh)
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
};

loadHistory();
formEl.addEventListener("submit", formSubmitHandler);