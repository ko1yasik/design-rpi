let currentIndex = 0;
const slides = document.getElementsByClassName('slide');
const slideInterval = 3000;
console.log(slides)
 
function changeSlide() {
  slides[currentIndex].style.opacity = 0;
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].style.opacity = 1;
}
 
setInterval(changeSlide, slideInterval);

