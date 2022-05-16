import { productArray } from "../products/productlist.js";

const productsContainer = document.querySelector(".products");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const details = params.get("gender");


// filterfunction to sort products by gender
let filteredProductArray = productArray.filter(function(sortedArray) {
return sortedArray.gender === details;
});


//if filterfunction has no value(null) all products are shown
function productArrayHTML() {

    if(details) {
        sortedProductsHTML()
    } else {
        allProductsHTML()
        }
}
productArrayHTML()


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
