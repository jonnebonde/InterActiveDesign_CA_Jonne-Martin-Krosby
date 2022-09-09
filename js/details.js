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
    console.log(sizeValue)
    console.log(colorValue)
    let selectedSize = sizeValue.options[sizeValue.selectedIndex].value;
    let selectedColor = colorValue.options[colorValue.selectedIndex].value;
    console.log(selectedSize)
    console.log(selectedColor)
    if (selectedSize !== "0" && selectedColor !== "0") {
        increaseQuantityCart(event, selectedSize)
        cartQuantityTotal()
    } 

    // lage message functions for de forskjellige kriteriene
    if(selectedSize === "0") {
        messageChooseSize()
    }
    if(selectedColor === "0") {
        messageChooseColor()
    }
    else {
        messageChooseColorAndSize()
    }

}

const messages = document.querySelector(".messages");

//Function for adding new items to cart.

function AddToCart(selectedSize) {
    let productIdentication = product.id;
    let productId = productIdentication.toString()
    const itemToAdd = { id: productId, name: product.name, image: product.images[0].src, quantity: 1, price: product.price, description: product.short_description, Size: selectedSize };
    cartArray.push(itemToAdd);
    updateCart(cartArray) 
}


//add to cart function that checks the content of array, if duplicate add quantity.

function increaseQuantityCart(event, selectedSize) {
    console.log(event.target.dataset.product)
    console.log(selectedSize)
    const duplicateId = cartArray.findIndex((item) => item.id == product.id);
    const duplicateSize = cartArray.findIndex((item) => item.Size == selectedSize)
    console.log(duplicateId)
    console.log(duplicateSize)

    if (duplicateId !== -1 && cartArray[duplicateId].quantity !== 99 && duplicateSize !== -1) {
        cartArray[duplicateId].quantity++;
        updateCart(cartArray);
        messageAddedToCart(product)
    } else {
        AddToCart(selectedSize)
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