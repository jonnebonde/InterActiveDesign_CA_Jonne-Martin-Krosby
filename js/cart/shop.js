import { productArray } from "../products/productlist.js";

const productsContainer = document.querySelector(".products");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const details = params.get("gender");
const backgroundImgShop = document.querySelector(".background-image-shop");


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


//mediaquerie for backgroundimage on shop.html

const backgroundImage = window.matchMedia("(max-width: 800px)");

function toggleBackground(background) {
    

     if(background.matches) {
         backgroundImgShop.style.backgroundImage = "none";
     } else {
         changeBackground()
     }
}
backgroundImage.addListener(toggleBackground)

toggleBackground(backgroundImage)


//change background according to gender or no gender choosen from landingpage

function changeBackground() {
    
    if((details === "man") || (details === "woman") || (!details)) {

        if (details === "man") {
            backgroundImgShop.style.backgroundImage = "url('./images/men_img.jpg')"
        }

        if (details === "woman") {
            backgroundImgShop.style.backgroundImage = "url('./images/women_img.jpg')"
        }

        if(!details ) {
            backgroundImgShop.style.backgroundImage = "url('./images/main_img.jpg')"
        }

    }

}




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
                <span class="product-price">Price: ${product.price}</span>
                <a  class="product-button" href="details.html?id=${product.id}&name=${product.name}" data-product="${product.id}">Details</a>
            </div>
            `
}
