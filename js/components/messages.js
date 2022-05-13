const messages = document.querySelector(".messages");
const addedToCartMessage = "Item has been added to cart";
const increaseQuantityMessage = "item already in cart, increased quantity";

function messageAddedToCart() {

    if(messages.style.display === "none") {
        messages.style.display = "block";
        messages.style.background = "green"
        messages.innerHTML = addedToCartMessage
        setTimeout(function() {
            messages.innerHTML = ""
            messages.style.display = "none";
            
        }, 2000)
    }    
}

function messageincreasedQuantity() {
    if(messages.style.display === "none") {
        messages.style.display = "block";
        messages.style.background = "green"
        messages.innerHTML = increaseQuantityMessage
        setTimeout(function() {
            messages.innerHTML = ""
            messages.style.display = "none";
            
        }, 2000)
    }    
}