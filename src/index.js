function searchSubmitForm(event) {
  event.preventDefault();
  let searchFieldInput = document.querySelector("#search-field");
  console.log(searchFieldInput.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchSubmitForm);
