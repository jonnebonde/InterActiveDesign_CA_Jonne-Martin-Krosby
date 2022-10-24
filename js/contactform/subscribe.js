const subscribeForm = document.getElementById("subscribe-container");
const subscribeInput = document.getElementById("email-subscribe");
const subscribeError = document.querySelector(".input-subscribe-error");


function validateSubscribe(event) {
  event.preventDefault();

  const subscribeEmail = validateSubscribeEmail(subscribeInput.value);

  if (subscribeEmail) {
    subscribeError.textContent = "Thanks for your subscription";
    subscribeError.style.color = "#7C9A3C";
    subscribeError.style.backgroundColor = "#ffff";
    setTimeout(function () {
      subscribeError.textContent = "Sign up for our newsletter";
      subscribeError.style.color = "#ffff";
      subscribeError.style.backgroundColor = "#0A3641";
    }, 3000)
  } else {
    subscribeError.textContent = "Not a valid email";
    subscribeError.style.color = "red";
    subscribeError.style.backgroundColor = "white";
    setTimeout(function () {
      subscribeError.textContent = "Sign up for our newsletter";
      subscribeError.style.color = "#ffff";
      subscribeError.style.backgroundColor = "#0A3641";
    }, 3000)
  }
}

subscribeForm.addEventListener("submit", validateSubscribe);


function validateSubscribeEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}