const carousel = document.querySelector(".simple-carousel-container");
const slide = document.querySelector(".simple-carousel-slide");

function handleCarouselMove(positive = true) {
  const slideWidth = slide.clientWidth;
  carousel.scrollLeft = positive
    ? carousel.scrollLeft + slideWidth
    : carousel.scrollLeft - slideWidth;
}
