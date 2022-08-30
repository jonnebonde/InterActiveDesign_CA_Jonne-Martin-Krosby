const baseUrl = "https://jonnekrosby.site/wp-json/wc/v3/products";
const apiKey = "?consumer_key=ck_03cf65b3b05863487398cfc21cbd3a1f271827db&consumer_secret=cs_8c58b9ba531eaf6f00dfb9c07ed3002b7044ee0d";
const apiUrl = baseUrl + apiKey;

async function getProducts() {

    try {
        const response = await fetch(apiUrl);
        const products = await response.json();
        apiResult(products)
    }
    catch(error) {
        console.log("something went wrong fetching api");
    }


}

getProducts()

function apiResult(product) {

    console.log(product)
}

