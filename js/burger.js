// | Burger
export let Burger = document.querySelector(".burgerB").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".nav__links").classList.toggle("open");
  document.querySelector("body").classList.toggle("lock");
});