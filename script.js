let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const progressBar = document.getElementById('progressBar');
const counter = document.getElementById('slideCounter');

function updateSlider() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentSlide) {
            slide.classList.add('active');
        }
    });

    const progressPercentage = ((currentSlide + 1) / slides.length) * 100;
    progressBar.style.width = progressPercentage + '%';

    if (counter) {
        counter.textContent = (currentSlide + 1) + ' / ' + slides.length;
    }
}

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateSlider();
    }
});

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlider();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
        if (currentSlide < slides.length - 1) {
            currentSlide++;
            updateSlider();
        }
    } else if (e.key === 'ArrowLeft') {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlider();
        }
    }
});

updateSlider();