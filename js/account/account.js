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

const toggleFormButton = document.querySelector(".toggle-form button");

const signUpContainer = document.querySelector(".signup-container");
const loginContainer = document.querySelector(".login-container");


let accountStatus = JSON.parse(localStorage.getItem("account"))
let account = accountStatus || []

// toggle between signup and login form

toggleFormButton.addEventListener("click", () => {
    signUpContainer.classList.toggle("active");
    loginContainer.classList.toggle("active")
    
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
    }

}

accountLogin.addEventListener("submit", validateLogin)



// validation functions for forms
function comparePasswords(value, value) {
    if(value === value && value.length > 7) {
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

//



const formPage = document.querySelector(".account-form.container");
const accountPage = document.querySelector(".account-info");


console.log(account)
console.log(cartArray)
function hippi() {
    if(accountStatus[0] === 'logged in') {
        console.log("i did it")
    }
}
hippi()
