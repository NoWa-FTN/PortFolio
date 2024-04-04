console.log('Bonjour');

// Fonction pour activer le mode sombre
function enableDarkMode() {
  document.body.classList.add('dark-theme'); // Ajoute la classe dark-theme au corps du document
  localStorage.setItem('theme', 'dark'); // Enregistre le thème sombre dans le stockage local
}

// Fonction pour désactiver le mode sombre
function disableDarkMode() {
  document.body.classList.remove('dark-theme'); // Supprime la classe dark-theme du corps du document
  localStorage.setItem('theme', 'light'); // Enregistre le thème clair dans le stockage local
}

// Fonction pour vérifier le thème stocké localement et appliquer le thème approprié
function checkTheme() {
  const theme = localStorage.getItem('theme'); // Récupère le thème depuis le stockage local
  if (theme === 'dark') {
      enableDarkMode(); // Active le mode sombre si le thème est sombre
      document.getElementById('themeSwitch').checked = true; // Coche l'interrupteur si le thème est sombre
  } else {
      disableDarkMode(); // Désactive le mode sombre sinon
      document.getElementById('themeSwitch').checked = false; // Décoche l'interrupteur si le thème est clair
  }
}

// Appel de la fonction pour vérifier le thème au chargement de la page
checkTheme();

// Écouteur d'événements pour détecter le changement de l'interrupteur du thème
document.getElementById('themeSwitch').addEventListener('change', function() {
  // Vérifie l'état actuel de l'interrupteur
  if (this.checked) {
      enableDarkMode(); // Active le mode sombre si l'interrupteur est coché
  } else {
      disableDarkMode(); // Désactive le mode sombre sinon
  }
});

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

