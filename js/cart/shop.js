import { productArray } from "../products/productlist.js"
/* let cartItems = JSON.parse(localStorage.getItem("cartList")); */
const productsContainer = document.querySelector(".products");
/* const numberOfItemsInCart = document.querySelector(".show-cart"); */
/* let cartArray = cartItems || []; */


// Loops productlist.js and creates products HTML
productArray.forEach(function(product){

    productsContainer.innerHTML += 
        `<div class="product" >
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <div style="background-image: url(${product.image})" class="product-image"></div>
            <div class="product-price">Price: ${product.price}</div>
            <a  class="product-button" href="details.html?id=${product.id}&name=${product.name}" data-product="${product.id}">Details</a>
        </div>
        `
})


//click event for the add to cart button
/* const buttons = document.querySelectorAll(".product-button");

buttons.forEach(item => {
  item.addEventListener("click", event => {
    increaseQuantityCart()
        cartQuantityTotal()
        
  })
}) */


//click event for the add to cart button
/*  buttons.forEach(function(button) {
    button.onclick = function(){
       
        increaseQuantityCart()
        cartQuantityTotal()
        
        
    }
    
})   */


/* function cartQuantityTotal() {
    console.log()
    let cartItemsQuantity = 0;
    let total = 0;
    for(let i = 0; i < cartArray.length; i++) {
        total += cartArray[i].price * cartArray[i].quantity;
        cartItemsQuantity += cartArray[i].quantity;
        numberOfItemsInCart.innerHTML = `<div class="cart-stats">
                                            <span>Cart: ${cartItemsQuantity}</span>
                                            <span> total: ${total}</span>
                                        </div>`;
    }
}
cartQuantityTotal() */


//Function for adding new items to cart.
/* function AddToCart() {
    const itemToAdd = productArray.find(item => item.id === event.target.dataset.product)
    cartArray.push(itemToAdd);
    console.log("im adding to cart")
    updateCart(cartArray)
    //showCart(cartArray);
}


//add to cart function that checks the content of array, if duplicate add quantity.
function increaseQuantityCart() {

    const duplicateId = cartArray.findIndex((item) => item.id === event.target.dataset.product,);

    if(duplicateId !== -1 && cartArray[duplicateId].quantity !== 99) {
        cartArray[duplicateId].quantity++;
        updateCart(cartArray);
        messageincreasedQuantity()
    } else {
        AddToCart()
        messageAddedToCart()
    }
}

//updates items in cart/ local storage
function updateCart() {
    localStorage.setItem("cartList", JSON.stringify(cartArray))
    
}; */

/* function messageAddedToCart() {
    if(messages.style.display === "none") {
        messages.style.display = "block";
        messages.style.background = "green"
        messages.innerHTML = addedToCartMessage
        setTimeout(function() {
            messages.innerHTML = ""
            messages.style.display = "none";
            
        }, 1000)
    }    
}

function messageincreasedQuantity() {
    if(messages.style.display === "none") {
        messages.style.display = "block";
        messages.style.background = "green"
        messages.innerHTML = increaseQuantityMessage
        setTimeout(function() {
            messages.innerHTML = ""
            messages.style.display = "none";
            
        }, 1000)
    }    
} */

/* // forEach loop for cart content and total price.
function showCart(cartItems) {
    if(localStorage.length === 0) {
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

// creates HTML for cart content.
function CreateCartHtml(cartElement) {
    cartList.innerHTML +=
        `
        <div class="cart-item">
                <div style="background-image: url(${cartElement.image})" class="cart-image"></div>
                <h4>${cartElement.name}</h4>
            <button class="plus-btn" data-product="${cartElement.id}">+</button>
            <p id="cart-quantity">${cartElement.quantity}</p>
            <button class="minus-btn" data-product="${cartElement.id}">-</button>
            <p>${cartElement.price * cartElement.quantity}</p>
            <button class="delete-item-btn" data-product="${cartElement.id}">Delete Item</button>
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
        }
    })


    //click event for the - quantity button.
    decreaseQuantity.forEach(function(minusButton){
        minusButton.onclick = function() {
            cartArray.forEach(function(){ 
            })
            
            decreaseQuantityCart()
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
    const minusBtn = document.querySelectorAll(".minus-btn");
    if(duplicateId !== -1 && cartArray[duplicateId].quantity !== 1) {
        console.log(cartArray[duplicateId].quantity)
        cartArray[duplicateId].quantity--;
        updateCart(cartArray);
        showCart(cartArray);
        minusBtn.style.color = green;
        
    } else {
        //removeFromCart()
        console.log("deleting item")
    }
};



//Function for adding new items to cart.
function AddToCart() {
    const itemToAdd = productArray.find(item => item.id === event.target.dataset.product)
    cartArray.push(itemToAdd);
    console.log("im adding to cart")
    updateCart(cartArray)
    showCart(cartArray);
}


//updates items in cart/ local storage
function updateCart() {
        localStorage.setItem("cartList", JSON.stringify(cartArray))
};


 */