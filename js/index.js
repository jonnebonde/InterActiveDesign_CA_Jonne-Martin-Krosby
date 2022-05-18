//click event for searchfield

const searchInput = document.getElementById("search");
const searchToggleBtn = document.querySelector(".submit-btn");

searchToggleBtn.addEventListener("click", () => {
    searchInput.classList.toggle("active")
} )


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


// toggle filter menus

//size menu
const sizeToggle = document.getElementById("size");
const sizeList = document.querySelector(".size-list");
const sizeListClose = document.querySelectorAll(".size-list li")


sizeToggle.addEventListener("click", () => {
    sizeList.classList.toggle("active")
})

sizeListClose.forEach(function(sizeMenu){
    sizeMenu.onclick = function() {
        sizeList.classList.remove("active")
    }
})


//color menu
const colorToggle = document.getElementById("color");
const colorList = document.querySelector(".color-list");
const colorListClose = document.querySelectorAll(".color-list li")

colorToggle.addEventListener("click", () => {
    colorList.classList.toggle("active")
})

colorListClose.forEach(function(colorMenu){
    colorMenu.onclick = function() {
        colorList.classList.remove("active")
    }
})


//activity menu
const activityToggle = document.getElementById("activity");
const activityList = document.querySelector(".activity-list");
const activityListClose = document.querySelectorAll(".activity-list li");

activityToggle.addEventListener("click", () => {
    activityList.classList.toggle("active")
})

activityListClose.forEach(function(activityMenu){
    activityMenu.onclick = function() {
        activityList.classList.remove("active")
    }
})


//sortby menu
const











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
                                            <span>Total: ${total}</span>
                                        </div>`;
    }
}
cartQuantityTotal()

