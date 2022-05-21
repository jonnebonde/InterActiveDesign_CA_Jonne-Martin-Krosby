//const cartItems = JSON.parse(localStorage.getItem("cartList"));
const cartList = document.querySelector(".cart-list");
const cartContainer = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");
const deleteCart = document.querySelector(".delete-cart");
const emptyCartMessage = document.querySelector(".empty-cart-msg");
//const numberOfItemsInCart = document.querySelector(".show-cart");
//let cartArray = cartItems || [];

console.log(deleteCart)

function cartQuantityTotal() {
    console.log()
    let cartItemsQuantity = 0;
    for(let i = 0; i < cartArray.length; i++) {
        cartItemsQuantity += cartArray[i].quantity;
        numberOfItemsInCart.innerHTML = `Cart: ${cartItemsQuantity}`;
        
    }
    
}
cartQuantityTotal()


function showCart() {
    if(cartArray.length === 0) {
        emptyCartMessage.innerHTML = "Your cart is empty"
    } else {
        //cart.style.display = "block";
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


// creates HTML for cart content.
function CreateCartHtml(cartElement) {
    cartList.innerHTML +=
        `
        <div class="cart-item">
            <div class="cart-item">
                <img src="${cartElement.image}">
            </div>
            <div class="cart-name">
                <h4>${cartElement.name}</h4>
                <p>${cartElement.description}</p>
            </div>
            <div class="cart-quantity">
                <button class="plus-btn" data-product="${cartElement.id}">+</button>
                <p id="cart-quantity">${cartElement.quantity}</p>
                <button class="minus-btn" data-product="${cartElement.id}">-</button>
            </div>
            <div class="cart-total">
                <p>${cartElement.price * cartElement.quantity}</p>
            </div>
            <div class="cart-delete">
                <button class="delete-item-btn" data-product="${cartElement.id}">Delete Item</button>
            </div>
        </div>`

    const increaseQuantity = document.querySelectorAll(".plus-btn");
    const decreaseQuantity = document.querySelectorAll(".minus-btn");
    const deleteItemFromCart = document.querySelectorAll(".delete-item-btn");

    
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
        console.log(cartArray)
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
        AddToCart()
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
        //removeFromCart()
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