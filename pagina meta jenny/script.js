// ================= SMOOTH SCROLL =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// ================= REVEAL ON SCROLL =================
function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(section => {
        const windowHeight = window.innerHeight;
        const elementTop = section.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            section.classList.add("active");
        }
    });
}

const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const items = document.querySelectorAll('.carousel-item');

let index = 0;
const itemWidth = items[0].offsetWidth + 30; // ancho + margen

function moveCarousel() {
  track.style.transform = `translateX(-${index * itemWidth}px)`;
}

nextBtn.addEventListener('click', () => {
  if (index < items.length - 1) {
    index++;
  } else {
    index = 0;
  }
  moveCarousel();
});

prevBtn.addEventListener('click', () => {
  if (index > 0) {
    index--;
  } else {
    index = items.length - 1;
  }
  moveCarousel();
});

// Autoplay
let autoPlay = setInterval(() => {
  nextBtn.click();
}, 4000);

// Pausa al pasar mouse
track.addEventListener('mouseenter', () => {
  clearInterval(autoPlay);
});

track.addEventListener('mouseleave', () => {
  autoPlay = setInterval(() => {
    nextBtn.click();
  }, 4000);
});


window.addEventListener("scroll", reveal);

// ================= PARALLAX EFFECT =================
const layers = document.querySelectorAll(".parallax-layer");

document.addEventListener("mousemove", e => {
    const x = (window.innerWidth - e.pageX * 2) / 100;
    const y = (window.innerHeight - e.pageY * 2) / 100;

    layers.forEach((layer, index) => {
        const depth = (index + 1) * 10;
        layer.style.transform = `translate(${x / depth}px, ${y / depth}px)`;
    });
});
