//nav

const openNav = document.querySelector(".toggle-menu");
const closeNav = document.querySelector(".close-menu");
const nav = document.querySelector(".navbar");

openNav.addEventListener("click", () => {
  nav.classList.add("nav-active");
});

closeNav.addEventListener("click", () => {
  nav.classList.remove("nav-active");
});

//amount in cart
let amount = 0;
const displayAmount = document.querySelector(".amount-display");
const add = document.querySelector(".plus");
const minus = document.querySelector(".minus");
//increase cart amount
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
  updateCart();
});

//show cart content
const cartOpen = document.querySelector(".cart");
cartOpen.addEventListener("click", () => {
  const cartItem = document.querySelector(".cart-item");
  cartItem.classList.toggle("show-cart");
  showCartContent();
});

//add item to cart
const addToCart = document.querySelector(".add-cart");
addToCart.addEventListener("click", () => {
  updateCart();
});

//update cart amount
function updateCart() {
  const total = document.querySelector(".total");
  const quantity = document.querySelector(".bottom-text span");
  const cartAmount = document.querySelector(".cart span");
  if (amount > 0) {
    cartAmount.textContent = amount;
    quantity.textContent = amount;
    total.textContent = `$${(amount * 125).toFixed(2)}`;
    cartAmount.style.display = "block";
  } else {
    cartAmount.style.display = "none";
  }
  showCartContent();
}

// show if cart is empty or not
function showCartContent() {
  const cartFull = document.querySelector(".cart-full");
  const cartEmpty = document.querySelector(".empty-cart");
  if (amount > 0) {
    cartEmpty.style.display = "none";
    cartFull.style.display = "flex";
  } else {
    cartEmpty.style.display = "block";
    cartFull.style.display = "none";
  }
}

//delete item in cart
const deleteBtn = document.querySelector(".delete-btn");
deleteBtn.addEventListener("click", deleteItem);
function deleteItem() {
  amount = 0;
}
//modal
const modal = document.querySelector(".modal-container");
//open modal
const openModal = document.querySelectorAll(".thumbnail");
openModal.forEach((btn) => {
  btn.addEventListener("click", () => {
    openModal.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");
    modal.classList.add("show-modal");
  });
});

//close modal
const closeModal = document.querySelector(".close-btn");
closeModal.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});

let product = 0;
const products = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg"
];
const slide = document.querySelector(".modal-img");
const nextBtn = document.querySelectorAll(".next-btn");
const prevBtn = document.querySelectorAll(".prev-btn");
nextBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    product++;
    if (product >= products.length) {
      return;
    } else {
      slide.src = products[product];
    }
    console.log(product);
  });
});
prevBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    product--;
    if (product < 0) {
      return;
    } else {
      slide.src = products[product];
    }
    console.log(product);
  });
});
