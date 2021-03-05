
const menu = document.querySelector(".nav__list");
const ham = document.querySelector(".hamburger");



ham.addEventListener("click", toggleMenu);


function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
    } else {
      menu.classList.add("showMenu");
    }
  }


const menuLinks = document.querySelectorAll(".nav__item");

menuLinks.forEach(
    function(nav__link) {
        nav__link.addEventListener("click", toggleMenu);
    }
  )

