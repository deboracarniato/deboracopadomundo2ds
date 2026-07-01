//
// Este arquivo adiciona interatividade ao site.
// Ele anima os elementos da página, marca o link ativo na navegação e altera a cor da marca.
//

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('js-ready');

  const animatedElements = document.querySelectorAll(
    'main > h1, .hero, .copa-image, .flag-card, .summary-list, .copa-content, .footer, .navbar a'
  );

  animatedElements.forEach((element, index) => {
    element.classList.add('fade-up');
    element.style.transitionDelay = `${Math.min(index * 0.06, 0.3)}s`;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-up').forEach((element) => observer.observe(element));

  const homepageImages = document.querySelectorAll('.copa-image');
  homepageImages.forEach((image) => image.classList.add('homepage-image-animated'));

  const navLinks = document.querySelectorAll('.navbar a');
  navLinks.forEach((link) => {
    link.addEventListener('mouseenter', () => {
      link.classList.add('is-active');
      setTimeout(() => link.classList.remove('is-active'), 800);
    });
  });

  const brand = document.querySelector('header .brand');
  if (brand) {
    const colors = ['#A1CF0C', '#FFFFFF'];
    let colorIndex = 0;
    setInterval(() => {
      colorIndex = (colorIndex + 1) % colors.length;
      brand.style.color = colors[colorIndex];
    }, 3000);
  }
});
