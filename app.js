const nextBtn = document.querySelectorAll(".next-btn");
const prevBtn = document.querySelectorAll(".prev-btn");
const productImg = document.querySelector(".product-img");
const modalImg = document.querySelector(".modal-img img");
const closeBtn = document.querySelector(".close-btn");
const modalThumbnails = document.querySelectorAll(
  ".modal-thumbnails .thumbnail"
);
const modal = document.querySelector(".modal-container");
const thumbnails = document.querySelectorAll(".thumbnails .thumbnail");
let newIndex = 0;

const products = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg"
];

//move to next slide
nextBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (newIndex >= products.length - 1) {
      return;
    } else {
      newIndex++;
      productImg.src = products[newIndex];
      modalImg.src = products[newIndex];
    }
  });
});

//back to previous slide
prevBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (newIndex === 0) {
      return;
    } else {
      newIndex--;
      productImg.src = products[newIndex];
      modalImg.src = products[newIndex];
    }
  });
});

//lightbox thumbnails
modalThumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    modalThumbnails.forEach((thumbnail) => {
      thumbnail.classList.remove("active");
    });
    thumbnail.classList.add("active");

    productImg.src = products[index];
    modalImg.src = products[index];
    newIndex = index;
  });
});

//thumbnails
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    thumbnails.forEach((thumbnail) => {
      thumbnail.classList.remove("active");
    });
    thumbnail.classList.add("active");

    modal.classList.add("show-modal");
    modalImg.src = products[index];
    productImg.src = products[index];
    newIndex = index;
  });
});

//close modal
closeBtn.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});
