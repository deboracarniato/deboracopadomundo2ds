//
// Este arquivo adiciona interatividade ao site.
// Ele anima os elementos da página, marca o link ativo na navegação e altera a cor da marca.
//

// Aguarda o carregamento do DOM para aplicar as interações.
document.addEventListener('DOMContentLoaded', () => {
    // Marca o corpo como pronto para receber animações.
  document.body.classList.add('js-ready');

    // Seleciona os elementos que receberão animação de entrada.
  const animatedElements = document.querySelectorAll(
    'main > h1, .hero, .copa-image, .flag-card, .summary-list, .copa-content, .footer, .navbar a'
  );

  animatedElements.forEach((element, index) => {
    element.classList.add('fade-up');
    element.style.transitionDelay = `${Math.min(index * 0.06, 0.3)}s`;
  });

    // Cria um observador para ativar a animação quando o elemento entra na tela.
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

    // Começa a observar todos os elementos animados.
  document.querySelectorAll('.fade-up').forEach((element) => observer.observe(element));

    // Adiciona efeito animado às imagens principais.
  const homepageImages = document.querySelectorAll('.copa-image');
  homepageImages.forEach((image) => image.classList.add('homepage-image-animated'));

    // Seleciona os links da navegação para aplicar interação visual.
  const navLinks = document.querySelectorAll('.navbar a');
  navLinks.forEach((link) => {
    link.addEventListener('mouseenter', () => {
      link.classList.add('is-active');
      setTimeout(() => link.classList.remove('is-active'), 800);
    });
  });

    // Busca o nome do site para trocar a cor periodicamente.
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
