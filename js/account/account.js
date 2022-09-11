
const baseUrl = "https://jonnekrosby.site/wp-json/wc/v3/products";
const apiKey = "?consumer_key=ck_d4557879258e9171c81b0b5a97746e037b2a79e3&consumer_secret=cs_def48d5d2ec05afdcb68e9f67eac0bc39af1aa23";
const apiUrl = baseUrl + apiKey;

const popularProductsContainer = document.querySelector(".popular-products-container");
const myordersList = document.querySelector(".account-orders");
const loader = document.querySelector(".loader");

async function getProducts() {

    try {
        const response = await fetch(apiUrl);
        const myOrders = await response.json();

        
        for(let i = 0; i < myOrders.length; i++) {
            
            if(i === 4){
                break
            }

            loader.remove();
            myordersList.innerHTML += `
            <div class="order-item">
            <a href="details.html?id=${myOrders[i].id}&name=${myOrders[i].name}&gender=${myOrders[i].gender}" data-product="${myOrders[i].id}">
            <img src="${myOrders[i].images[1].src}">
            <span>${myOrders[i].name}</span>
            <span>${myOrders[i].price}</span>
            </a>
            </div>
        `
        }

    }

    catch(error) {
        console.log("something went wrong fetching api");
        myordersList.innerHTML = "Something went wrong fetching products";

    }

}

getProducts()

const accountSignUp = document.getElementById("account-signup");
const accountLogin = document.getElementById("account-login");

const emailValid = document.querySelector(".email");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");

const passwordValid = document.querySelector(".password");
const passwordInput = document.getElementById("password");
const passwordError = document.getElementById("passwordError");

const confirmPasswordValid = document.querySelector(".confirm-password");
const confirmPasswordInput = document.getElementById("confirm-password");
const confirmPasswordError = document.getElementById("confirmpasswordError");

const toggleFormText = document.querySelector(".toggle-form p");
const toggleFormButton = document.querySelector(".toggle-form button");

const signUpContainer = document.querySelector(".signup-container");
const loginContainer = document.querySelector(".login-container");

let accountStatus = JSON.parse(localStorage.getItem("account"))
let account = accountStatus || []

// toggle between signup and login form

toggleFormButton.addEventListener("click", () => {
    signUpContainer.classList.toggle("active");
    loginContainer.classList.toggle("active");


    if (signUpContainer.classList.contains("active")) {
        toggleFormButton.innerText = "Login";
        toggleFormText.innerText = "Have an account already?";
    } else {
        toggleFormButton.innerText = "Sign Up";
        toggleFormText.innerText = "Dont have a account yet?";
    }

})


//validate signup form
function validateSignUp(event) {
    event.preventDefault();

    const email = validateEmail(emailInput.value);
    const password = checkLength(passwordInput.value, 7);
    const confirmPassword = comparePasswords(passwordInput.value, confirmPasswordInput.value);

    if (email) {
        emailError.style.display = "none";
        emailValid.style.color = "green";
    } else {
        emailError.style.display = "block";
        emailValid.style.color = "black";
    }

    if (password) {
        passwordError.style.display = "none";
        passwordValid.style.color = "green";
    } else {
        passwordError.style.display = "block";
        passwordValid.style.color = "black";
    }

    if (confirmPassword) {
        confirmPasswordError.style.display = "none";
        confirmPasswordValid.style.color = "green";
    } else {
        confirmPasswordError.style.display = "block";
        confirmPasswordValid.style.color = "black";
    }

    if (email && password && confirmPassword) {
        account.push("logged in");
        localStorage.setItem("account", JSON.stringify(account));
        formPage.style.display = "none";
        accountPage.style.display = "flex";
        location.reload();

    }

}

accountSignUp.addEventListener("submit", validateSignUp);


//validate login form
const loginEmailValid = document.querySelector(".login-email");
const loginEmailInput = document.getElementById("login-email");
const loginEmailError = document.getElementById("login-emailError");

const loginPasswordValid = document.querySelector(".login-password");
const loginPasswordInput = document.getElementById("login-password");
const loginPasswordError = document.getElementById("login-passwordError");


function validateLogin(event) {
    event.preventDefault();

    const loginEmail = validateEmail(loginEmailInput.value);
    const loginPassword = checkLength(loginPasswordInput.value, 7);

    if (loginEmail) {
        loginEmailError.style.display = "none";
        loginEmailValid.style.color = "green";
    } else {
        loginEmailError.style.display = "block";
        loginEmailValid.style.color = "black";
    }

    if (loginPassword) {
        loginPasswordError.style.display = "none";
        loginPasswordValid.style.color = "green";
    } else {
        loginPasswordError.style.display = "block";
        loginPasswordValid.style.color = "black";
    }

    if (loginEmail && loginPassword) {
        account.push("logged in");
        localStorage.setItem("account", JSON.stringify(account));
        formPage.style.display = "none";
        accountPage.style.display = "flex";
        location.reload();
    }

}

accountLogin.addEventListener("submit", validateLogin);


// validation functions for forms

function comparePasswords(value, value1) {
    if (value === value1 && value1.length > 7) {
        return true;
    }
}


function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}


function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    }
}

// validate log status and actions accordingly

const formPage = document.querySelector(".account-form-container");
const accountPage = document.querySelector(".account-info-container");
const accountLogOut = document.querySelector(".log-out");

function checkAccountStatus() {
    if (accountStatus) {
        formPage.style.display = "none";
        accountPage.style.display = "flex";
    }

    if (!accountStatus) {
        formPage.style.display = "flex";
        accountPage.style.display = "none";
    }
}
checkAccountStatus()


function logOutOfAccount() {
    console.log("logged out")
    localStorage.removeItem("account");
    location.reload()
}

accountLogOut.addEventListener("click", logOutOfAccount);

// Terms and privacy events

const termsButton = document.getElementById("terms");
const termsModal = document.querySelector(".terms-modal")
const termsModalCloseButton = document.querySelector(".terms-modal-close")
const footer = document.querySelector("footer");
const toTopPageTerms = document.querySelector(".terms-totop-button");
const termsContainer = document.querySelector(".terms-container");


function termsAndPivacy() {
    termsModal.style.display = "flex";
    footer.style.display = "none"
}


function closeTermsModule() {
    termsModal.style.display = "none"
    footer.style.display = "flex"
}


function ToTopOffPage() {
    termsContainer.scroll(0,0)
}


termsModalCloseButton.addEventListener("click", closeTermsModule)
termsButton.addEventListener("click", termsAndPivacy)
toTopPageTerms.addEventListener("click", ToTopOffPage);