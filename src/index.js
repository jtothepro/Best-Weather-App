function updatedData(response) {
  let temperatureElement = document.querySelector("#temperature-element");
  let temperature = response.data.temperature.current;
  let cityName = document.querySelector("#weather-city");
  let weatherCondition = document.querySelector("#weather-condition");
  let humidityValue = document.querySelector("#humidity-value");
  let windValue = document.querySelector("#wind-value");
  let time = document.querySelector("#date-time");
  let date = new Date(response.data.time * 1000);

  time.innerHTML = updatedTimeDate(date);
  temperatureElement.innerHTML = Math.round(temperature);
  cityName.innerHTML = response.data.city;
  weatherCondition.innerHTML = response.data.condition.description;
  humidityValue.innerHTML = `${response.data.temperature.humidity}%`;
  windValue.innerHTML = `${response.data.wind.speed} km/h`;
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

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchSubmitForm);

citySearchedWeather("Stuttgart");
