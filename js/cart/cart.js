const cartList = document.querySelector(".cart-list");
const cartContainer = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");
const deleteCart = document.querySelector(".delete-cart");
const emptyCartMessage = document.querySelector(".empty-cart-msg");
const hideCart = document.querySelector(".cart-container");


function showCart() {
    if(cartArray.length === 0) {
        emptyCartHtml()
    } else {
    hideCart.style.display = "flex"
    emptyCartMessage.innerHTML = ""
    cartList.innerHTML = "";
    let total = 0;
    cartItems.forEach(function(cartElement) {
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
        `
        <div class="cart-item">
            <div class="cart-delete-item">
                <button class="delete-item-btn"><i class="fa-solid fa-trash-can" data-product="${cartElement.id}"></i></button>
            </div>
            <div class="cart-image">
                <img src="${cartElement.image}" alt="a ${cartElement.gender} wearing a ${cartElement.name}">
            </div>
            <div class="cart-name">
                <h2>${cartElement.name}</h2>
                <p>${cartElement.description}</p>
                <span>Price: ${cartElement.price}</span>
            </div>
            
            <div class="cart-quantity">
                <button class="plus-btn" ><i class="fa-solid fa-plus" data-product="${cartElement.id}"></i></button>
                <span id="cart-quantity">${cartElement.quantity}</span>
                <button class="minus-btn" ><i class="fa-solid fa-minus" data-product="${cartElement.id}"></i></button>
            </div>
            <div class="cart-total">
                <span>${cartElement.price * cartElement.quantity}</span>
            </div>
            
        </div>`

    const increaseQuantity = document.querySelectorAll(".plus-btn");
    const decreaseQuantity = document.querySelectorAll(".minus-btn");
    const deleteItemFromCart = document.querySelectorAll(".delete-item-btn i");


    
    //click event for the + quantity button.
    increaseQuantity.forEach(function(plusButton){
        plusButton.onclick = function() {
            cartArray.forEach(function(){ 
            })
            
            increaseQuantityCart()
            cartQuantityTotal()
        }
    })


    //click event for the - quantity button.
    decreaseQuantity.forEach(function(minusButton){
        minusButton.onclick = function() {
            cartArray.forEach(function(){ 
            })
            
            decreaseQuantityCart()
            cartQuantityTotal()
        }
    })


    //click event for the delete item button
    deleteItemFromCart.forEach(function(deleteButton){
        deleteButton.onclick = function() {
            cartArray.forEach(function(){ 
            })
            removeFromCart()
        }
    })

}

//function to remove items from cart.
function removeFromCart() {

    const duplicateId = cartArray.findIndex((item) => item.id === event.target.dataset.product);

    console.log(duplicateId)
    if(duplicateId !== -1) {
        console.log(duplicateId)
        cartArray.splice(duplicateId ,1);
        updateCart(cartArray)
        showCart(cartArray)
        location.reload()
    } 

} 


//add to cart function that checks the content of array, if duplicate add quantity.
function increaseQuantityCart() {

    const duplicateId = cartArray.findIndex((item) => item.id === event.target.dataset.product,);

    if(duplicateId !== -1 && cartArray[duplicateId].quantity !== 99) {
        cartArray[duplicateId].quantity++;
        updateCart(cartArray);
        showCart(cartArray);
    } else {
        //AddToCart()
    }
}  


//Function to decrement quantity of products in the cart.
function decreaseQuantityCart() {
    
    const duplicateId = cartArray.findIndex((item) => item.id === event.target.dataset.product,);
    
    if(duplicateId !== -1 && cartArray[duplicateId].quantity !== 1) {
        console.log(cartArray[duplicateId].quantity)
        cartArray[duplicateId].quantity--;
        updateCart(cartArray);
        showCart(cartArray);
        
    } else {
        alert("Press the delete item button to remove it from your cart")
        console.log("deleting item")
    }
};


deleteCart.onclick = function deleteCart() {
    localStorage.clear()
    location.reload()
    console.log("im deleting local storage")
}

function updateCart() {
    localStorage.setItem("cartList", JSON.stringify(cartArray))
};