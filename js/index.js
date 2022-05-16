

// click event for hamburger menu
const toggleButton = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const hideMenu = document.querySelector("main");


toggleButton.addEventListener("click", () => {
    toggleButton.classList.toggle("active");
    navMenu.classList.toggle("active");

})

hideMenu.addEventListener("click", () => {
    toggleButton.classList.remove("active");
    navMenu.classList.remove("active");

})


// cart item quantity and total price
let cartItems = JSON.parse(localStorage.getItem("cartList"));
const numberOfItemsInCart = document.querySelector(".show-cart");
let cartArray = cartItems || [];


function cartQuantityTotal() {
    console.log()
    let cartItemsQuantity = 0;
    let total = 0;
    for(let i = 0; i < cartArray.length; i++) {
        total += cartArray[i].price * cartArray[i].quantity;
        cartItemsQuantity += cartArray[i].quantity;
        numberOfItemsInCart.innerHTML = `<div class="cart-stats">
                                            <span>Cart: ${cartItemsQuantity}</span>
                                            <span> total: ${total}</span>
                                        </div>`;
    }
}
cartQuantityTotal()

