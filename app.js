// Particles
particlesJS("particles-js", {
  particles: {
    number: { value: 50, density: { enable: true, value_area: 1000 } },
    color: { value: ["#FF5733", "#33FF57", "#3357FF", "#F0E68C"] },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#fff" },
    },
    opacity: { value: 0.6 },
    size: { value: 4, random: true },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#D0B8A8",
      opacity: 0.4,
      width: 1,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      resize: true,
    },
    modes: {
      grab: { distance: 140, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
    },
  },
  retina_detect: true,
});


// Navbar Animation
document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.querySelector('.neuro-text');

  setTimeout(() => {
    textElement.classList.add('typing-done');
  }, 3000);
});

// Modal
var exameModal = document.getElementById('exameModal')
  exameModal.addEventListener('show.bs.modal', function (event) {
    var button = event.relatedTarget
    var title = button.getAttribute('data-title')
    var content = button.getAttribute('data-content')

    var modalTitle = exameModal.querySelector('.modal-title')
    var modalBodyContent = exameModal.querySelector('#modalContent')

    modalTitle.textContent = title
    modalBodyContent.textContent = content
  })
