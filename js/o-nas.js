// document.addEventListener("DOMContentLoaded", () => {
//   document.querySelectorAll(".slider").forEach(setupSlider);
// });

// function setupSlider(slider) {
//   const slides = slider.querySelector(".slides");
//   const slideCount = slides.children.length - 2; 
//   const prevBtn = slider.querySelector(".prev");
//   const nextBtn = slider.querySelector(".next");

//   let index = 1;
//   let transitioning = false;

//   // Initial setup
//   slides.style.transition = "none";
//   slides.style.transform = `translateX(-${index * 100}%)`;
//   requestAnimationFrame(() => {
//     requestAnimationFrame(() => {
//       slides.style.transition = "transform 0.5s ease";
//     });
//   });

//   function goToSlide(i) {
//     if (transitioning) return;
//     transitioning = true;
//     slides.style.transition = "transform 0.5s ease";
//     slides.style.transform = `translateX(-${i * 100}%)`;
//     index = i;
//   }

//   nextBtn.addEventListener("click", () => {
//     if (!transitioning) goToSlide(index + 1);
//   });

//   prevBtn.addEventListener("click", () => {
//     if (!transitioning) goToSlide(index - 1);
//   });

//   slides.addEventListener("transitionend", () => {
//     transitioning = false;

//     if (index === 0) {
//       slides.style.transition = "none";
//       index = slideCount;
//       slides.style.transform = `translateX(-${index * 100}%)`;
//       requestAnimationFrame(() => {
//         slides.style.transition = "transform 0.5s ease";
//       });
//     }

//     if (index === slideCount + 1) {
//       slides.style.transition = "none";
//       index = 1;
//       slides.style.transform = `translateX(-${index * 100}%)`;
//       requestAnimationFrame(() => {
//         slides.style.transition = "transform 0.5s ease";
//       });
//     }
//   });
// }


const slides = document.getElementById("slides");
const slideCount = 4;
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 1;
let transitioning = false;

// Start at first real slide
slides.style.transition = "none";
slides.style.transform = `translateX(-${index * 100}%)`;

function goToSlide(i) {
  if (transitioning) return;
  transitioning = true;
  slides.style.transition = "transform 0.5s ease";
  slides.style.transform = `translateX(-${i * 100}%)`;
  index = i;
}

nextBtn.addEventListener("click", () => {
  if (!transitioning) goToSlide(index + 1);
});

prevBtn.addEventListener("click", () => {
  if (!transitioning) goToSlide(index - 1);
});

slides.addEventListener("transitionend", () => {
  transitioning = false;

  if (index === 0) {
    slides.style.transition = "none";
    index = slideCount;
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  if (index === slideCount + 1) {
    slides.style.transition = "none";
    index = 1;
    slides.style.transform = `translateX(-${index * 100}%)`;
  }
});