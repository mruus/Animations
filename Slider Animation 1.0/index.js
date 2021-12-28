// Sliders
let activeSlider = 1,
  activeDirection = "up",
  slideDirection = "up";
let moveSize = [0, 600, 1200, 1800];

setInterval(function () {
  automaticSlide();
}, 5000);

// Automatic sliding with setTiming function
function automaticSlide() {
  // get next slide
  let currentSlide = activeSlider;
  let next = nextSlide();

  // Update sizes
  updateMoveSize();

  // Update Slider
  updateSlides(currentSlide, next);

  // Animate Slider
  animateSlide(next);
}

function nextSlide() {
  activeSlider == 4
    ? activeSlider-- && (activeDirection = "down")
    : activeSlider == 1
    ? activeSlider++ && (activeDirection = "up")
    : activeDirection == "up"
    ? activeSlider++
    : activeSlider--;
  return activeSlider;
}

function updateMoveSize() {
  for (let i = 0; i < moveSize.length; i++) {
    if (activeDirection == "up") {
      moveSize[i] -= 600;
    } else {
      moveSize[i] += 600;
    }
  }
}

function updateSlides(currentSlide, next) {
  for (let i = 0; i < moveSize.length; i++) {
    let slide = document.querySelector(".slider__" + (i + 1));
    slide.style.top = moveSize[i] + "pt";
  }

  let numbers = document.querySelectorAll(".slide__number");
  numbers[currentSlide - 1].classList.remove("active");
  numbers[next - 1].classList.add("active");
}

function animateSlide(next) {
  let slide = document.querySelector(".slider__" + next);
  let h3 = document.querySelector(".slider__" + next + " h3");
  let p = document.querySelector(".slider__" + next + " p");
  let button = document.querySelector(".slider__" + next + " button");
  let trend__box = document.querySelectorAll(
    ".slider__" + next + " .trend__box"
  );
  let t1 = gsap.timeline();
  t1.to(h3, { y: 100, opacity: 0 }, 0.5)
    .to(p, { x: -400, opacity: 0 }, 0.5)
    .to(h3, { y: 0, opacity: 1 }, 1)
    .to(p, { x: 0, opacity: 1 }, 1)
    .to(trend__box[0], { x: -100 }, 0.5)
    .to(trend__box[1], { x: 100 }, 0.5)
    .to(trend__box[0], { opacity: 1, x: 0 }, 1)
    .to(trend__box[1], { opacity: 1, x: 0 }, 1)
    .to(trend__box[2], { y: 100 }, 0.5)
    .to(trend__box[3], { y: 100 }, 0.5)
    .to(trend__box[2], { opacity: 1, y: 0 }, 1)
    .to(trend__box[3], { opacity: 1, y: 0 }, 1);
}
