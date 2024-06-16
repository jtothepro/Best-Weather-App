function updatedData(response) {
  let temperatureElement = document.querySelector("#temperature-element");
  temperatureElement.innerHTML = response.data.temperature.current;
  console.log(temperatureElement);
}

function citySearchedWeather(city) {
  let apiKey = `85be9c7bad2eb4fafc3fe0e35t2o0c3e`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(updatedData);
}

function searchSubmitForm(event) {
  event.preventDefault();

  let searchFieldInput = document.querySelector("#search-field");
  let cityName = document.querySelector("#weather-city");
  cityName.innerHTML = searchFieldInput.value;
  citySearchedWeather(searchFieldInput.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchSubmitForm);
