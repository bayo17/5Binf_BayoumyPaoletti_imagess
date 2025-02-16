const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const carouselImage = document.getElementById('carousel-image');
const images = [
    '/assets/immagine1.jpeg',
    '/assets/immagine2.jpeg',
    '/assets/immagine3.jpeg',
    '/assets/immagine4.jpeg',
    '/assets/immagine5.jpeg'
];
let currentIndex = 0;
function updateCarousel() {
    carouselImage.src = images[currentIndex];
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
}
function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
}
prevBtn.addEventListener('click', showPrevImage);
nextBtn.addEventListener('click', showNextImage);
updateCarousel();
