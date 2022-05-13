import { productArray } from "./products/productlist.js";
const productDetails = document.querySelector(".products");
//let cartItems = JSON.parse(localStorage.getItem("cartList"));
//const numberOfItemsInCart = document.querySelector(".show-cart");
//let cartArray = cartItems || [];

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const details = params.get("id");
const itemToShow = productArray.find(item => item.id === details)


function detailsHtml() {
    productDetails.innerHTML = 
    `<div class="product" href="details.html?${itemToShow.id}">
        <h2>${itemToShow.name}</h2>
        <p>${itemToShow.description}</p>
        <div style="background-image: url(${itemToShow.image})" class="product-image"></div>
        <div class="product-price">Price: ${itemToShow.price}</div>
        <button class="product-button" data-product="${itemToShow.id}">Add to cart</button>
    </div>
    `
}
detailsHtml()


const button = document.querySelector(".product-button");

button.onclick = function() {
    increaseQuantityCart()
    cartQuantityTotal()
}


//Function for adding new items to cart.
function AddToCart() {
    const itemToAdd = productArray.find(item => item.id === event.target.dataset.product)
    cartArray.push(itemToAdd);
    console.log("im adding to cart")
    updateCart(cartArray)
    //showCart(cartArray);
}


//add to cart function that checks the content of array, if duplicate add quantity.
function increaseQuantityCart() {

    const duplicateId = cartArray.findIndex((item) => item.id === event.target.dataset.product,);

    if(duplicateId !== -1 && cartArray[duplicateId].quantity !== 99) {
        cartArray[duplicateId].quantity++;
        updateCart(cartArray);
        messageincreasedQuantity()
    } else {
        AddToCart()
        messageAddedToCart()
    }
}

//updates items in cart/ local storage
function updateCart() {
    localStorage.setItem("cartList", JSON.stringify(cartArray))
    
};
