export const cart = [];

export function addToCart(productID) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productID === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  const quantitySelector = document.querySelector(
    `.js-quantity-selector-${productID}`
  );

  const quantity = Number(quantitySelector.value);

  if (matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    cart.push({
      productId: productID,
      quantity: quantity,
    });
  }
}
