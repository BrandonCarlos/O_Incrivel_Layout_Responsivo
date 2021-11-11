import outsideClick from './outsideclick.js';

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ['click', 'touchstart'];

  if (menuButton) { //Se estivermos com menos de 700px terá o menuButton
    function openMenu() {
      menuList.classList.add('active');
      menuButton.classList.add('active');
      outsideClick(menuList, eventos, () => {
        console.log('teste');
        menuList.classList.remove('active');
        menuButton.classList.remove('active');
      });
    }

    eventos.forEach(userEvent => {
      menuButton.addEventListener(userEvent, openMenu);
    })
  }
};