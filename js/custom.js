const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

let slideIndex = 0;

function moveSlide() {
    slides.style.transform = `translateX(-${slideIndex * 100}vw)`;
}

// Previous Button
prevBtn.addEventListener('click', () => {
    slideIndex = (slideIndex > 0) ? slideIndex - 1 : totalSlides - 1;
    moveSlide();
});

// Next Button
nextBtn.addEventListener('click', () => {
    slideIndex = (slideIndex < totalSlides - 1) ? slideIndex + 1 : 0;
    moveSlide();
});

// Adjust on Resize
window.addEventListener('resize', moveSlide);
