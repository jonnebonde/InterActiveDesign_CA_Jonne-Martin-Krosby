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
                <div>
                    <label class="details-select-size-menu" for="select-size">Select Size
                        <select name="select-size" id="details-select-size" required="required">
                        </select>
                </div>
                <div>
                    <label class="details-select-size-menu" for="select-size">Select Color
                    <select name="select-color" id="details-select-color" required="required">
                    </select>
                </div>
                <div><span>InStock: ${product.stock_quantity}</span>
                </div>
                </div>
                <button class="details-product-button" data-product="${product.id}">Add to cart</button>
            </div>
        </div>`;
    
    function sizeSelection() {
            let dropdownSize = document.getElementById("details-select-size");

            dropdownSize.length = 0;
        
            let sizeOption = document.createElement("option");
            sizeOption.text = 'Choose size';
            sizeOption.value = "0" 
            
            dropdownSize.add(sizeOption);
            dropdownSize.selectIndex = "0";
        
            const sizeAttributes = product.attributes[1].options;
        
            for(let i = 0; i < sizeAttributes.length; i++){
                let sizes = sizeAttributes[i];
                console.log(sizes)
                optionSize = document.createElement("option");
                optionSize.text = sizes;
                optionSize.value = sizes;
                dropdownSize.add(optionSize);
        }
    }
sizeSelection()

function colorSelection() {
        
        let dropdownColor = document.getElementById("details-select-color");

        dropdownColor.length = 0;

        let coloroption = document.createElement("option");
        coloroption.text = `Choose color`;
        coloroption.value = "0";

        dropdownColor.add(coloroption);
        dropdownColor.selectIndex = "0";

        const colorAttributes = product.attributes[0].options;

        for(let i = 0; i < colorAttributes.length; i++) {
            let colors = colorAttributes[i];
            console.log(colors)
            optionColor = document.createElement("option");
            optionColor.text = colors;
            optionColor.value = colors;
            dropdownColor.add(optionColor)

        }
}
colorSelection()


    const button = document.querySelector(".details-product-button");

    button.onclick = function(event) {
    sizeFormActions(event)
}
        
function sizeFormActions(event) {
    const sizeValue = document.querySelector("#details-select-size");
    const colorValue = document.querySelector("#details-select-color")
    
    let selectedSize = sizeValue.options[sizeValue.selectedIndex].value;
    let selectedColor = colorValue.options[colorValue.selectedIndex].value;

    if(selectedColor === "0" && selectedSize === "0") {
        messageChooseColorAndSize()
    }
    if(selectedSize === "0") {
        messageChooseSize()
    }
    if(selectedColor === "0") {
        messageChooseColor()
    }
    else {
        increaseQuantityCart(selectedSize, selectedColor)
        cartQuantityTotal()
    }

}

let productIdentication = product.id;
let productId = productIdentication.toString()
//Function for adding new items to cart.

function AddToCart(itemToCheck) {
    console.log(itemToCheck)
    const itemToAdd = { id: itemToCheck.id, name: product.name, stock: product.stock_quantity, image: product.images[0].src, quantity: 1, price: product.price, description: product.short_description, size: itemToCheck.size, color: itemToCheck.color };
    cartArray.push(itemToAdd);
    updateCart(cartArray) 
}

console.log(product)
//add to cart function that checks the content of array, if duplicate add quantity.

function increaseQuantityCart(selectedSize, selectedColor) {

    const itemToCheck = { id: productId, color: selectedColor, size: selectedSize };
    const ItemInCart = cartArray.findIndex((item) => {
            return item.id === itemToCheck.id && item.color === itemToCheck.color && item.size === itemToCheck.size });
    if (ItemInCart !== -1 && ItemInCart.quantity !== 99) {
        cartArray[ItemInCart].quantity++;
        updateCart(cartArray);
        messageAddedToCart(product)
    } else {
        AddToCart(itemToCheck)
        messageAddedToCart(product)
    }
}

/* const items = [
	{ id: 1, color: "red", size: 10, quantity: 1 },
	{ id: 2, color: "blue", size: 10, quantity: 2 },
	{ id: 3, color: "blue", size: 11, quantity: 2 },
];

const newItem = { id: 2, color: "blue", size: 10 };

const existingItemIndex = items.findIndex((item) => {
	return item.id === newItem.id && item.color === newItem.color && item.size === newItem.size;
});

console.log(existingItemIndex);

if (existingItemIndex !== -1) {
	items[existingItemIndex].quantity++;
} else {
	items.push({ ...newItem, quantity: 1 });
}

console.log(items); */

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
        productDetails.innerHTML = "Something went wrong fetching products";
    }

}

getDetails()