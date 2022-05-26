import { productArray } from "../products/productlist.js";

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
    loginContainer.classList.toggle("active")


    if(signUpContainer.classList.contains("active")) {
        toggleFormButton.innerText = "Login";
        toggleFormText.innerText = "Have an account already?";
    } else {
        toggleFormButton.innerText = "Sign Up";
        toggleFormText.innerText = "Dont have a account yet?"
    } 
    
}) 


//validate signup form
function validateSignUp(event) {
    event.preventDefault();

    const email = validateEmail(emailInput.value);
    const password = checkLength(passwordInput.value, 7);
    const confirmPassword = comparePasswords(passwordInput.value, confirmPasswordInput.value)


    if(email) {
        emailError.style.display = "none";
        emailValid.style.color = "green";  
    } else {
        emailError.style.display = "block";
        emailValid.style.color = "black";
    }

    if(password) {
        passwordError.style.display = "none";
        passwordValid.style.color = "green";  
    } else {
        passwordError.style.display = "block";
        passwordValid.style.color = "black";
    }

    if(confirmPassword) {
        confirmPasswordError.style.display = "none";
        confirmPasswordValid.style.color = "green";  
    } else {
        confirmPasswordError.style.display = "block";
        confirmPasswordValid.style.color = "black";
    }

    if(email && password && confirmPassword) {
        console.log("success")
        account.push("logged in")
        localStorage.setItem("account", JSON.stringify(account))
        formPage.style.display = "none"
        accountPage.style.display = "flex"
        location.reload()
        
    }

}

accountSignUp.addEventListener("submit", validateSignUp)


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

    if(loginEmail) {
        loginEmailError.style.display = "none";
        loginEmailValid.style.color = "green";  
    } else {
        loginEmailError.style.display = "block";
        loginEmailValid.style.color = "black";
    }

    if(loginPassword) {
        loginPasswordError.style.display = "none";
        loginPasswordValid.style.color = "green";  
    } else {
        loginPasswordError.style.display = "block";
        loginPasswordValid.style.color = "black";
    }

    if(loginEmail && loginPassword) {
        account.push("logged in")
        localStorage.setItem("account", JSON.stringify(account))
        formPage.style.display = "none"
        accountPage.style.display = "flex"
        location.reload()
    }

}

accountLogin.addEventListener("submit", validateLogin)


// validation functions for forms
function comparePasswords(value, value1) {
    if(value === value1 && value1.length > 7) {
        return true
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
const accountMain = document.querySelector("main");


function checkAccountStatus() {
    if(accountStatus) {
        formPage.style.display = "none";
        accountPage.style.display = "flex";
        accountMain.classList.remove("account-main");    
    }

    if(!accountStatus) {
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

accountLogOut.addEventListener("click", logOutOfAccount)


// Shuffle products on productArray
let shuffled = productArray.sort(() => 0.5 - Math.random());

const myordersList = document.querySelector(".account-orders");

let myorders = shuffled.slice(0, 4);

myorders.forEach(function(myorder) {

    myordersList.innerHTML += `
        <div class="order-item">
        <a href="details.html?id=${myorder.id}&name=${myorder.name}&gender=${myorder.gender}" data-product="${myorder.id}">
        <img src="${myorder.image}">
        <span>${myorder.name}</span>
        <span>${myorder.price} £</span>
        </a>
        </div>
    `
})


console.log(productArray
    
    )