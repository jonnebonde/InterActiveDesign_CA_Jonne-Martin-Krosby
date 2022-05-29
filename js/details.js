import { productArray } from "./products/productlist.js";

const productDetails = document.querySelector(".details-container");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const details = params.get("id");
const itemToShow = productArray.find(item => item.id === details)


function pageTitle() {

    const pageTitleDetails = document.querySelector("title");

    pageTitleDetails.innerHTML = `Rainy Days | ${itemToShow.name}`
}
pageTitle()


function detailsHtml() {
    productDetails.innerHTML =
        `<div class="details">
            <div>
                <img src="${itemToShow.big_image}" aria-label="${itemToShow.name}" class="details-product-image">
            </div>
        <div class="details-info">
            <div>
            <h2>${itemToShow.name}</h2>
            <p>${itemToShow.long_description}</p>
            </div>
            <div class="details-product-price"><strong>Price:</strong> ${itemToShow.price}</div>
            <div>
                <label class="details-select-size-menu" for="select-size">Select Size
                    <select name="select-size" id="details-select-size" required="required">
                        <option value="">Choose a size</option>
                        <option value="XXLarge">XXLarge</option>
                        <option value="XLarge">XLarge</option>
                        <option value="Large">Large</option>
                        <option value="Medium">Medium</option>
                        <option value="Small">Small</option>
                        <option value="XSmall">XSmall</option>
                    </select>
            </div>
            <button class="details-product-button" data-product="${itemToShow.id}">Add to cart</button>
        </div>
    </div>
    `
}

detailsHtml()

const button = document.querySelector(".details-product-button");

button.onclick = function () {
    sizeFormActions()
}


function sizeFormActions() {

    const sizeValue = document.querySelector("select");
    let selectedSize = sizeValue.options[sizeValue.selectedIndex].value

    if (selectedSize) {
        increaseQuantityCart()
        cartQuantityTotal()

    } else {
        messageChooseSize()
    }

}

const messages = document.querySelector(".messages");
//Function for adding new items to cart.

function AddToCart() {
    const itemToAdd = productArray.find(item => item.id === event.target.dataset.product)
    cartArray.push(itemToAdd);
    updateCart(cartArray)
}


//add to cart function that checks the content of array, if duplicate add quantity.

function increaseQuantityCart() {

    const duplicateId = cartArray.findIndex((item) => item.id === event.target.dataset.product,);

    if (duplicateId !== -1 && cartArray[duplicateId].quantity !== 99) {
        cartArray[duplicateId].quantity++;
        updateCart(cartArray);
        messageAddedToCart(itemToShow)
    } else {
        AddToCart()
        messageAddedToCart(itemToShow)
    }
}

//updates items in cart/ local storage

function updateCart() {
    localStorage.setItem("cartList", JSON.stringify(cartArray))

};

// Shuffle products on productArray

let shuffled = productArray.sort(() => 0.5 - Math.random());

// get the random products frpm  ProductArray

let selected = shuffled.slice(0, 4);
const popularProductsContainer = document.querySelector(".random-products-container")

selected.forEach(function (product) {

    popularProductsContainer.innerHTML +=
    `<div class="product" >
            <a tabindex="-1" href="details.html?id=${product.id}&name=${product.name}" data-product="${product.id}">
                <h2>${product.name}</h2>
                <div style="background-image: url(${product.image})" aria-label="a ${product.gender} is wearing a ${product.name}" class="product-image"></div>
                <div class="product-info-text">
                    <span>${product.description}</span>
                    <span class="product-price">Price: ${product.price}</span>
                </div>
            </a>
                <a  class="product-button" href="details.html?id=${product.id}&name=${product.name}" data-product="${product.id}">Details</a>
            </div>
            `
})