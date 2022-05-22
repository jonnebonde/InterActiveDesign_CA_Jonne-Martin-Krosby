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


//change background according to gender or no gender choosen from landingpage

function changeBackground() {
    
    if((details === "man") || (details === "woman") || (!details)) {

        if (details === "man") {
            backgroundImgShop.style.backgroundImage = "url('./images/men_img.jpg')"
            backgroundImgShop.setAttribute("aria-label", "picture of a man on a mountain")
        }

        if (details === "woman") {
            backgroundImgShop.style.backgroundImage = "url('./images/women_img.jpg')"
            backgroundImgShop.setAttribute("aria-label", "picture of a woman on a mountain")
        }

        if(!details ) {
            backgroundImgShop.style.backgroundImage = "url('./images/main_img.jpg')"
            backgroundImgShop.setAttribute("aria-label", "picture of a man on a mountain")
        }

    }

}
changeBackground()



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


const filterOpenMenu = document.querySelector(".filter-menu-open");
const filterCloseMenu = document.querySelector(".filter-close-btn");
const filterSideMenu = document.querySelector(".filter-container-all");
const filterContainer = document.querySelector(".background-image-shop")

filterOpenMenu.addEventListener("click", () => {
    filterSideMenu.classList.toggle("active");
    filterCloseMenu.classList.toggle("active");
})


filterCloseMenu.addEventListener("click", () => {
    filterSideMenu.classList.remove("active");
    filterCloseMenu.classList.remove("active");
})


document.addEventListener("click", function(e) {
    if (!filterContainer.contains(e.target)) {
        filterSideMenu.classList.remove("active")
        filterCloseMenu.classList.remove("active");
    }
});


function sortedProductsHTML() {
    filteredProductArray.forEach(function(product){
        createProductHtml(product)
    });
}

function allProductsHTML() {

    let shuffledShop = productArray.sort(() => 0.5 - Math.random());

    shuffledShop.forEach(function(product){
        createProductHtml(product)
    });
}


function createProductHtml(product) {

    productsContainer.innerHTML += 
            `<div class="product" >
            <a href="details.html?id=${product.id}&name=${product.name}" data-product="${product.id}">
                <h2>${product.name}</h2>
            </a>
            <a href="details.html?id=${product.id}&name=${product.name}" data-product="${product.id}">
                <div style="background-image: url(${product.image})" aria-label="a ${product.gender} is wearing a ${product.name}" class="product-image"></div>
            </a>
                <span>${product.description}</span>
                <span class="product-price">Price: ${product.price}</span>
                <a  class="product-button" href="details.html?id=${product.id}&name=${product.name}" data-product="${product.id}">Details</a>
            </div>
            `
}


