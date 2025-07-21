const sendMeSwitch = document.querySelector(".sendMeSwitcher");
let sendMe = localStorage.getItem("sendMe");
sendMe = sendMe === null ? true : JSON.parse(sendMe);

if (sendMe) {
  sendMeSwitch.style = "background: rgb(186, 0, 0);";
} else if (!sendMe) {
  sendMeSwitch.style = "background: rgb(0, 186, 46);";
}
function sendMeSwitcher() {
  sendMe = !sendMe;
  localStorage.setItem("sendMe", JSON.stringify(sendMe));
  if (sendMe) {
    timerSender(3000);
    sendMeSwitch.style = "background: rgb(186, 0, 0);";
  } else if (!sendMe) {
    sendMeSwitch.style = "background: rgb(0, 186, 46);";
  }
}
sendMeSwitch.addEventListener("click", sendMeSwitcher)
function timerSender(milli) {
  setTimeout(() => {
    if (!sendMe) return;
    window.location.href = "https://youtu.be/DjocrCuXN-w?si=zHH6Xy_FkBEYYZi8";
  }, milli);
}
timerSender(10000);
document.querySelector('.swiper-button-next').addEventListener('click', () => {
  console.log('Next button clicked');
});

document.querySelector('.swiper-button-prev').addEventListener('click', () => {
  console.log('Prev button clicked');
});
// Initialize Swiper
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// Make toggleFullscreen globally available for inline onclick
window.toggleFullscreen = function () {
  const slider = document.querySelector('.slider');
  if (!document.fullscreenElement) {
    slider.requestFullscreen().catch(err => {
      alert(`Error attempting to enable full-screen mode: ${err.message}`);
    });
  } else {
    document.exitFullscreen();
  }
};



import { Burger } from "./burger.js";

Burger();
