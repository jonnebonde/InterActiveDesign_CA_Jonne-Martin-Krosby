const productDetails = document.querySelector(".details-container");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://jonnekrosby.site/wp-json/wc/v3/products/" + id + "?consumer_key=ck_d4557879258e9171c81b0b5a97746e037b2a79e3&consumer_secret=cs_def48d5d2ec05afdcb68e9f67eac0bc39af1aa23";


async function getDetails() {

    try {
        const response = await fetch(url);
        const product = await response.json();
        
        productDetails.innerHTML =
        `<div class="details">
                <div>
                    <img src="${product.images[1].src}" aria-label="${product.name}" class="details-product-image">
                </div>
            <div class="details-info">
                <div>
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                </div>
                <div class="details-product-price"><strong>Price:</strong> ${product.price}</div>
                <div>
                    <label class="details-select-size-menu" for="select-size">Select Size
                        <select name="select-size" id="details-select-size" required="required">
                            <option value="">Choose a size</option>
                            <option value="XXLarge">XXLarge</option>
                            <option value="XLarge">XLarge</option>
                            <option value="Large">Large</option>
                            <option value="Medium">Medium</option>
                            <option value="Small">Small</option>
                            <option value="XSmall">XSmall</option>
                        </select>
                </div>
                <button class="details-product-button" data-product="${product.id}">Add to cart</button>
            </div>
        </div>`;


    const button = document.querySelector(".details-product-button");
 

    button.onclick = function(event) {
    sizeFormActions(event)
        
}
        
function sizeFormActions(a) {

    const sizeValue = document.querySelector("select");
    let selectedSize = sizeValue.options[sizeValue.selectedIndex].value

    if (selectedSize) {
        increaseQuantityCart(a)
        cartQuantityTotal()

    } else {
        messageChooseSize()
    }

}

const messages = document.querySelector(".messages");

//Function for adding new items to cart.

function AddToCart(event) {
    const itemToAdd =  { id: product.id, name: product.name, image: product.images[0].src, quantity: 1, price: product.price, description: product.short_description };
    cartArray.push(itemToAdd);
    updateCart(cartArray) 
}


//add to cart function that checks the content of array, if duplicate add quantity.

function increaseQuantityCart(event) {
    console.log(event.target.dataset.product)
    const duplicateId = cartArray.findIndex((item) => item.id === product.id);
    console.log(duplicateId)

    if (duplicateId !== -1 && cartArray[duplicateId].quantity !== 99) {
        cartArray[duplicateId].quantity++;
        updateCart(cartArray);
        messageAddedToCart(product)
    } else {
        AddToCart(event)
        messageAddedToCart(product)
    }
}

//updates items in cart/ local storage

function updateCart() {
    localStorage.setItem("cartList", JSON.stringify(cartArray))

};

function pageTitle(product) {

    const pageTitleDetails = document.querySelector("title");

    pageTitleDetails.innerHTML = `Rainy Days | ${product.name}`
}
pageTitle(product)

}

    catch(error) {
        console.log("something went wrong fetching api");
    }

}

getDetails()




/* function detailsHtml(product) {
    productDetails.innerHTML =
        `<div class="details">
            <div>
                <img src="${product.images[1].src}" aria-label="${product.name}" class="details-product-image">
            </div>
        <div class="details-info">
            <div>
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            </div>
            <div class="details-product-price"><strong>Price:</strong> ${product.price}</div>
            <div>
                <label class="details-select-size-menu" for="select-size">Select Size
                    <select name="select-size" id="details-select-size" required="required">
                        <option value="">Choose a size</option>
                        <option value="XXLarge">XXLarge</option>
                        <option value="XLarge">XLarge</option>
                        <option value="Large">Large</option>
                        <option value="Medium">Medium</option>
                        <option value="Small">Small</option>
                        <option value="XSmall">XSmall</option>
                    </select>
            </div>
            <button class="details-product-button" data-product="${product.id}">Add to cart</button>
        </div>
    </div>
    `

    const button = document.querySelector(".details-product-button");

    button.onclick = function() {
    sizeFormActions()
}


} 
 */



/* 
function sizeFormActions() {

    const sizeValue = document.querySelector("select");
    let selectedSize = sizeValue.options[sizeValue.selectedIndex].value

    if (selectedSize) {
        increaseQuantityCart()
        cartQuantityTotal()

    } else {
        messageChooseSize()
    }

}

const messages = document.querySelector(".messages");


//Function for adding new items to cart.

function AddToCart() {
    const itemToAdd = productArray.find(item => item.id === event.target.dataset.product)
    cartArray.push(itemToAdd);
    updateCart(cartArray)
}


//add to cart function that checks the content of array, if duplicate add quantity.

function increaseQuantityCart() {

    const duplicateId = cartArray.findIndex((item) => item.id === event.target.dataset.product,);

    if (duplicateId !== -1 && cartArray[duplicateId].quantity !== 99) {
        cartArray[duplicateId].quantity++;
        updateCart(cartArray);
        messageAddedToCart(itemToShow)
    } else {
        AddToCart()
        messageAddedToCart(itemToShow)
    }
}

//updates items in cart/ local storage

function updateCart() {
    localStorage.setItem("cartList", JSON.stringify(cartArray))

}; */