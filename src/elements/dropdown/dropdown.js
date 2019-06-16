var dropdownList = document.querySelector("[name=dropdown-list]");
var dropdownPopup = document.querySelector(".dropdown-container__rows");

dropdownList.addEventListener("click", function(evt) {
    evt.preventDefault();
    dropdownPopup.classList.toggle(".dropdown-container__slideToggle_show");
});