function updatedData(response) {
  let temperatureElement = document.querySelector("#temperature-element");
  let temperature = response.data.temperature.current;
  let cityName = document.querySelector("#weather-city");
  let weatherCondition = document.querySelector("#weather-condition");
  let humidityValue = document.querySelector("#humidity-value");
  let windValue = document.querySelector("#wind-value");
  let time = document.querySelector("#date-time");
  let date = new Date(response.data.time * 1000);
  let icon = document.querySelector("#image");

  time.innerHTML = updatedTimeDate(date);
  temperatureElement.innerHTML = Math.round(temperature);
  cityName.innerHTML = response.data.city;
  weatherCondition.innerHTML = response.data.condition.description;
  humidityValue.innerHTML = `${response.data.temperature.humidity}%`;
  windValue.innerHTML = `${response.data.wind.speed} km/h`;
  icon.innerHTML = `<img src="${response.data.condition.icon_url}" class="temperature-image" />`;
  getForecastData(response.data.city);
}

function updatedTimeDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
}

function citySearchedWeather(city) {
  let apiKey = `85be9c7bad2eb4fafc3fe0e35t2o0c3e`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(updatedData);
}

function searchSubmitForm(event) {
  event.preventDefault();

  let searchFieldInput = document.querySelector("#search-field");

  citySearchedWeather(searchFieldInput.value);
}

function getForecastData(city) {
  let apiKey = "85be9c7bad2eb4fafc3fe0e35t2o0c3e";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(displayForecast);
}

function displayForecast() {
  let days = ["Fri", "Sat", "Sun", "Mon", "Tue"];
  let forecastHtml = "";

  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `
            <div class="weather-forecast-day-name">
                <div class="weather-forecast-day">${day}</div>
                <div class="weather-forecast-symbol">⛅️</div>
                <div class="weather-forecast-temp">
                    <span class="weather-forecast-max-temp"> max </span>
                    <span class="weather-forecast-min-temp"> min </span>
                </div>
               `;
  });

  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchSubmitForm);

citySearchedWeather("Stuttgart");
displayForecast();
