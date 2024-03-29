// Checkout cart content loop, total counter and html
const checkoutCart = document.querySelector(".checkout-items");
const checkoutCartTotal = document.querySelector(".checkout-total");

function checkoutCartItems() {
  let total = 0;

  cartArray.forEach(function (checkout) {
    total += checkout.price * checkout.quantity;

    checkoutCart.innerHTML += `<div class="checkout-info">
                <span>${checkout.quantity}</span>
                <span>${checkout.name}</span>
                <span>${checkout.price * checkout.quantity}</span>
            </div>`;

    checkoutCartTotal.innerHTML = `<div>
                <span>Total</span>
                <span>${total}</span>
            </div>`;
  });
}
checkoutCartItems();

// click event for submit order button

const submitForm = document.getElementById("checkout-form");

const fullNameValid = document.querySelector(".full-name");
const fullNameInput = document.getElementById("full-name");
const fullNameError = document.getElementById("nameError");

const emailValid = document.querySelector(".email");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");

const addressValid = document.querySelector(".address");
const addressInput = document.getElementById("address");
const addressError = document.getElementById("addressError");

const cityValid = document.querySelector(".city");
const cityInput = document.getElementById("city");
const cityError = document.getElementById("cityError");

const countryValid = document.querySelector(".country");
const countryInput = document.getElementById("country");
const countryError = document.getElementById("countryError");

const zipValid = document.querySelector(".zip-code");
const zipInput = document.getElementById("zip-code");
const zipError = document.getElementById("zipError");

const cardNameValid = document.querySelector(".card-name");
const cardNameInput = document.getElementById("card-name");
const cardNameError = document.getElementById("card-nameError");

const cardNumberValid = document.querySelector(".card-number");
const cardNumberInput = document.getElementById("card-number");
const cardNumberError = document.getElementById("card-numberError");

const expDateValid = document.querySelector(".exp-date");
const expDateInput = document.getElementById("exp-date");
const expDateError = document.getElementById("expdateError");

const expYearValid = document.querySelector(".exp-year");
const expYearInput = document.getElementById("exp-year");
const expYearError = document.getElementById("expyearError");

const cvvValid = document.querySelector(".cvv");
const cvvInput = document.getElementById("cvv");
const cvvError = document.getElementById("cvvError");

let personalInfo = false;
let cardInfo = false;

function ValidatePersonal(event) {
  event.preventDefault();

  const fullName = checkLength(fullNameInput.value, 7);
  const email = validateEmail(emailInput.value);
  const address = checkLength(addressInput.value, 9);
  const city = checkLength(cityInput.value, 1);
  const country = checkLength(countryInput.value, 1);
  const zip = checkLength(zipInput.value, 1);

  if (zip) {
    zipError.style.display = "none";
    zipValid.style.color = "#7C9A3C";
  } else {
    zipError.style.display = "block";
    zipValid.style.color = "black";
  }

  if (country) {
    countryError.style.display = "none";
    countryValid.style.color = "#7C9A3C";
  } else {
    countryError.style.display = "block";
    countryValid.style.color = "black";
  }

  if (fullName) {
    nameError.style.display = "none";
    fullNameValid.style.color = "#7C9A3C";
  } else {
    nameError.style.display = "block";
    fullNameValid.style.color = "black";
  }

  if (email) {
    emailError.style.display = "none";
    emailValid.style.color = "#7C9A3C";
  } else {
    emailError.style.display = "block";
    emailValid.style.color = "black";
  }

  if (address) {
    addressError.style.display = "none";
    addressValid.style.color = "#7C9A3C";
  } else {
    addressError.style.display = "block";
    addressValid.style.color = "black";
  }

  if (city) {
    cityError.style.display = "none";
    cityValid.style.color = "#7C9A3C";
  } else {
    cityError.style.display = "block";
    cityValid.style.color = "black";
  }

  if (fullName && email && address && city && country && zip) {
    personalInfo = true;
    checkOrderForm(personalInfo);
  }
}

function validateCardInfo(event) {
  event.preventDefault();

  const cardName = checkLength(cardNameInput.value, 7);
  const cardNumber = checkLength(cardNumberInput.value, 1);
  const expDate = checkLength(expDateInput.value, 1);
  const expYear = checkLength(expYearInput.value, 1);
  const cvv = checkLength(cvvInput.value, 1);

  if (cvv) {
    cvvError.style.display = "none";
    cvvValid.style.color = "#7C9A3C";
  } else {
    cvvError.style.display = "block";
    cvvValid.style.color = "black";
  }

  if (expYear) {
    expYearError.style.display = "none";
    expYearValid.style.color = "#7C9A3C";
  } else {
    expYearError.style.display = "block";
    expYearValid.style.color = "black";
  }

  if (expDate) {
    expDateError.style.display = "none";
    expDateValid.style.color = "#7C9A3C";
  } else {
    expDateError.style.display = "block";
    expDateValid.style.color = "black";
  }

  if (cardNumber) {
    cardNumberError.style.display = "none";
    cardNumberValid.style.color = "#7C9A3C";
  } else {
    cardNumberError.style.display = "block";
    cardNumberValid.style.color = "black";
  }

  if (cardName) {
    cardNameError.style.display = "none";
    cardNameValid.style.color = "#7C9A3C";
  } else {
    cardNameError.style.display = "block";
    cardNameValid.style.color = "black";
  }

  if (cardName && cardNumber && expDate && expYear && cvv) {
    cardInfo = true;
    checkOrderForm(cardInfo);
  }
}

function checkOrderForm() {
  if (personalInfo === true && cardInfo === true) {
    submitOrderModalContent();
  }
}

submitForm.addEventListener("submit", ValidatePersonal);
submitForm.addEventListener("submit", validateCardInfo);

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
const submitModalContent = document.querySelector(".checkout-modal-content");
const submitOrderForm = document.getElementById("checkout-form");

function submitOrderModalContent() {
  const footer = document.querySelector("footer");
  localStorage.removeItem("cartList");
  footer.style.display = "none";
  submitModal.style.display = "flex";
  submitModalContent.innerHTML = `<h1>Thanks for your purchase</h1>
        <p>A confirmation of your order is sent to your email</p>
        <span>${emailInput.value}</span>
        <a class="modal-link" href="shop.html">Back to shop</a>`;
}
