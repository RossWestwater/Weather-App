var apiKey = "13324b5efcbc84fef49f96bfe1451187";

var getWeather = function (city) {
  var currWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
  fetch(currWeather).then(function (response) {
    return response.json()
  }).then(function (data) {
    console.log(data);
  })
}

getWeather("salt lake city");