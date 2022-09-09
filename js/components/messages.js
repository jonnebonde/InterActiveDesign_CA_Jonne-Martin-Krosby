const messageContainer = document.querySelector(".message-container")
const messages = document.querySelector(".messages");
const messageLink = document.querySelector(".message-link");
const viewCartNow = `<a href="cart.html">View cart now</a>`;

function errorMessage(message = "ops! something went wrong") {
    return `<div class="error">${message}</div>`;
}


function messageAddedToCart(itemToShow) {

    console.log(itemToShow.name)
    const addedToCartMessage = `${itemToShow.name} has been added to cart`;
    if (messageContainer.style.display === "none") {
        messageContainer.style.display = "block";
        messageContainer.style.backgroundColor = "#7C9A3C";
        messages.innerHTML = addedToCartMessage;
        messageLink.innerHTML = viewCartNow;
        setTimeout(function () {
            messageContainer.style.display = "none";
            messages.innerHTML = ""
        }, 3000)
    }
}

function messageChooseSize() {

    if (messageContainer.style.display === "none") {
        messageContainer.style.display = "block";
        messageContainer.style.backgroundColor = "#D96C75";
        messages.innerHTML = `Please choose a size`;
        setTimeout(function () {
            messageContainer.style.display = "none";
            messages.innerHTML = ""
        }, 3000)
    }
}