// cart item quantity and total price

let cartItems = JSON.parse(localStorage.getItem("cartList"));
const numberOfItemsInCart = document.querySelector(".show-cart");
let cartArray = cartItems || [];

function cartQuantityTotal() {
  console.log()
  let cartItemsQuantity = 0;
  let total = 0;
  for (let i = 0; i < cartArray.length; i++) {
    total += cartArray[i].price * cartArray[i].quantity;
    cartItemsQuantity += cartArray[i].quantity;
    numberOfItemsInCart.innerHTML = `<div class="cart-stats">
                                            <span aria-label="Cart total item quantity"><i class="fa-solid fa-cart-shopping">${cartItemsQuantity}</i></span>
                                        </div>`;
  }
}
cartQuantityTotal()


//click event for searchfield

const searchBtn = document.querySelector(".submit-btn");
const searchBtnHamburger = document.querySelector(".submit-btn-hamburger");

searchBtn.addEventListener("click", searchCheck)
searchBtnHamburger.addEventListener("click", searchCheckHamburgermenu)

function searchCheck() {
  console.log("hi")
  let searchInput = document.getElementById("search").value.split(" ");
  console.log(searchBtnHamburger.value)
  if (searchInput == "") {

  } else {
    window.location = `shop.html?search=${searchInput}`
  }
}

function searchCheckHamburgermenu() {
  const searchInputHamburger = document.getElementById("hamburger-search").value.split(" ");
  console.log(searchBtnHamburger.value)
  if (searchInputHamburger == "") {
  } else {
    window.location = `shop.html?search=${searchInputHamburger}`
  }
}

/* const searchInput = document.getElementById("search");
const searchToggleBtn = document.querySelector(".submit-btn");
const searchContainer = document.querySelector(".search-input")

searchToggleBtn.addEventListener("click", () => {
    searchInput.classList.toggle("active")
})

searchInput.addEventListener("click", () => {
    searchInput.classList.add("active")
})


document.addEventListener("click", function (e) {
        if (!searchContainer.contains(e.target)) {
        searchInput.classList.remove("active")
    }
}); */


// Go back in history button

const backButton = document.querySelectorAll(".back-button");

backButton.forEach(function (back) {
  back.addEventListener("click", () => {
    history.back();
  });
});


// click event for hamburger menu

const toggleButton = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navContainer = document.querySelector(".navbar")

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.addEventListener("click", function (e) {
  if (!navContainer.contains(e.target)) {
    navMenu.classList.remove("active")
  }
});