// todo slider
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const slidesWrapper = document.querySelector('.slides');
  let index = 0;

  function updateSlide() {
    slidesWrapper.style.transform = `translateX(-${index * 100}%)`;
  }

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    updateSlide();
  });

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSlide();
  });

  // Optional: Autoplay every 5s
  // setInterval(() => {
  //   nextBtn.click();
  // }, 5000);


// | background
document.querySelectorAll(".parallax-box").forEach((box) => {
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
});
