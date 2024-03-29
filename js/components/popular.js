
const apiUrl = "https://www.jonnekrosby.site/rainy-days/wp-json/wc/v3/products";
const apiKey = "?consumer_key=ck_e070055b2e3d33ca2dabf2de3c38c5ccc67cd900&consumer_secret=cs_6d9350b73252e6db2598a63346d8c7d50227bd1e&category=23";
const baseUrl = apiUrl + apiKey;


const popularProductsContainer = document.querySelector(".popular-products-container");

async function getProducts() {

  try {
    const response = await fetch(baseUrl);
    const popular = await response.json();

    console.log(popular)
    popularProducts(popular)


  }

  catch (error) {
    console.log("something went wrong fetching api");
    popularProductsContainer.innerHTML = "Something went wrong fetching products";

  }

}

getProducts()

function popularProducts(products) {

  popularProductsContainer.innerHTML = "";

  for (let i = 0; i < products.length; i++) {

    if (i === 4) {
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
}


