const formSuccess = document.querySelector(".form_success");
const form = document.getElementById("contactForm");

const nameValid = document.querySelector(".name");
const nameInput = document.getElementById("name");
const nameError = document.getElementById("nameError");

const addressValid = document.querySelector(".address");
const addressInput = document.getElementById("address");
const addressError = document.getElementById("addressError");

const emailValid = document.querySelector(".email");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");

const subjectValid = document.querySelector(".subject");
const subjectInput = document.getElementById("subject");
const subjectError = document.getElementById("subjectError");

let successMessage = false;
formSuccess.style.visibility = "hidden";


function validateInputs(event) {
    event.preventDefault();

    const name = checkLength(nameInput.value, 0);
    const address = checkLength(addressInput.value, 25);
    const email = validateEmail(emailInput.value);
    const subject = checkLength(subjectInput.value, 10);
    
    if(name) {
        nameError.style.display = "none";
        nameValid.style.color = "green";   
    } else {
        nameError.style.display = "block";
        nameValid.style.color = "black"; 
    }

    if(address) {
        addressError.style.display = "none";
        addressValid.style.color = "green";   
    } else {
        addressError.style.display = "block";
        addressValid.style.color = "black";  
    }

    if(email) {
        emailError.style.display = "none";
        emailValid.style.color = "green";  
    } else {
        emailError.style.display = "block";
        emailValid.style.color = "black";
    }

    if(subject) {
        subjectError.style.display = "none";
        subjectValid.style.color = "green";   
    } else {
        subjectError.style.display = "block";    
        subjectValid.style.color = "black";
    }

    if (name && address && email && subject) {
        successMessage = true;
        formSubmitSuccesfull(successMessage);
    }
    
}

form.addEventListener("submit", validateInputs);


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

function formSubmitSuccesfull(e) {
    if(e) {
        formSuccess.style.visibility="visible";
        formSuccess.innerHTML = nameInput.value + " " + "has passed the form validation";
    } else {
        formSuccess.style.visibility="hidden";
        formSuccess.innerHTML = "";
    }
}