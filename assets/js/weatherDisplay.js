var displayWeather = function () {
  // display curr weather
  console.log(weatherObj);
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
  // if (currentUV.innerText <= 2) {
  //   currentUv.classList.add("class", "bg-success");
  // }
  // else if (currentUV.innerText <= 5) {
  //   currentUv.classList.add("class", "bg-warning");
  // }
  // else {
  //   currentUv.classList.add("class", "bg-danger");
  // }
  cardEl.innerHTML = "";
  // display 5-day forecast
  for (let i = 1; i < weatherObj.length ; i++) {
    const currObj = weatherObj[i];
    var cardContainerEl = document.createElement("div");
    cardContainerEl.setAttribute("class", "card");
    var cardBodyEl = document.createElement("div");
    cardBodyEl.setAttribute("class", "card-body text-light pl-1 pt-1");
    cardBodyEl.setAttribute("style", "background-color: rgb(12, 12, 44)")
    var cardDate = document.createElement("h5");
    cardDate.setAttribute("class", "card-title");
    cardDate.innerText = currObj.date;
    var cardImg = document.createElement("i");
    cardImg.setAttribute("class", "card-img-top");
    var cardTemp = document.createElement("p");
    cardTemp.setAttribute("class", "card-text");
    cardTemp.innerText = `Temp: ${currObj.temp} °F`;
    var cardWind = document.createElement("p");
    cardWind.setAttribute("class", "card-text");
    cardWind.innerText = `Wind: ${currObj.wind} MPH`;
    var cardHumid = document.createElement("p");
    cardHumid.setAttribute("class", "card-text");
    cardHumid.innerText = `Humidity: ${currObj.humidity} %`;

    cardBodyEl.append(cardDate, cardImg, cardTemp, cardWind, cardHumid);
    cardContainerEl.append(cardBodyEl);
    cardEl.append(cardContainerEl);
  }
}