import Common from "./common/common";

import HeaderFixed from "./macros/headerFixed";
import HamburgerMenu from "./macros/hamburgerMenu";
import MenuToggle from "./macros/menuToggle";
import HomeCarousel from "./macros/homeCarousel";
import AboutToggle from "./macros/aboutToggle";
import RealCarousel from "./macros/realCarousel";
import Faq from "./macros/faq";


// EVENT LISTENER - LOAD
// ========================================
window.addEventListener('load', (ev) => {

  // COMMON
  Common.initLoad();

  // MACROS
  HeaderFixed.init();
  HamburgerMenu.init();
  MenuToggle.init();
  HomeCarousel.init();
  AboutToggle.init();
  RealCarousel.init();
  Faq.init();

  /* SCROLL WOW ANIMATION */
  AOS.init({
    duration: 1000,
    once: true
  });

}, false);


// EVENT LISTENER - SCROLL
// ========================================
window.addEventListener('scroll', (ev) => {

  HeaderFixed.init();

}, false);
