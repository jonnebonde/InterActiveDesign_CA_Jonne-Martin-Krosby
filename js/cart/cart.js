const cartList = document.querySelector(".cart-list");
const cartContainer = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");

const deleteCart = document.querySelector(".delete-cart");
const emptyCartMessage = document.querySelector(".empty-cart-msg");
const hideCart = document.querySelector(".cart-container");


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
    cartList.innerHTML +=
        `<div class="cart-item">
            <div class="cart-delete-item">
                <button class="delete-item-btn"><i class="fa-solid fa-trash-can" data-size="${cartElement.Size}" data-product="${cartElement.id}"></i></button>
            </div>
            <div class="cart-image">
                <img src="${cartElement.image}" alt="a ${cartElement.gender} wearing a ${cartElement.name}">
            </div>
            <div class="cart-name">
                <h2>${cartElement.name}</h2>
                <p>${cartElement.description}</p>
                <span>Price: ${cartElement.price}</span>
                <span>Size: ${cartElement.Size}</span>
            </div>
            <div class="cart-quantity">
                <button class="plus-btn" ><i class="fa-solid fa-plus" data-size="${cartElement.Size}" data-product="${cartElement.id}"></i></button>
                <span id="cart-quantity">${cartElement.quantity}</span>
                <button class="minus-btn" ><i class="fa-solid fa-minus" data-size="${cartElement.Size}" data-product="${cartElement.id}"></i></button>
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

    const duplicateId = cartArray.findIndex((item) => item.id === event.target.dataset.product);
    console.log(duplicateId)
    if (duplicateId !== -1) {
        console.log(duplicateId)
        cartArray.splice(duplicateId, 1);
        updateCart(cartArray)
        showCart(cartArray)
        location.reload()
    }
}


//add to cart function that checks the content of array, if duplicate add quantity.

function increaseQuantityCart(event) {
    console.log(event.target.dataset.product)
    console.log(event.target.dataset.size)
    const duplicateId = cartArray.findIndex((item) => item.id == event.target.dataset.product);
    const duplicateSize = cartArray.findIndex((item) => item.Size == event.target.dataset.size)
    console.log(duplicateId)
    if (duplicateId !== -1 && cartArray[duplicateId].quantity !== 99 && duplicateSize !== -1) {
        cartArray[duplicateId, duplicateSize].quantity++;
        updateCart(cartArray);
        showCart(cartArray);
    } else {
        alert("No more in stock, contact support")
    }
}


//Function to decrement quantity of products in the cart.
function decreaseQuantityCart(event) {
    const duplicateId = cartArray.findIndex((item) => item.id == event.target.dataset.product);
    const duplicateSize = cartArray.findIndex((item) => item.Size == event.target.dataset.size)
    if (duplicateId !== -1 && cartArray[duplicateId].quantity !== 1 && duplicateSize !== -1) {
        console.log(cartArray[duplicateId].quantity)
        cartArray[duplicateId, duplicateSize].quantity--;
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


