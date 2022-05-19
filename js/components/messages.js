const messageContainer = document.querySelector(".message-container")
const messages = document.querySelector(".messages");
const messageLink = document.querySelector(".message-link");

const increaseQuantityMessage = "item already in cart, increased quantity";
const viewCartNow = `<a href="cart.html">View cart now</a>`;


function messageAddedToCart(itemToShow) {

    console.log(itemToShow.name)
    const addedToCartMessage = `${itemToShow.name} has been added to cart`;
    if(messageContainer.style.display === "none") {
        messageContainer.style.display = "block";
        messages.innerHTML = addedToCartMessage;
        messageLink.innerHTML = viewCartNow;
        setTimeout(function() {
            messageContainer.style.display = "none";
        }, 5000)
    }    
}

/* function messageincreasedQuantity() {

    if(messageContainer.style.display === "none") {
        messageContainer.style.display = "block";
        messages.innerHTML = increaseQuantityMessage;
        messageLink.innerHTML = viewCartNow;
        setTimeout(function() {
            messageContainer.style.display = "none";
        }, 5000)
    }    
} */