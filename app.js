const openNav = document.querySelector(".toggle-menu");
const closeNav = document.querySelector(".close-menu");
const nav = document.querySelector(".navbar");

openNav.addEventListener("click", ()=>{
  nav.classList.add("nav-active");
})

closeNav.addEventListener("click", ()=>{
  nav.classList.remove("nav-active");
})


//amount in cart
let amount = 0;
const displayAmount = document.querySelector(".amount-display");
const add = document.querySelector(".plus");
const minus = document.querySelector(".minus");
//increase cart amount
add.addEventListener("click", ()=>{
  amount++;
  displayAmount.textContent = amount;
  updateCart()  
})
minus.addEventListener("click", ()=>{
  if(amount <= 0){
    return;
  }
  else{
    amount--;
  }  
  displayAmount.textContent = amount;  
  updateCart()
})

//show cart content
const cartOpen = document.querySelector(".cart");
  cartOpen.addEventListener("click", ()=>{
    const cartItem = document.querySelector(".cart-item");
    cartItem.classList.toggle("show-cart");    
    showCartContent()
})

//update cart amount
function updateCart(){ 
  const total = document.querySelector(".total");  
  const quantity = document.querySelector(".bottom-text span");
  const cartAmount = document.querySelector(".cart span"); 
  if(amount > 0){
    cartAmount.textContent = amount; 
    quantity.textContent = amount;
    total.textContent = `$${(amount * 125).toFixed(2)}`;
    cartAmount.style.display = "block";     
  }
  else{
    cartAmount.style.display = "none";    
  }
  showCartContent();
  
}
function showCartContent(){
  const cartFull = document.querySelector(".cart-full");
  const cartEmpty = document.querySelector(".empty-cart");
  if(amount > 0){
    cartEmpty.style.display = "none"
    cartFull.style.display = "flex";
  }
  else{
    cartEmpty.style.display = "block"
    cartFull.style.display = "none";
  }
  
}
const deleteBtn = document.querySelector(".delete-btn");
deleteBtn.addEventListener("click", deleteItem);
function deleteItem(){  
  amount = 0;
}

