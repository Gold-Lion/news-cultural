const siteNav = document.querySelector('.site-nav');
const navToggle = document.querySelector('.site-nav__toggle');
const wow = new WOW({
  mobile: false
});

document.querySelector(".site-nav").classList.remove("site-nav--nojs");

const openMenu = () => {
  siteNav.classList.remove('site-nav--closed');
  siteNav.classList.add('site-nav--opened');
};

const closeMenu = () => {
  siteNav.classList.remove('site-nav--opened');
  siteNav.classList.add('site-nav--closed');
};

navToggle.addEventListener('click', () => {
  if (siteNav.classList.contains('site-nav--closed')) {
    openMenu();
  } else {
    closeMenu();
  }
});

wow.init();



