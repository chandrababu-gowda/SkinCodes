const slides = document.querySelectorAll(".slide");
const reviewSlidesArr = [
  document.querySelectorAll(".review-slide-1"),
  document.querySelectorAll(".review-slide-2"),
  document.querySelectorAll(".review-slide-3"),
  document.querySelectorAll(".review-slide-4"),
];
const nextSlide = document.querySelector(".btn-next");
const prevSlide = document.querySelector(".btn-prev");
const hamBtn = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

let curSlide = 0;
let maxSlide = slides.length - 1;
let reviewCurrentSlide = 0;
// let reviewMaxSlide = reviewSlides.length - 1;

// *************** Hamburger ***************

// hamBtn.addEventListener("click", () => {
//   console.log("clicked");

//   if (navLinks.classList.contains("hidden")) {
//     navLinks.classList.remove("hidden");
//   } else {
//     navLinks.classList.add("hidden");
//   }
// });

// *************** Carousel ***************

slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * 100}%)`;
});

reviewSlidesArr.forEach((reviewSlides) => {
  reviewSlides.forEach((reviewSlide, index) => {
    reviewSlide.style.transform = `translateX(${index * 100}%)`;
  });
});

// *************** Animation ***************

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => {
  observer.observe(el);
});

// *************** Required functions ***************

automatic();

function automatic() {
  if (curSlide == maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  if (reviewCurrentSlide == 3) {
    reviewCurrentSlide = 0;
  } else {
    reviewCurrentSlide++;
  }

  changeSlide(slides, curSlide);
  reviewSlidesArr.forEach((reviewSlides) => {
    changeSlide(reviewSlides, reviewCurrentSlide);
  });
  setTimeout(automatic, 3500);
}

nextSlide.addEventListener("click", () => {
  if (curSlide == maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  changeSlide(slides, curSlide);
});

prevSlide.addEventListener("click", () => {
  if (curSlide == 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }
  changeSlide(slides, curSlide);
});

function changeSlide(slidesArr, currentSlide) {
  slidesArr.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
  });
}
