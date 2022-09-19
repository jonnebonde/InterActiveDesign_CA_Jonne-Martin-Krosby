const cartList = document.querySelector(".cart-list");
const cartContainer = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");

const deleteCart = document.querySelector(".delete-cart");
const emptyCartMessage = document.querySelector(".empty-cart-msg");
const hideCart = document.querySelector(".cart-container");

console.log(cartArray)
function showCart() {
    if (cartArray.length === 0) {
        emptyCartHtml()
    } else {
        hideCart.style.display = "flex"
        emptyCartMessage.style.display = "none"
        emptyCartMessage.innerHTML = ""
        cartList.innerHTML = "";
        let total = 0;
        cartItems.forEach(function (cartElement) {
            total += cartElement.price * cartElement.quantity;
            CreateCartHtml(cartElement)
        })
        totalContainer.innerHTML = `Total: ${total}`
    }

}
showCart()


function emptyCartHtml() {

    hideCart.style.display = "none"

    emptyCartMessage.innerHTML =
        `<span>Your cart is empty</span>
    <a href="shop.html">Go back to shop</a>`
}


// creates HTML for cart content.

function CreateCartHtml(cartElement) {
    console.log(cartElement)
    cartList.innerHTML +=
        `<div class="cart-item">
            <div class="cart-delete-item">
                <button class="delete-item-btn"><i class="fa-solid fa-trash-can" data-color="${cartElement.color}" data-stock="${cartElement.stock}" data-quantity="${cartElement.quantity}" data-size="${cartElement.size}" data-product="${cartElement.id}"></i></button>
            </div>
            <div class="cart-image">
                <img src="${cartElement.image}" alt="a ${cartElement.gender} wearing a ${cartElement.name}">
            </div>
            <div class="cart-name">
                <h2>${cartElement.name}</h2>
                <p>${cartElement.description}</p>
                <div class="cart-price-size-color-info">
                    <span>Price: ${cartElement.price}</span>
                <div class="cart-size-color-details">
                    <span>Size: ${cartElement.size}</span>
                    <span>Color: ${cartElement.color}</span>
                </div>
                </div>
            </div>
            <div class="cart-quantity">
                <button class="plus-btn" ><i class="fa-solid fa-plus" data-size="${cartElement.size}" data-stock="${cartElement.stock}" data-quantity="${cartElement.quantity}" data-color="${cartElement.color}" data-product="${cartElement.id}"></i></button>
                <span id="cart-quantity">${cartElement.quantity}</span>
                <button class="minus-btn" ><i class="fa-solid fa-minus" data-stock="${cartElement.stock}" data-quantity="${cartElement.quantity}" data-size="${cartElement.size}" data-color="${cartElement.color}" data-product="${cartElement.id}"></i></button>
            </div>
            <div class="cart-total">
                <span>${cartElement.price * cartElement.quantity}</span>
            </div>
        </div>`

    const increaseQuantity = document.querySelectorAll(".plus-btn");
    const decreaseQuantity = document.querySelectorAll(".minus-btn");
    const deleteItemFromCart = document.querySelectorAll(".delete-item-btn i");


    //click event for the + quantity button.

    increaseQuantity.forEach(function (plusButton) {
        plusButton.onclick = function (a) {
            cartArray.forEach(function (a) {
            })

            increaseQuantityCart(a)
            cartQuantityTotal()
        }
    })


    //click event for the - quantity button.
    decreaseQuantity.forEach(function (minusButton) {
        minusButton.onclick = function (b) {
            cartArray.forEach(function (b) {
            })

            decreaseQuantityCart(b)
            cartQuantityTotal()
        }
    })


    //click event for the delete item button
    deleteItemFromCart.forEach(function (deleteButton) {
        deleteButton.onclick = function (c) {
            cartArray.forEach(function (c) {
            })
            removeFromCart(c)
        }
    })
}


//function to remove items from cart.

function removeFromCart(event) {

    let color = event.target.dataset.color;
    let size = event.target.dataset.size;
    let itemId = event.target.dataset.product;
    let itemStock = event.target.dataset.stock;
    let itemQuantity = event.target.dataset.quantity;

    console.log(itemQuantity)

    const itemToCheck = { id: itemId, color: color, size: size, stock: itemStock, quantity: itemQuantity};

    const existingItem = cartArray.findIndex((item) => {
        return item.id === itemToCheck.id && item.color === itemToCheck.color && item.size === itemToCheck.size });

    console.log(duplicateId)
    if (existingItem !== -1) {
        console.log(duplicateId)
        cartArray.splice(duplicateId, 1);
        updateCart(cartArray)
        showCart(cartArray)
        location.reload()
    }
}


//add to cart function that checks the content of array, if duplicate add quantity.

function increaseQuantityCart(event) {

    let color = event.target.dataset.color;
    let size = event.target.dataset.size;
    let itemId = event.target.dataset.product;
    let itemStock = event.target.dataset.stock;
    let itemQuantity = event.target.dataset.quantity;

    console.log(itemQuantity)

    const itemToCheck = { id: itemId, color: color, size: size, stock: itemStock, quantity: itemQuantity};

    const existingItem = cartArray.findIndex((item) => {
        return item.id === itemToCheck.id && item.color === itemToCheck.color && item.size === itemToCheck.size });

    if (existingItem !== -1 && itemToCheck.quantity !== itemToCheck.stock) {
        cartArray[existingItem].quantity++;
        updateCart(cartArray);
        showCart(cartArray);
    } else {
        alert("No more in stock, contact support")
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

//Function to decrement quantity of products in the cart.

function decreaseQuantityCart(event) {

    let color = event.target.dataset.color;
    let size = event.target.dataset.size;
    let itemId = event.target.dataset.product;
    let itemStock = event.target.dataset.stock;
    let itemQuantity = event.target.dataset.quantity;

    console.log(itemQuantity)

    const itemToCheck = { id: itemId, color: color, size: size, stock: itemStock, quantity: itemQuantity};

    const existingItem = cartArray.findIndex((item) => {
        return item.id === itemToCheck.id && item.color === itemToCheck.color && item.size === itemToCheck.size });
    
    if (existingItem !== -1 && itemToCheck.quantity !== "1") {
        cartArray[existingItem].quantity--;
        updateCart(cartArray);
        showCart(cartArray);
    } else {
        alert("Press the delete item button to remove it from your cart")
    }
};


deleteCart.onclick = function deleteCart() {
    localStorage.clear()
    location.reload()
}


function updateCart() {
    localStorage.setItem("cartList", JSON.stringify(cartArray))
};