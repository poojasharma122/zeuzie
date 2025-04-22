// mobil
document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.getElementById("search-icon");
    const nav = document.querySelector(".nav");
    const menuToggle = document.querySelector(".menu-toggle");
  
    if (searchIcon) {
        searchIcon.addEventListener("click", function () {
            nav.classList.toggle("search");
            nav.classList.toggle("no-search");
        });
    }
  
    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            nav.classList.toggle("mobile-nav");
            this.classList.toggle("is-active");
        });
    }
  });