"use strict"

const menu = document.querySelector(".nav__list");
const ham = document.querySelector(".hamburger");
const header = document.querySelector(".header-blur");
const main = document.querySelector(".main-blur");
const menuLinks = document.querySelectorAll(".nav__item");
// TOGGLE HAMBURGER MENU AND BLUR


function toggleHam() {
  const blurHeader = header.classList.contains("blur");
  const blurMain = main.classList.contains("blur");
  const isOpened = ham.getAttribute( 'aria-expanded' ) === 'true';
  const menuOpen = menu.classList.contains("showMenu")

  // console.log(blurHeader, blurMain);
  if ( !blurHeader && !blurMain) {

    header.classList.toggle("blur");
    main.classList.toggle("blur");
    ham.classList.toggle("iconX");
    ham.classList.toggle( 'btn-menu_open', !isOpened );
    ham.setAttribute( 'aria-expanded', String( !isOpened ) );
  }

  if (menuOpen) {
    menu.classList.remove("showMenu");
    console.log(menu.classList.contains('showMenu'));
    header.classList.toggle("blur");
    main.classList.toggle("blur");
    ham.classList.toggle("iconX");
  } else {
    menu.classList.add("showMenu");
    console.log(menu.classList.contains('showMenu'));
  }

  window.addEventListener('resize', function(e){
  if (e.target.innerWidth > 600 && menu.classList.contains('showMenu')) {
    header.classList.remove("blur");
    main.classList.remove("blur");
  } else if (e.target.innerWidth < 600 && menu.classList.contains('showMenu')) {
    header.classList.add("blur");
    main.classList.add("blur");
  }
})
}


ham.addEventListener("click", toggleHam);


function toggleMenu () {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    header.classList.remove("blur");
    main.classList.remove("blur");
    ham.classList.remove("iconX");

  } else {
    menu.classList.add("showMenu");
  }

}

menuLinks.forEach(
  function(nav__link) {
      nav__link.addEventListener("click", toggleMenu);
  }
)


// navbar opacity change

const container = document.querySelector('.container')
const nav = document.querySelector('.nav')


function obCalltoAction(e) {
  // console.log(e[0].target);
  if (e[0].intersectionRatio === 1) {
    nav.classList.remove('nav--fill')
  } else {
    nav.classList.add('nav--fill')
  }
}

const ob = new IntersectionObserver(obCalltoAction, {target: container, threshold: 1});

ob.observe(container.firstElementChild)