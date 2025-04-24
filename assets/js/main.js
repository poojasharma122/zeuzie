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


  // Read More Functionality JS Start
  $('.subpage-readmore-btn').click(function (e) {
    e.preventDefault();
    const $this = $(this);
    const content = $this.parent().prev();
    content.stop(true, true).slideToggle(500);
    $this.html(function (_, currentHtml) {
      return currentHtml.includes('Διαβάστε Περισσότερα')
        ? 'Διαβάστε Λιγότερα <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"/></svg>'
        : 'Διαβάστε Περισσότερα <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>';
    });
});

  // Read More Functionality JS end

  AOS.init({
    duration: 1200,
  })