const slides = document.querySelector('.slides');
const slideButton = document.getElementById('slideButton');
let currentSlide = 0;

// Function to slide to the next image
function slideNext() {
  currentSlide = (currentSlide + 1) % 3; // 3 images in the slider
  const offset = -currentSlide * 100;
  slides.style.transform = `translateX(${offset}%)`;
}

// Event listener for the button
slideButton.addEventListener('click', slideNext);