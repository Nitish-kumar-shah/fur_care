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

const products = [
  {
    image: "/IMAGES/dp-cat2.webp",
    name: "This is Good product",
    rating: {
      stars: 4.5,
      conut: 87,
    },
    priceCents: 1098,
  },
  {
    image: "/IMAGES/dog-bg.jpg",
    name: " hola amigo jfdjkfd djfdjfdf jdkjfdf dkjfdfjd jksdjfdf kdjfd",
    rating: {
      stars: 3,
      conut: 98,
    },
    priceCents: 1087,
  },
];

let productsHTML = "";

products.forEach((product) => {
  productsHTML += `
            <div class="products-container">
            <div class="product-img-container">
              <img class="product-image" alt="" src="${product.image}" />
            </div>
            <div class="product-name limit-text-to-2-lines">
              ${product.name}
            </div>
            <div class="product-rating-container">
              <img
                class="product-rating-stars"
                src="/IMAGES/raiting/rating-${product.rating.stars * 10}.png"
              />
              <div class="product-rating-count link-primary">${
                product.rating.conut
              }</div>
            </div>
            <div class="product-price">$${(product.priceCents / 100).toFixed(
              2
            )}</div>
            <div class="product-quantity-container">
              <select>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
            <div class="product-spacer"></div>
            <div class="add-to-cart">
              <img class="" src="" />
              Added
            </div>
            <button class="add-to-cart-btn button-primary">Add to cart</button>
          </div>
  `;
});

document.querySelector(".js-product-grid").innerHTML = productsHTML;
