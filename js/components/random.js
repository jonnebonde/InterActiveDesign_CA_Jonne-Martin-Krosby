import { productArray } from "../products/productlist.js"

// Shuffle array
let shuffled = productArray.sort(() => 0.5 - Math.random());

// Get sub-array of first n elements after shuffled
let selected = shuffled.slice(0, 4);

const popularProductsContainer = document.querySelector(".random-products-container")

selected.forEach(function(random) {

    popularProductsContainer.innerHTML +=
    `<div class="random-product" >
        <a href="details.html?id=${random.id}&name=${random.name}" data-product="${random.id}">
            <h2>${random.name}</h2>
        </a>
            <p>${random.description}</p>
            <div style="background-image: url(${random.image})" class="random-product-image"></div>
            <div class="product-price">Price: ${random.price}</div>
            <a href="details.html?id=${random.id}&name=${random.name}" data-product="${random.id}" class="random-product-button">Info</a>
        </div>
        `
})


console.log(selected)