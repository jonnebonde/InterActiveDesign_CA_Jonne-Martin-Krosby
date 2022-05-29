const formSuccess = document.querySelector(".form_success");
const form = document.getElementById("contactForm");

const nameValid = document.querySelector(".name");
const nameInput = document.getElementById("name");
const nameError = document.getElementById("nameError");

const subjectValid = document.querySelector(".subject");
const subjectInput = document.getElementById("subject");
const subjectError = document.getElementById("subjectError");

const emailValid = document.querySelector(".email");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");

const writeValid = document.querySelector(".write-to-us");
const writeInput = document.getElementById("write-to-us");
const writeError = document.getElementById("writeToUsError");

let successMessage = false;

function validateInputs(event) {
    event.preventDefault();

    const name = checkLength(nameInput.value, 0);
    const subject = checkValue(subjectInput.value);
    const email = validateEmail(emailInput.value);
    const writeToUs = checkLength(writeInput.value, 10);

    if (name) {
        nameError.style.display = "none";
        nameValid.style.color = "green";
    } else {
        nameError.style.display = "block";
        nameValid.style.color = "black";
    }

    if (subject) {
        subjectError.style.display = "none";
        subjectValid.style.color = "green";
    } else {
        subjectError.style.display = "block";
        subjectValid.style.color = "black";
    }

    if (email) {
        emailError.style.display = "none";
        emailValid.style.color = "green";
    } else {
        emailError.style.display = "block";
        emailValid.style.color = "black";
    }

    if (writeToUs) {
        writeError.style.display = "none";
        writeValid.style.color = "green";
    } else {
        writeError.style.display = "block";
        writeValid.style.color = "black";
    }

    if (name && subject && email && writeToUs) {
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

function checkValue(value) {
    if (!value) {
        return false
    } else {
        return true
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

function formSubmitSuccesfull(e) {
    if (e) {
        formSuccess.style.display = "block"
        formSuccess.innerHTML = `<div>Thank u ${nameInput.value}</div>
                                <div>We will contact u within 24 hours</div>
                                <div>on ${emailInput.value}</div>`;
    } else {
        formSuccess.style.visibility = "hidden";
        formSuccess.innerHTML = "";
    }
}