const subscribeForm = document.getElementById("subscribe-container");
const subscribeInput = document.getElementById("email-subscribe");
const subscribeError = document.querySelector(".input-subscribe-error");

console.log(subscribeError)


function validatesubscribe(event) {
    event.preventDefault();

    const subscribeEmail = validateSubscribe(subscribeInput.value);

    if(subscribeEmail) {
        subscribeError.textContent = "Thanks for your subscription";
        subscribeError.style.colore = "green";
        subscribeError.style.backgroundcolor = "white";
        setTimeout(function() {
            subscribeError.textContent = "Sign up";
            subscribeError.style.color = "white"
        }, 4000);
    } else {
        subscribeError.textContent = "Not a valid email";
        subscribeError.style.colore = "red";
        subscribeError.style.backgroundcolor = "white";
        setTimeout(function() {
            subscribeError.textContent = "Sign up";
            subscribeError.style.color = "white"
        },4000)
    }
}

subscribeForm.addEventListener("submit", validateSubscribe);



function validateSubscribe(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}