import { productArray } from "../products/productlist.js"

// Shuffle products on productArray
let shuffled = productArray.sort(() => 0.5 - Math.random());

// get the 3 random products frpm  ProductArray
let selected = shuffled.slice(0, 6);



const popularProductsContainer = document.querySelector(".random-products-container")

selected.forEach(function (random) {

    popularProductsContainer.innerHTML +=
        `
    <div class="random-product" >
    <a href="details.html?id=${random.id}&name=${random.name}&gender=${random.gender}" data-product="${random.id}">
        <h3>${random.name}</h3>
    
    <a href="details.html?id=${random.id}&name=${random.name}&gender=${random.gender}" data-product="${random.id}">
        <div style="background-image: url(${random.image})" aria-label="a ${random.gender} is wearing a ${random.name}" class="random-product-image"></div>
    </a>
             <span>${random.description}</span>
            <span class="product-price">Price: ${random.price}</span>
           
            <a href="details.html?id=${random.id}&name=${random.name}" data-product="${random.id}" class="random-product-button">Details</a>
        </div>
        `
})


