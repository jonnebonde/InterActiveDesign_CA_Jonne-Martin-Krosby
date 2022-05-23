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

        console.log(total)
    })


}
checkout()