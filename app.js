
const menu = document.querySelector(".nav__list");
const ham = document.querySelector(".hamburger");

const header = document.querySelector(".header-blur");
const main = document.querySelector(".main-blur");

// TOGGLE HAMBURGER MENU AND BLUR

ham.addEventListener("click", toggleHam);

function toggleHam() {
  if (header.classList.contains("blur") && main.classList.contains("blur")) {
    header.classList.remove("blur");
    main.classList.remove("blur");
    ham.classList.remove("iconX");

  } else {

    header.classList.add("blur");
    main.classList.add("blur");
    ham.classList.add("iconX");

  }
}


ham.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
      header.classList.remove("blur");
      main.classList.remove("blur");
      ham.classList.remove("iconX");

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





