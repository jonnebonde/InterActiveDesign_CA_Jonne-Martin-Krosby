const messageContainer = document.querySelector(".message-container")
const messages = document.querySelector(".messages");
const messageLink = document.querySelector(".message-link");
const viewCartNow = `<a href="cart.html">View cart now</a>`;

function errorMessage(message = "ops! something went wrong") {
  return `<div class="error">${message}</div>`;
}


function messageAddedToCart(itemToShow) {

  const addedToCartMessage = `${itemToShow.name} has been added to cart`;

  if (messageContainer.style.display === "none") {
    messageContainer.style.display = "block";
    messageContainer.style.backgroundColor = "#7C9A3C";
    messages.innerHTML = addedToCartMessage;
    messageLink.innerHTML = viewCartNow;
    setTimeout(function () {
      messageContainer.style.display = "none";
      messages.innerHTML = ""
    }, 2000)
  }
}

function messageChooseSize() {

  if (messageContainer.style.display === "none") {
    messageContainer.style.display = "block";
    messageContainer.style.backgroundColor = "#D96C75";
    messages.innerHTML = `Please choose a size`;
    messageLink.innerHTML = "";
    setTimeout(function () {
      messageContainer.style.display = "none";
      messages.innerHTML = ""
    }, 2000)
  }
}

function messageChooseColor() {

  if (messageContainer.style.display === "none") {
    messageContainer.style.display = "block";
    messageContainer.style.backgroundColor = "#D96C75";
    messages.innerHTML = `Please choose a color`;
    messageLink.innerHTML = "";
    setTimeout(function () {
      messageContainer.style.display = "none";
      messages.innerHTML = ""
    }, 2000)
  }
}

function messageChooseColorAndSize() {

  if (messageContainer.style.display === "none") {
    messageContainer.style.display = "block";
    messageContainer.style.backgroundColor = "#D96C75";
    messages.innerHTML = `Please choose a color and a size`;
    messageLink.innerHTML = "";
    setTimeout(function () {
      messageContainer.style.display = "none";
      messages.innerHTML = ""
    }, 2000)
  }
}