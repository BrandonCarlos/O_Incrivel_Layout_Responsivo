import initScrollSuave from './scroll-suave.js';
import initScrollAnimacao from './scroll-animacao.js';
import initTooltip from './tooltip.js';
import initDropdown from './dropdown-menu.js';
import initMenuMobile from './menu-mobile.js';

initScrollSuave();
initScrollAnimacao();
initTooltip();
initDropdown();
initMenuMobile();

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})