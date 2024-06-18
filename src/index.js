function updatedData(response) {
  let temperatureElement = document.querySelector("#temperature-element");
  let temperature = response.data.temperature.current;
  let cityName = document.querySelector("#weather-city");
  let weatherCondition = document.querySelector("#weather-condition");

  temperatureElement.innerHTML = Math.round(temperature);
  cityName.innerHTML = response.data.city;
  weatherCondition.innerHTML = response.data.condition.description;
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
