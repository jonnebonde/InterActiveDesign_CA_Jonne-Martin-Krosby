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


function sortedProductsHTML() {
    filteredProductArray.forEach(function(product){
        createProductHtml(product)
    });
}

function allProductsHTML() {
    productArray.forEach(function(product){
        createProductHtml(product)
    });
}


function createProductHtml(product) {

    productsContainer.innerHTML += 
            `<div class="product" >
            <a class="product-button" href="details.html?id=${product.id}&name=${product.name}" data-product="${product.id}">
                <h2>${product.name}</h2>
            </a>
            <a class="product-button" href="details.html?id=${product.id}&name=${product.name}" data-product="${product.id}">
                <div style="background-image: url(${product.image})" class="product-image"></div>
            </a>
                <div class="product-price">Price: ${product.price}</div>
                <a  class="product-button" href="details.html?id=${product.id}&name=${product.name}" data-product="${product.id}">Details</a>
            </div>
            `
}
