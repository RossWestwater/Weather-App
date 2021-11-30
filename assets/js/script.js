var apiKey = "13324b5efcbc84fef49f96bfe1451187";
var cityInput = document.querySelector("#city-name");
var formEl = document.querySelector("#search-form");
var currWeatherEl = document.querySelector("#current-weather");

var weatherObj = [
  {
  city:[],
  lat: [],
  lon: [],
  date: moment().format("M/D/YYYY"),
  temp:[""],
  wind:[""],
  humidity:[],
  uv:[]
},
  {
  city:[],
  lat: [],
  lon: [],
  date: moment().add(1, "day").format("M/D/YYYY"),
  temp:[],
  wind:[],
  humidity:[],
  uv:[]
},
  {
  city:[],
  lat: [],
  lon: [],
  date: moment().add(2, "day").format("M/D/YYYY"),
  temp:[],
  wind:[],
  humidity:[],
  uv:[]
},
  {
  city:[],
  lat: [],
  lon: [],
  date: moment().add(3, "day").format("M/D/YYYY"),
  temp:[],
  wind:[],
  humidity:[],
  uv:[]
},
  {
  city:[],
  lat: [],
  lon: [],
  date: moment().add(4, "day").format("M/D/YYYY"),
  temp:[],
  wind:[],
  humidity:[],
  uv:[]
},
  {
  city:[],
  lat: [],
  lon: [],
  date: moment().add(5, "day").format("M/D/YYYY"),
  temp:[],
  wind:[],
  humidity:[],
  uv:[]
}
];

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
    console.log(weatherObj[0]);
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
    console.log(weatherObj[0]);
    console.log(data1);
    for (let i = 1; i < data1.daily.length - 2; i++) {
      const future = data1.daily[i];
    (weatherObj[i].humidity).splice(0, 1, future.humidity);
    (weatherObj[i].temp).splice(0, 1, future.temp.day);
    (weatherObj[i].wind).splice(0, 1, future.wind_speed);
    }
    console.log(weatherObj);
  })
   displayWeather();
}

var displayWeather = function () {
  // display curr weather
  var currentCity = document.getElementById("currCity");
  currentCity.innerText = weatherObj[0].city + ` (${weatherObj[0].date})`;
  var currentTemp = document.getElementById("currTemp");
  currentTemp.innerText = `Temp: ${weatherObj[0].temp} °F`;
  var currentWind = document.getElementById("currWind");
  currentWind.innerText = `Wind: ${weatherObj[0].wind} MPH`;
  var currentHumid = document.getElementById("currHumid");
  currentHumid.innerText = `Humidity: ${weatherObj[0].humidity} %`;
  var currentUv = document.getElementById("currUv");
  currentUv.innerText = `UV Index: ${weatherObj[0].uv}`;
  // display 5-day forecast
  // day1
  var day1date = document.querySelector(".day1date");
  day1date.innerText = weatherObj[1].date;
  var day1temp = document.querySelector(".day1temp");
  day1temp.innerText = `Temp: ${weatherObj[1].temp} °F`;
  var day1wind = document.querySelector(".day1wind");
  day1wind.innerText = `Wind: ${weatherObj[1].wind} MPH`;
  var day1humid = document.querySelector(".day1humid");
  day1humid.innerText = `Humidity: ${weatherObj[1].humidity} %`;
  console.log(day1date);
  // day2
  var day2date = document.querySelector(".day2date");
  day2date.innerText = weatherObj[2].date;
  var day2temp = document.querySelector(".day2temp");
  day2temp.innerText = `Temp: ${weatherObj[2].temp} °F`;
  var day2wind = document.querySelector(".day2wind");
  day2wind.innerText = `Wind: ${weatherObj[2].wind} MPH`;
  var day2humid = document.querySelector(".day2humid");
  day2humid.innerText = `Humidity: ${weatherObj[2].humidity} %`;
  console.log(day2date);
  // day3
  var day3date = document.querySelector(".day3date");
  day3date.innerText = weatherObj[3].date;
  var day3temp = document.querySelector(".day3temp");
  day3temp.innerText = `Temp: ${weatherObj[3].temp} °F`;
  var day3wind = document.querySelector(".day3wind");
  day3wind.innerText = `Wind: ${weatherObj[3].wind} MPH`;
  var day3humid = document.querySelector(".day3humid");
  day3humid.innerText = `Humidity: ${weatherObj[3].humidity} %`;
  console.log(day3date);
  // day4
  var day4date = document.querySelector(".day4date");
  day4date.innerText = weatherObj[4].date;
  var day4temp = document.querySelector(".day4temp");
  day4temp.innerText = `Temp: ${weatherObj[4].temp} °F`;
  var day4wind = document.querySelector(".day4wind");
  day4wind.innerText = `Wind: ${weatherObj[4].wind} MPH`;
  var day4humid = document.querySelector(".day4humid");
  day4humid.innerText = `Humidity: ${weatherObj[4].humidity} %`;
  console.log(day4date);
  // day5
  var day5date = document.querySelector(".day5date");
  day5date.innerText = weatherObj[5].date;
  var day5temp = document.querySelector(".day5temp");
  day5temp.innerText = `Temp: ${weatherObj[5].temp} °F`;
  var day5wind = document.querySelector(".day5wind");
  day5wind.innerText = `Wind: ${weatherObj[5].wind} MPH`;
  var day5humid = document.querySelector(".day5humid");
  day5humid.innerText = `Humidity: ${weatherObj[5].humidity} %`;
  console.log(day5date);
}
  
  // var displayRepos = function(repos, searchTerm) {
  //   // check if api returned any repos
  //   if (repos.length === 0) {
  //     repoContainerEl.textContent = "No repositories found.";
  //     return;
  //   }
  
  //   repoSearchTerm.textContent = searchTerm;
  
  //   // loop over repos
  //   for (var i = 0; i < repos.length; i++) {
  //     // format repo name
  //     var repoName = repos[i].owner.login + "/" + repos[i].name;
  
  //     // create a link for each repo
  //     var repoEl = document.createElement("a");
  //     repoEl.classList = "list-item flex-row justify-space-between align-center";
  //     repoEl.setAttribute("href", "./single-repo.html?repo=" + repoName);
  
  //     // create a span element to hold repository name
  //     var titleEl = document.createElement("span");
  //     titleEl.textContent = repoName;
  
  //     // append to container
  //     repoEl.appendChild(titleEl);
  
  //     // create a status element
  //     var statusEl = document.createElement("span");
  //     statusEl.classList = "flex-row align-center";
  
  //     // check if current repo has issues or not
  //     if (repos[i].open_issues_count > 0) {
  //       statusEl.innerHTML =
  //         "<i class='fas fa-times status-icon icon-danger'></i>" + repos[i].open_issues_count + " issue(s)";
  //     } else {
  //       statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
  //     }
  
  //     // append to container
  //     repoEl.appendChild(statusEl);
  
  //     // append container to the dom
  //     repoContainerEl.appendChild(repoEl);
  //   }
  // };

  var formSubmitHandler = function(event) {
    // prevent page from refreshing
    event.preventDefault();
  
    // // get value from input element
    var cityName = cityInput.value.trim();
    if (cityName) {
      getCity(cityName);
      cityInput.value = "";
    } 
    else {
      alert("Please enter a City Name");
    }
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