// | parallax
const box = document.querySelector(".parallax-box");

box.addEventListener("mousemove", (e) => {
  const rect = box.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const xPercent = (x / rect.width) * 100;
  const yPercent = (y / rect.height) * 100;

  box.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
});

box.addEventListener("mouseleave", () => {
  box.style.backgroundPosition = "center";
});

import {Burger} from './burger.js';

Burger()