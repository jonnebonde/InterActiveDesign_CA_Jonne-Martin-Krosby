import { productArray } from "../products/productlist.js"

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


