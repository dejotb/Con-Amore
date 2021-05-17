
const menu = document.querySelector(".nav__list");
const ham = document.querySelector(".hamburger");
const header = document.querySelector(".header-blur");
const main = document.querySelector(".main");
const menuLinks = document.querySelectorAll(".nav__item");
// TOGGLE HAMBURGER MENU AND BLUR

function toggleHam() {
  const blurHeader = header.classList.contains("blur");
  const blurMain = main.classList.contains("blur");
  const isOpened = ham.getAttribute( 'aria-expanded' ) === 'true';
  const menuOpen = menu.classList.contains("showMenu")

  console.log(blurHeader, blurMain);
  if ( !blurHeader && !blurMain) {
    header.classList.toggle("blur");
    main.classList.toggle("blur");
    ham.classList.toggle("iconX");
    ham.classList.toggle( 'btn-menu_open', !isOpened );
    ham.setAttribute( 'aria-expanded', String( !isOpened ) );
  }

  if (menuOpen) {
    menu.classList.remove("showMenu");
    header.classList.toggle("blur");
    main.classList.toggle("blur");
    ham.classList.toggle("iconX");
  } else {
    menu.classList.add("showMenu");
  }
}


ham.addEventListener("click", toggleHam);


menuLinks.forEach(
  function(nav__link) {
      nav__link.addEventListener("click", toggleHam);
  }
)


