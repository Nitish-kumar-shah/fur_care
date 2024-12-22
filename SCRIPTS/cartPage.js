import { cart } from "./data/cart.js";
import { products } from "./data/productData.js";
import { formatCurrency } from "./data/utils.js";

let cartPageHTML;

cart.forEach((cartItem) => {
  const productId = cartItem.productId;

  let matchingProduct;

  products.forEach((prod) => {
    if (prod.id === productId) {
      matchingProduct = prod;
    }
  });

  cartPageHTML += `
    <div class="cart-item-container">
        <div class="delivery-date">Delivery date: Friday, December 20</div>
        <div class="cart-item-details-grid">
            <img
            class="product-image"
            src="${matchingProduct.image}"
            width=""
            />
            <div class="cart-item-details">
            <div class="product-name">${matchingProduct.name}</div>
            <div class="product-price">$${formatCurrency(
              matchingProduct.priceCents
            )}</div>
            <div class="product-quantity">
                <span> Quantity: <span class="quantity-lable">${
                  cartItem.quantity
                }</span> </span>
                <span class="update-quantity-link link-primary">
                Update
                </span>
                <span class="delete-quantity-link link-primary">
                Delete
                </span>
            </div>
            </div>

            <div class="delivery-options">
            <div class="delivery-options-title">
                Choose a delivery option:
            </div>
            <div class="delivery-option">
                <input
                type="radio"
                checked
                class="delivery-option-input"
                name="delivery-option-${matchingProduct.id}"
                />
                <div>
                <div class="delivery-option-date">Tuesday, June 21</div>
                <div class="delivery-option-price">FREE Shipping</div>
                </div>
            </div>
            <div class="delivery-option">
                <input
                type="radio"
                class="delivery-option-input"
                name="delivery-option-${matchingProduct.id}"
                />
                <div>
                <div class="delivery-option-date">Wednesday, June 15</div>
                <div class="delivery-option-price">$4.99 - Shipping</div>
                </div>
            </div>
            <div class="delivery-option">
                <input
                type="radio"
                class="delivery-option-input"
                name="delivery-option-${matchingProduct.id}"
                />
                <div>
                <div class="delivery-option-date">Monday, June 13</div>
                <div class="delivery-option-price">$9.99 - Shipping</div>
                </div>
            </div>
            </div>
        </div>
        </div>
    `;
});

document.querySelector(".js-order-summary").innerHTML = cartPageHTML;