// animação simples ao rolar a página
const sections = document.querySelectorAll('.glass');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (top < screenHeight - 100) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    }
  });
});

particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#2dd4ff"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.4
    },
    size: {
      value: 2,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 140,
      color: "#2dd4ff",
      opacity: 0.25,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.2
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      }
    },
    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 0.5
        }
      }
    }
  },
  retina_detect: true
});
