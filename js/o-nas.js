const slides = document.getElementById("slides");
const slideCount = document.querySelectorAll(".slide").length - 2;
let sendMe = localStorage.getItem("sendMe");
sendMe = sendMe === null ? true : JSON.parse(sendMe);
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 1;
let transitioning = false;

slides.style.transition = "none";
slides.style.transform = `translateX(-${index * 100}%)`;

function goToSlide(i) {
  if (transitioning) return;
  transitioning = true;
  slides.style.transition = "transform 0.5s ease";
  slides.style.transform = `translateX(-${i * 100}%)`;
  index = i;
}
function sendMeSwitcher() {
  sendMe = !sendMe;
  localStorage.setItem("sendMe", JSON.stringify(sendMe)); 
  console.log("sendMe is now:", sendMe);
}
setTimeout(() => {
  if (!sendMe) return;
  window.location.href = "https://youtu.be/DjocrCuXN-w?si=zHH6Xy_FkBEYYZi8";
}, 10000);
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
