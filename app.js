
var menu = document.querySelector(".nav__list");
var ham = document.querySelector(".hamburger");
// var xIcon = document.querySelector(".xIcon");


ham.addEventListener("click", toggleMenu);


function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
    //   xIcon.style.display = "none";
    } else {
      menu.classList.add("showMenu");
    }
  }


var menuLinks = document.querySelectorAll(".nav__item");

menuLinks.forEach(
    function(nav__link) {
        nav__link.addEventListener("click", toggleMenu);
    }
  )
