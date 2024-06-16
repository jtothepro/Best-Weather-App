function searchSubmitForm(event) {
  event.preventDefault();
  {
    let searchFieldInput = document.querySelector("#search-field");
    let cityName = document.querySelector("#weather-city");
    cityName.innerHTML = searchFieldInput.value;
  }
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchSubmitForm);
