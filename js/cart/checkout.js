

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

const submitForm = document.getElementById("checkout-form");

const fullNameValid = document.querySelector(".full-name");
const fullNameInput = document.getElementById("full-name");
const fullNameError = document.getElementById("nameError")

const emailValid = document.querySelector(".email");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");

const addressValid = document.querySelector(".address");
const addressInput = document.getElementById("address");
const addressError = document.getElementById("addressError");

const cityValid = document.querySelector(".city");
const cityInput = document.getElementById("city");
const cityError = document.getElementById("cityError");

const countyValid = document.querySelector(".county");
const countyInput = document.getElementById("county");
const countyError = document.getElementById("")




function ValidateOrderInputs(event) {
    event.preventDefault();

    const fullName = checkLength(fullNameInput.value, 1);
    const email = validateEmail(emailInput.value);
    const address = checkLength(addressInput.value, 1)
    const city = checkLength(cityInput.value, 1)



    if(fullName) {
        nameError.style.display = "none";
        fullNameValid.style.color = "#7C9A3C";   
    } else {
        nameError.style.display = "block";
        fullNameValid.style.color = "black"; 
    }

    if(email) {
        emailError.style.display = "none";
        emailValid.style.color = "#7C9A3C";  
    } else {
        emailError.style.display = "block";
        emailValid.style.color = "black";
    }

    if(address) {
        addressError.style.display = "none";
        addressValid.style.color = "#7C9A3C";
    } else {
        addressError.style.display = "block";
        addressValid.style.color = "black";
    }

    if(city) {
        cityError.style.display = "none";
        cityValid.style.color = "#7C9A3C";  
    } else {
        cityError.style.display = "block";
        cityValid.style.color = "black";
    }




}

submitForm.addEventListener("submit", ValidateOrderInputs);


function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } 
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}



//modal event for submitted form

const submitOrder = document.querySelector(".checkout-submit button");
const submitModal = document.querySelector(".checkout-modal");
const submitModalContent = document.querySelector(".checkout-modal-content")
const submitOrderForm = document.getElementById("checkout-form");


console.log(submitOrder.value)



/* submitOrder.addEventListener("click", function(e) {
   
    submitModal.style.display = "flex";
    submitOrderModalContent()
    
}) */


function submitOrderModalContent () {
    
    submitModalContent.innerHTML = 
    `<h1>Thanks for your purchase</h1>
    <p>A confirmation of your order is sent to your email</p>
    <span>${inputVauleEmail.value}</span>
    <a class="modal-link" href="shop.html">Back to shop</a>`

}




