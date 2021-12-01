var displayWeather = function () {
  // display curr weather
  var currentCity = document.getElementById("currCity");
  currentCity.textContent = weatherObj[0].city + ` (${weatherObj[0].date})`;
  var currentIcon = document.createElement("img");
  currentIcon.className ="card-img-top";
  currentIcon.setAttribute("id", "current-img")
  currentIcon.src = `https://openweathermap.org/img/wn/${weatherObj[0].img}@2x.png`;
  currentCity.appendChild(currentIcon);
  var currentTemp = document.getElementById("currTemp");
  currentTemp.textContent = `Temp: ${weatherObj[0].temp} °F`;
  var currentWind = document.getElementById("currWind");
  currentWind.textContent = `Wind: ${weatherObj[0].wind} MPH`;
  var currentHumid = document.getElementById("currHumid");
  currentHumid.textContent = `Humidity: ${weatherObj[0].humidity} %`;
  var currentUv = document.getElementById("currUv");
  currentUv.innerText = "UV Index: ";
  var spanUv = document.createElement("span");
  spanUv.setAttribute("id", "uvRound");
  spanUv.innerHTML = weatherObj[0].uv;
    if (spanUv.textContent <= "2") {
      spanUv.className = "bg-success";
    }
    else if (spanUv.textContent <= "5") {
      spanUv.className = "bg-warning text-dark";
    }
    else {
      spanUv.className = "bg-danger";
    }
  currentUv.appendChild(spanUv);
  
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
    cardDate.setAttribute("class", "card-title mb-0");
    cardDate.setAttribute("id", `h5-${i}`)
    cardDate.innerHTML = currObj.date;
    var cardImg = document.createElement("img");
    cardImg.setAttribute("class", "card-img-top");
    cardImg.setAttribute("id", `daily-img${i}`)
    cardImg.src = `https://openweathermap.org/img/wn/${weatherObj[i].img}.png`;
    var cardTemp = document.createElement("p");
    cardTemp.setAttribute("class", "card-text");
    cardTemp.innerHTML = `Temp: ${currObj.temp} °F`;
    var cardWind = document.createElement("p");
    cardWind.setAttribute("class", "card-text");
    cardWind.innerHTML = `Wind: ${currObj.wind} MPH`;
    var cardHumid = document.createElement("p");
    cardHumid.setAttribute("class", "card-text");
    cardHumid.innerHTML = `Humidity: ${currObj.humidity} %`;

    cardBodyEl.append(cardDate, cardImg, cardTemp, cardWind, cardHumid);
    cardContainerEl.append(cardBodyEl);
    cardEl.append(cardContainerEl);
  }
}