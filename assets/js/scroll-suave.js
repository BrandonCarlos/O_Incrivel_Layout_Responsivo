export default function initScrollSuave() {
  let links = document.querySelectorAll('[data-menu="suave"] .lista li a[href^="#"]');
  let toTop = document.querySelector('a.toTop');
  links = Array.from(links);
  links.push(toTop);

  function linkToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  links.forEach(link => {
    link.addEventListener('click', linkToSection);
  })
};