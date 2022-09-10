
const baseUrl = "https://jonnekrosby.site/wp-json/wc/v3/products";
const apiKey = "?consumer_key=ck_d4557879258e9171c81b0b5a97746e037b2a79e3&consumer_secret=cs_def48d5d2ec05afdcb68e9f67eac0bc39af1aa23&category=44";
const apiUrl = baseUrl + apiKey;

const popularProductsContainer = document.querySelector(".popular-products-container");

async function getProducts() {

    try {
        const response = await fetch(apiUrl);
        const popular = await response.json();

        popularProducts(popular)
    }
    catch(error) {
        console.log("something went wrong fetching api");
        popularProductsContainer.innerHTML = "Something went wrong fetching products";
    }

}

getProducts()

function popularProducts(products) {
    
    popularProductsContainer.innerHTML = "";

    for(let i = 0; i < products.length; i++) {

        if(i === 4){
            break;
        }
        
        popularProductsContainer.innerHTML +=
        `<div class="product" >
        <a tabindex="-1" href="details.html?id=${products[i].id}&name=${products[i].name}" data-product="${products[i].id}">
            <h2>${products[i].name}</h2>
            <div style="background-image: url(${products[i].images[0].src})" aria-label="a ${products[i].tags[0].name} is wearing a ${products[i].name}" class="product-image"></div>
            <div class="product-info-text">
                <span>${products[i].short_description}</span>
                <span class="product-price">Price: ${products[i].price}</span>
            </div>
        </a>
            <a  class="product-button" href="details.html?id=${products[i].id}&name=${products[i].pname}" data-product="${products[i].id}">Details</a>
        </div>
                `
    }
};