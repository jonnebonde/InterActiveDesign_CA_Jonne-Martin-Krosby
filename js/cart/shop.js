import { productArray } from "../products/productlist.js";

const productsContainer = document.querySelector(".products");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const details = params.get("gender");
const backgroundImgShop = document.querySelector(".shop-img");


// filterfunction to sort products by gender
let filteredProductArray = productArray.filter(function(sortedArray) {
return sortedArray.gender === details;
});

console.log(details)
//if filterfunction has no value(null) all products are shown
function productArrayHTML() {

    if(details) {
        sortedProductsHTML()
        setBackgroundImgShop()
    } else {
        allProductsHTML()
        }
}
productArrayHTML()

function toggleActiveLink() {
    const manActive = document.querySelector(".man");
    const womanActive = document.querySelector(".woman");


    if(details === "man") {
        manActive.classList.add("active-page");
    }
    
    if(details === "woman") {
        womanActive.classList.add("active-page");
    }
}
toggleActiveLink()



function setBackgroundImgShop() {
    const womanImg = "url(/images/women_img.jpg)";
    const manImg = "url(/images/men_img.jpg)";

    if(details === "man") {
        backgroundImgShop.style.backgroundImage = womanImg;

    }
    if(details === "woman") {
        backgroundImgShop.style.backGroundImage = manImg;
    }
}


function sortedProductsHTML() {

    filteredProductArray.forEach(function(product){

        productsContainer.innerHTML += 
            `<div class="product" >
                <h2>${product.name}</h2>
                <div style="background-image: url(${product.image})" class="product-image"></div>
                <div class="product-price">Price: ${product.price}</div>
                <a  class="product-button" href="details.html?id=${product.id}&name=${product.name}" data-product="${product.id}">Details</a>
            </div>
            `
    });
}

function allProductsHTML() {
    productArray.forEach(function(product){

        productsContainer.innerHTML += 
            `<div class="product" >
                <h2>${product.name}</h2>
                <div style="background-image: url(${product.image})" class="product-image"></div>
                <div class="product-price">Price: ${product.price}</div>
                <a  class="product-button" href="details.html?id=${product.id}&name=${product.name}" data-product="${product.id}">Details</a>
            </div>
            `
    });
}
