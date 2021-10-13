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
const openModal = document.querySelectorAll(".thumbnails .thumbnail");
openModal.forEach((btns, index) => {
  btns.addEventListener("click", (e) => {
    openModal.forEach((btns) => {
      btns.classList.remove("active");
    });
    btns.classList.add("active");

    modal.classList.add("show-modal");

    //show thumbnail pop-up
    const products = [
      "images/image-product-1.jpg",
      "images/image-product-2.jpg",
      "images/image-product-3.jpg",
      "images/image-product-4.jpg"
    ];
    const slide = document.querySelector(".modal-img");
    slide.src = products[index];

    //next and prev btn
    let product = 0;
    console.log(product);
    const nextBtn = document.querySelectorAll(".next-btn");
    const prevBtn = document.querySelectorAll(".prev-btn");
    nextBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        product++;
        if (product >= products.length) {
          product = products.length - 1;
          return;
        } else {
          slide.src = products[product];
          const next = btns.nextElementSibling;
          console.log(next);
        }
      });
    });
    prevBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        product--;
        if (product < 0) {
          product = 0;
          return;
        } else {
          slide.src = products[product];
        }
      });
    });
  });
});

//close modal
const closeModal = document.querySelector(".close-btn");
closeModal.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});

//update slide position
const popModal = document.querySelectorAll(".modal-thumbnails .thumbnail");
popModal.forEach((btns, index) => {
  btns.addEventListener("click", (e) => {
    popModal.forEach((btns) => {
      btns.classList.remove("active");
    });
    btns.classList.add("active");

    modal.classList.add("show-modal");

    //show thumbnail pop-up
    const products = [
      "images/image-product-1.jpg",
      "images/image-product-2.jpg",
      "images/image-product-3.jpg",
      "images/image-product-4.jpg"
    ];
    const slide = document.querySelector(".modal-img");
    slide.src = products[index];
  });
});
