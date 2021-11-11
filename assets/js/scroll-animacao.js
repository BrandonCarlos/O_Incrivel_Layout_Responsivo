export default function initScrollAnimacao() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');

  function animaScroll(event) {
    sections.forEach(section => {

      const metadeTela = window.innerHeight * 0.4;//300
      const sectionTop = section.getBoundingClientRect().top - metadeTela;//0 - 300 = -300
      const isSectionTop = (sectionTop - metadeTela) < 0;
      if(isSectionTop) {
        section.classList.add('ativo');
      } else {
        section.classList.remove('ativo');
      }
    })
  }

  animaScroll();

  window.addEventListener('scroll', animaScroll);

};