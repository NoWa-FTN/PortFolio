console.log('Bonjour, JavaScript !');


window.addEventListener('scroll', function() {
  var scrollPosition = window.pageYOffset;
  var opacity = 1 - (scrollPosition / 900);

  if (opacity >= 0) {
    document.querySelector('.hero-background').style.opacity = opacity;
  } else {
    document.querySelector('.hero-background').style.opacity = 0;
  }
});


window.addEventListener('scroll', function() {
  var scrollPosition = window.pageYOffset;
  var opacity = 1 - (scrollPosition / 900);

  if (opacity >= 0) {
    document.querySelector('.hero-background2').style.opacity = opacity;
  } else {
    document.querySelector('.hero-background2').style.opacity = 0;
  }
});


var navbar = document.querySelector('nav');
var prevScrollpos = window.pageYOffset;

window.addEventListener('scroll', function() {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    navbar.classList.add('visible');
  } else {
    navbar.classList.remove('visible');
  }

  prevScrollpos = currentScrollPos;
});


const fadeElements = document.querySelectorAll('.fade-in');

const fadeInObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
});

fadeElements.forEach(element => {
  fadeInObserver.observe(element);
});

