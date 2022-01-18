"use strict"

// Allowing cookies storage

const handleCookies = function () {
  const cookieStorage = {
    getItem: (key) => {
      const cookies = document.cookie.split(';').map(cookie => cookie.split('=')).reduce((acc, [key, value]) => ({...acc, [key.trim()]: value }), {});
      return cookies[key];
    },
    setItem: (key, value) => {
      document.cookie = `${key}=${value}`
    }


  }

  const storageType = cookieStorage;
  const consentPropertyName = 'jdc_consent';

  const shouldShowPopup = () => !storageType.getItem(consentPropertyName);

  const saveToSotrage = () => storageType.setItem(consentPropertyName, true);

  window.addEventListener('load', function() {

    const consentPopup = document.querySelector('.consent__popup');
    const acceptBtn = document.querySelector('.accept');

   const acceptFn = () => {
     saveToSotrage(storageType);
     consentPopup.classList.add('hidden');
   };

   acceptBtn.addEventListener('click', acceptFn);

    if (shouldShowPopup(storageType)) {
      setTimeout(() => {

        consentPopup.classList.remove('hidden');
      }, 2000)
    }
  })
}

handleCookies()


// gsap animations

const animationElements = function () {
  const section = document.querySelectorAll('.service');
  const sectionsItems = document.querySelectorAll('.service__item');

    gsap.fromTo(
      sectionsItems,
      { y: '+=100', opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 2.5,
        ease: "elastic.out(1, 0.3)",
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
        },
      }
    );
};

animationElements();


// Handling navigation

const handleNav = function() {

const menu = document.querySelector(".nav__list");
const ham = document.querySelector(".hamburger");
const header = document.querySelector(".header-blur");
const main = document.querySelector(".main-blur");
const menuLinks = document.querySelectorAll(".nav__item");
const container = document.querySelector('.container')
const nav = document.querySelector('.nav')
const logo = document.querySelector('.nav__logo')

// TOGGLE HAMBURGER MENU AND BLUR


function toggleHam() {
  const blurHeader = header.classList.contains("blur");
  const blurMain = main.classList.contains("blur");
  const isOpened = ham.getAttribute( 'aria-expanded' ) === 'true';
  const menuOpen = menu.classList.contains("showMenu")

  if ( !blurHeader && !blurMain) {

    setTimeout(() => {
      header.classList.toggle("blur");
      main.classList.toggle("blur");

    }, 500);

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
    logo.classList.add('nav__logo--initial')
  } else {
    menu.classList.add("showMenu");
    console.log(menu.classList.contains('showMenu'));
    logo.classList.remove('nav__logo--initial')
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

// navbar opacity change

function obCalltoAction(e) {
  if (e[0].intersectionRatio === 0) {
    nav.classList.remove('nav--initial')
    logo.classList.remove('nav__logo--initial')


  } else {
    nav.classList.add('nav--initial')
    logo.classList.add('nav__logo--initial')
  }
}

const ob = new IntersectionObserver(obCalltoAction, {target: container, threshold: 1});

ob.observe(container.firstElementChild);


  ham.addEventListener("click", toggleHam);

  menuLinks.forEach(
    function(nav__link) {
        nav__link.addEventListener("click", toggleMenu);
    }
  );
}


handleNav()