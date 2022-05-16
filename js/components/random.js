import { productArray } from "../products/productlist.js"

// Shuffle products on productArray
let shuffled = productArray.sort(() => 0.5 - Math.random());

// get the 3 random products frpm  ProductArray
let selected = shuffled.slice(0, 4);

const popularProductsContainer = document.querySelector(".random-products-container")

selected.forEach(function(random) {

    popularProductsContainer.innerHTML +=
    `<a href="details.html?id=${random.id}&name=${random.name}&gender=${random.gender}" data-product="${random.id}">
    <div class="random-product" >
            <h3>${random.name}</h3>
            <div style="background-image: url(${random.image})" class="random-product-image"></div>
            <p class="product-price">Price: ${random.price}</p>
            <a href="details.html?id=${random.id}&name=${random.name}" data-product="${random.id}" class="random-product-button">Details</a>
        </div>
        </a>
        `
})
