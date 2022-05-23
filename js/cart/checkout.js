

// Checkout cart content loop, total counter and html
const checkoutCart = document.querySelector(".checkout-items");
const checkoutCartTotal = document.querySelector(".checkout-total");

function checkout() {
    let total = 0;

    cartArray.forEach(function(checkout) {
        total += checkout.price * checkout.quantity;

        checkoutCart.innerHTML +=
            `<div class="checkout-info">
                <span>${checkout.quantity}</span>
                <span>${checkout.name}</span>
                <span>${checkout.price * checkout.quantity} </span>
            </div>`

        checkoutCartTotal.innerHTML = 
            `<div>
                <span>Total</span>
                <span>${total}</span>
            </div>`

    })
}
checkout()


// click event for submit order button

const submitOrder = document.querySelector(".checkout-submit button");
const submitModal = document.querySelector(".checkout-modal");
const submitModalContent = document.querySelector(".checkout-modal-content")
const submitOrderForm = document.getElementById("checkout-form");
const inputVauleEmail = document.getElementById("email");

console.log(submitOrder.value)



submitOrder.addEventListener("click", function(e) {
   
    
   
    submitModal.style.display = "flex";
    submitOrderModalContent()
    
})


function submitOrderModalContent () {
    
    submitModalContent.innerHTML = 
    `<h1>Thanks for your purchase</h1>
    <p>A confirmation of your order is sent to your email</p>
    <span>${inputVauleEmail.value}</span>
    <a class="modal-link" href="shop.html">Back to shop</a>`

}

