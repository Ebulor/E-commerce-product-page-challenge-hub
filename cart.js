//toggle cart
const toggleCart = document.querySelector(".cart");
const total = document.querySelector(".total");
const quantity = document.querySelector(".bottom-text span");
const displayAmount = document.querySelector(".amount-display");
const add = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const cartItem = document.querySelector(".cart span");
const addCartItems = document.querySelector(".add-cart");
const cartFull = document.querySelector(".cart-full");
const cartEmpty = document.querySelector(".empty-cart");
let amount = 0;

toggleCart.addEventListener("click", () => {
  const cartItem = document.querySelector(".cart-item");
  cartItem.classList.toggle("show-cart");
});

//increase cart items

add.addEventListener("click", () => {
  amount++;
  displayAmount.textContent = amount;
});
minus.addEventListener("click", () => {
  if (amount <= 0) {
    return;
  } else {
    amount--;
  }
  displayAmount.textContent = amount;
});

//add items to cart
addCartItems.addEventListener("click", () => {
  cartItem.style.display = "block";
  cartItem.textContent = amount;
  updateCart();
});

//update cart

function updateCart() {
  if (amount >= 1) {
    cartItem.textContent = amount;
    cartFull.style.display = "flex";
    quantity.textContent = amount;
    total.textContent = `$${(amount * 125).toFixed(2)}`;
    cartEmpty.style.display = "none";
  } else {
    cartFull.style.display = "none";
    cartEmpty.style.display = "block";
    cartItem.style.display = "none";
  }
}

//delete items in cart
const deleteBtn = document.querySelector(".delete-btn");
deleteBtn.addEventListener("click", () => {
  amount = 0;
  displayAmount.textContent = amount;
  cartItem.style.display = "none";
  updateCart();
});

updateCart();
