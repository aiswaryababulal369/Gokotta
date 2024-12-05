// Carousel functionality
let currentIndex = 0;

function showSlide(index, containerClass) {
  const slides = document.querySelectorAll(`.${containerClass} .carousel-item`);
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
}

function nextSlide(containerClass) {
  const slides = document.querySelectorAll(`.${containerClass} .carousel-item`);
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex, containerClass);
}

document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentIndex, 'carousel-container');
  setInterval(() => nextSlide('carousel-container'), 3000); // Auto-scroll
});


// script.js
document.querySelectorAll('.faq-question').forEach((button) => {
  button.addEventListener('click', () => {
      const faqItem = button.parentElement;

      // Toggle the "open" class
      faqItem.classList.toggle('open');

      // Close other items (optional)
      document.querySelectorAll('.faq-item').forEach((item) => {
          if (item !== faqItem) {
              item.classList.remove('open');
          }
      });
  });
});

