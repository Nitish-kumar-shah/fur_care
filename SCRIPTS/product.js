// const leftScroll = document.querySelector(".js-left-btn");
// const rightScroll = document.querySelector(".js-right-btn");
// const container = document.querySelector('.header-img')

// function nextMoves(container, scrollDistance){

// }

// const headerImg = document.querySelector(".header-img");
// const leftBtn = document.querySelector(".scroll-btn-left");
// const rightBtn = document.querySelector(".scroll-btn-right");

// const scrollAmount = headerImg.offsetWidth;

// leftBtn.addEventListener("click", () => {
//   headerImg.scrollBy({
//     left: -scrollAmount,
//     behavior: "smooth",
//   });
// });

// rightBtn.addEventListener("click", () => {
//   headerImg.scrollBy({
//     left: scrollAmount,
//     behavior: "smooth",
//   });
// });

// Select elements
const headerImg = document.querySelector(".header-img");
const leftBtn = document.querySelector(".scroll-btn-left");
const rightBtn = document.querySelector(".scroll-btn-right");

// Scroll amount
const scrollAmount = headerImg.offsetWidth; // Scroll by the width of the container

// Total number of images
const totalImages = document.querySelectorAll(".header-img > div").length;

// Function to scroll right
function scrollRight() {
  if (
    headerImg.scrollLeft + scrollAmount >=
    headerImg.scrollWidth - headerImg.offsetWidth
  ) {
    // Reset to the first image
    headerImg.scrollTo({ left: 0, behavior: "smooth" });
  } else {
    // Scroll right
    headerImg.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }
}

// Function to scroll left
function scrollLeft() {
  if (headerImg.scrollLeft === 0) {
    // Jump to the last image
    headerImg.scrollTo({ left: headerImg.scrollWidth, behavior: "smooth" });
  } else {
    // Scroll left
    headerImg.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  }
}

// Add event listeners for buttons
leftBtn.addEventListener("click", scrollLeft);
rightBtn.addEventListener("click", scrollRight);

// Automatic scrolling
let autoScroll = setInterval(scrollRight, 3000); // Change image every 3 seconds

// Pause on mouse hover and resume on mouse leave
headerImg.addEventListener("mouseover", () => clearInterval(autoScroll));
headerImg.addEventListener("mouseleave", () => {
  autoScroll = setInterval(scrollRight, 3000);
});
