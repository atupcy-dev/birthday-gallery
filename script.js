const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');
let currentIndex = 0;

function showPhoto(index) {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

function nextPhoto() {
    currentIndex = (currentIndex + 1) % images.length;
    showPhoto(currentIndex);
}

function prevPhoto() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showPhoto(currentIndex);
}

console.log(images.length);