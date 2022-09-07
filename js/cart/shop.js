
// cart item quantity and total price
let cartItems = JSON.parse(localStorage.getItem("cartList"));
const numberOfItemsInCart = document.querySelector(".show-cart");
let cartArray = cartItems || [];


function cartQuantityTotal() {
    console.log()
    let cartItemsQuantity = 0;
    let total = 0;
    for (let i = 0; i < cartArray.length; i++) {
        total += cartArray[i].price * cartArray[i].quantity;
        cartItemsQuantity += cartArray[i].quantity;
        numberOfItemsInCart.innerHTML = `<div class="cart-stats">
                                            <span aria-label="Cart total item quantity"><i class="fa-solid fa-cart-shopping">${cartItemsQuantity}</i></span>
                                        </div>`;
    }
}
cartQuantityTotal()

const apiUrl = "https://jonnekrosby.site/wp-json/wc/v3/products/";
const apiKey = "?consumer_key=ck_d4557879258e9171c81b0b5a97746e037b2a79e3&consumer_secret=cs_def48d5d2ec05afdcb68e9f67eac0bc39af1aa23&per_page=30";
const baseUrl = apiUrl + apiKey;

const productsContainer = document.querySelector(".products");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const details = params.get("gender");
let searchValue = params.get("search");
const backgroundImgShop = document.querySelector(".background-image-shop");
const loader = document.querySelector(".loader");
console.log(searchValue);
const searchButton = document.querySelector("#submit");


async function getProducts(url) {

    try {
        const response = await fetch(url);
        let products = await response.json();

        
        createProductsHtml(products);
    }

    catch(error) {
        console.log("something went wrong fetching api");
    }

}

// keyword search = /products?filter[q]=search-keyword

let searchUrl

if(searchValue !== null){
    search()
} else {
    sortByGender()   
}

function search() {
    
        searchUrl = baseUrl + `&search=${searchValue}`
        console.log(searchUrl)
        productsContainer.innerHTML = "";
        productsContainer.appendChild(loader)
        getProducts(searchUrl)
}





//note to self : fix alphabetical filter and price filter


// Category - id
// Bestseller - 43
// Female - 23
// Male - 17
// Popular - 44
// Skiing - 18
// Water resistant - 19
// Waterproof - 20
// Windproof - 21

const female = "23";
const male = "17";

// Tags - id
// Female - 45
// Male - 46
// All - 47

const tagFemale = "45";
const tagMale = "46";
const tagAll = "47";

// Color Attributes - id
// Army - 29
// Black - 30
// Blue - 39
// Brown - 40
// Orange - 31
// Yellow - 32


// Size Attributes - id
// Small - 37
// Medium - 26
// Large - 25
// Xlarge - 27
// XXlarge - 28


// filter according to gender from cta on index.html and shop.html

function sortByGender(){
    if(!details){
        let allProductsUrl;
        allProductsUrl = baseUrl;
        getProducts(allProductsUrl)
    }
    else {
        let genderUrl;
        genderUrl = baseUrl + `&category=${details}`
        getProducts(genderUrl);
    }

}



// const for categories and their addeventlisteners

const filterPopular = document.getElementById("popular");
const filterBestSelling = document.getElementById("best-selling");

const featureSkiing = document.getElementById("skiing");
const featureWaterProof = document.getElementById("waterproof")
const featurewaterResistant = document.getElementById("water_resistant");
const featureWindproof = document.getElementById("windproof");

filterPopular.addEventListener("click", filterByCategory);
filterBestSelling.addEventListener("click", filterByCategory);

featureSkiing.addEventListener("click", filterByCategory);
featureWaterProof.addEventListener("click", filterByCategory);
featurewaterResistant.addEventListener("click", filterByCategory);
featureWindproof.addEventListener("click", filterByCategory);


// Filter products by category and if gender is checked

// filter by attributes = products?attribute=pa_color&attribute_term=50
// filter by prices = wp-json/wc/v3/products?orderby=price&order=desc
// filter alphabetical = 
// keyword search = /products?filter[q]=search-keyword
// include specific id = &include=576,487,425;

const priceLowHigh = document.getElementById("low-price");
const priceHighLow = document.getElementById("high-price");
const fromAtoZ = document.getElementById("a-z");
const fromZtoA = document.getElementById("z-a");


priceLowHigh.addEventListener("click", sortBy);
priceHighLow.addEventListener("click", sortBy);
fromAtoZ.addEventListener("click", sortBy);
fromZtoA.addEventListener("click", sortBy);

function sortBy(event){
    let tagid = genderCheck(details)
    const lowHigh = `&orderby=price&order=asc`;
    const highLow = `&orderby=price&order=desc`;
    const aZ = `&orderby=title&order=asc`;
    const zA = `&orderby=title&order=desc`;
    let sortByUrl = "";
    let sortValue = event.target.value

    if(sortValue == "1"){
        sortByUrl = baseUrl + `&tag=${tagid}` + lowHigh;
        console.log(tagid)
    }
    if(sortValue == "2") {
        sortByUrl = baseUrl + `&tag=${tagid}` + highLow;
        console.log("hi")
    }
    if(sortValue == "3") {
        sortByUrl = baseUrl + `&tag=${tagid}` + aZ;
    }
    if(sortValue == "4"){
        sortByUrl = baseUrl + `&tag=${tagid}` + zA;
    }


    productsContainer.innerHTML = "";
    productsContainer.appendChild(loader)
    getProducts(sortByUrl)

}

function filterByCategory(event){
    let tagid = genderCheck(details);
    let categoryid = event.target.value; 

    const popularUrl = baseUrl + `&tag=${tagid}&category=${categoryid}`
    productsContainer.innerHTML = "";
    productsContainer.appendChild(loader)
    getProducts(popularUrl)
}

function filterByColor(event){
    let tagid = genderCheck(details);
    let colorId = event.target.value;

    console.log(event.target.value)

    const colorUrl = baseUrl + `&tag=${tagid}&attribute=pa_color&attribute_term=${colorId}`;
    productsContainer.innerHTML = "";
    productsContainer.appendChild(loader);
    getProducts(colorUrl)
}

function filterBySize(event){
    let tagid = genderCheck(details);
    let sizeId = event.target.value;

    console.log(event.target.value)

    const sizeUrl = baseUrl + `&tag=${tagid}&attribute=pa_size&attribute_term=${sizeId}`;
    productsContainer.innerHTML = "";
    productsContainer.appendChild(loader);
    getProducts(sizeUrl)
}


function genderCheck(details){
    let tagid;
    if(details === male ) {
        tagid = tagMale;
        return tagid;
    }
    if(details === female) {
        tagid = tagFemale;
        return tagid;
    } 
    if(!details){
        tagid = tagAll;
        return tagid;
    }
}


// creating HTML from API

function createProductsHtml(products){
    products.forEach(function(product){

        loader.remove();
        productsContainer.innerHTML += 
        `<div class="product" >
        <a tabindex="-1" href="details.html?id=${product.id}&name=${product.name}" data-product="${product.id}">
            <h2>${product.name}</h2>
            <div style="background-image: url(${product.images[0].src})" aria-label="a ${product.tags[1].name} is wearing a ${product.name}" class="product-image"></div>
            <div class="product-info-text">
                <span>${product.short_description}</span>
                <span class="product-price">Price: ${product.price}</span>
            </div>
        </a>
            <a  class="product-button" href="details.html?id=${product.id}&name=${product.name}" data-product="${product.id}">Details</a>
        </div>
        `
    })
}

const backButton = document.querySelectorAll(".back-button");

backButton.forEach(function (back) {
    back.addEventListener("click", () => {
        history.back();
    });
});


// click event for hamburger menu

const toggleButton = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const hideMenu = document.querySelector("main");
const navContainer = document.querySelector(".navbar")


toggleButton.addEventListener("click", () => {
    toggleButton.classList.toggle("active");
    navMenu.classList.toggle("active");
})

hideMenu.addEventListener("click", () => {
    toggleButton.classList.remove("active");
    navMenu.classList.remove("active");
})

document.addEventListener("click", function (e) {
    if (!navContainer.contains(e.target)) {
        navMenu.classList.remove("active")
    }
});

// filterfunction to sort products by gender



/* function sortByGender(products) {

    let filteredProducts = products.filter(function (sortedProducts) {
        console.table(sortedProducts.tags[0].name)
    return sortedProducts.tags[0].name === details;
}); 

console.table(details)
console.log(filteredProducts) */

//if filterfunction has no value(null) all products are shown

/*     if (details) {
        console.log(products)
        let products = filteredProducts;
        console.log(products)
        

        sortedProductsHTML(filteredProducts)
    } else {
        allProductsHTML()
    }
} 

function sortedProductsHTML(filteredProducts) {
    console.log(filteredProducts)
    createProductHtml(products)
} */

/* function allProductsHTML() {

    let shuffledShop = productArray.sort(() => 0.5 - Math.random());

    productsContainer.innerHTML = ""
    shuffledShop.forEach(function (product) {
        createProductHtml()
    });
} */


/* function randomGender() {

    let shuffledShop = filteredProductArray.sort(() => 0.5 - Math.random());

    productsContainer.innerHTML = ""
    shuffledShop.forEach(function (product) {
        createProductHtml(product)
    });
} */









 // toggle filter menus

//size menu
const sizeToggle = document.getElementById("size");
const sizeList = document.querySelector(".size-list");
const sizeListClose = document.querySelectorAll(".size-container li");
const sizeContainer = document.querySelector(".size-container");


sizeToggle.addEventListener("click", () => {
    sizeList.classList.toggle("active")
})

sizeListClose.forEach(function (sizeMenu) {
    sizeMenu.onclick = function (size) {
        filterBySize(size)
        sizeList.classList.remove("active")
    }
})

document.addEventListener("click", function (e) {
    if (!sizeContainer.contains(e.target)) {
        sizeList.classList.remove("active")
    }
});


//color menu
const colorToggle = document.getElementById("color");
const colorList = document.querySelector(".color-list");
const colorListClose = document.querySelectorAll(".color-list li");
const colorContainer = document.querySelector(".color-container");


colorToggle.addEventListener("click", () => {
    colorList.classList.toggle("active")
})

colorListClose.forEach(function (colorMenu) {
    colorMenu.onclick = function (color) {
        filterByColor(color)
        colorList.classList.remove("active")
    }
})

document.addEventListener("click", function (e) {
    if (!colorContainer.contains(e.target)) {
        colorList.classList.remove("active")
    }
});


//activity menu = feature menu

const activityToggle = document.getElementById("activity");
const activityList = document.querySelector(".activity-list");
const activityListClose = document.querySelectorAll(".activity-list li");
const activityContainer = document.querySelector(".activity-container");


activityToggle.addEventListener("click", () => {
    activityList.classList.toggle("active")
})

activityListClose.forEach(function (activityMenu) {
    activityMenu.onclick = function () {
        activityList.classList.remove("active")
    }
})

document.addEventListener("click", function (e) {
    if (!activityContainer.contains(e.target)) {
        activityList.classList.remove("active")
    }
});


//sortby menu

const sortbyToggle = document.getElementById("sortby");
const sortbyList = document.querySelector(".sortby-list");
const sortbyListClose = document.querySelectorAll(".sortby-list li");
const sortbyContainer = document.querySelector(".sortby-container");


sortbyToggle.addEventListener("click", () => {
    sortbyList.classList.toggle("active")
})

sortbyListClose.forEach(function (sortbyMenu) {
    sortbyMenu.onclick = function () {
        sortbyList.classList.remove("active")
    }
})

document.addEventListener("click", function (e) {
    if (!sortbyContainer.contains(e.target)) {
        sortbyList.classList.remove("active")
    }
});


//change background according to gender or no gender choosen from landingpage

function changeBackground() {

    if ((details === "17") || (details === "23") || (!details)) {

        if (details === "17") {
            backgroundImgShop.style.backgroundImage = "url('./images/men_img.jpg')"
            backgroundImgShop.setAttribute("aria-label", "picture of a man on a mountain")
        }

        if (details === "23") {
            backgroundImgShop.style.backgroundImage = "url('./images/women_img.jpg')"
            backgroundImgShop.setAttribute("aria-label", "picture of a woman on a mountain")
        }

        if (!details) {
            backgroundImgShop.style.backgroundImage = "url('./images/shop_main_img.jpg')"
            backgroundImgShop.setAttribute("aria-label", "picture of a man on a mountain")
        }
    }
}
changeBackground()


function toggleActiveLink() {
    const manActive = document.querySelector(".man");
    const womanActive = document.querySelector(".woman");

    if (details === "17") {
        manActive.classList.add("active");
    }

    if (details === "23") {
        womanActive.classList.add("active");
    }
}
toggleActiveLink()



const filterOpenMenu = document.querySelector(".filter-menu-open");
const filterCloseMenu = document.querySelector(".filter-close-btn");
const filterSideMenu = document.querySelector(".filter-container-all");
const filterContainer = document.querySelector(".filter-main-container");


filterOpenMenu.addEventListener("click", () => {
    filterSideMenu.classList.toggle("active");
    filterCloseMenu.classList.toggle("active");
})


filterCloseMenu.addEventListener("click", () => {
    filterSideMenu.classList.remove("active");
    filterCloseMenu.classList.remove("active");
})


document.addEventListener("click", function (e) {
    if (!filterContainer.contains(e.target)) {
        filterSideMenu.classList.remove("active")
        filterCloseMenu.classList.remove("active");
    }
});




/* 
// click event for dummy filters

function sortByGender() {

    if (details) {
        randomGender()
    } else {
        allProductsHTML()
    }
}


sizeListClose.forEach(size => {
    size.addEventListener("click", event => {
        sortByGender()
    })
})

colorListClose.forEach(color => {
    color.addEventListener("click", event => {
        sortByGender()
    })
})

activityListClose.forEach(activity => {
    activity.addEventListener("click", event => {
        sortByGender()
    })
})




// sort array low to high according to gender or not chosen

function lowToHighPrice() {

    var lowToHigh = productArray;

    if(!details) {
        var lowToHigh = productArray;
    } else {
        var lowToHigh = filteredProductArray;
    }

    let lowToHighPrice = lowToHigh.sort(function (x, y) {
        return x.price - y.price;
    });
    
    productsContainer.innerHTML = "";

    lowToHighPrice.forEach(function (product) {
        createProductHtml(product);
    })

}


const filterLowPrice = document.getElementById("low-price")
filterLowPrice.addEventListener("click", lowToHighPrice)


// high to low according to gender or not chosen


function highToLowPrice() {

    var highToLow = productArray;

    if(!details) {
        var highToLow = productArray;
    } else {
        var highToLow = filteredProductArray;
    }

    let highLowPrice = highToLow.sort(function (x, y) {
        return y.price - x.price;
    });
    
    productsContainer.innerHTML = "";

    highLowPrice.forEach(function (product) {
        createProductHtml(product);
    })

}

const filterHighPrice = document.getElementById("high-price")
filterHighPrice.addEventListener("click", highToLowPrice)


// sorting array from a-z according to gender or not


function SortAz() {

    var sortAz = productArray;

    if(!details) {
        var sortAz = productArray;
    } else {
        var sortAz = filteredProductArray;
    }

    let sortedAz = sortAz.sort(function (x, y) {

        let a = x.name.toUpperCase(),
        b = y.name.toUpperCase();
        if(a == b)
            return 0;
        if(a > b)
            return 1;
        return -1;
    });

    productsContainer.innerHTML = ""
    sortedAz.forEach(function (product) {
        createProductHtml(product)
    })

}

const filterAz = document.getElementById("a-z")
filterAz.addEventListener("click", SortAz)


// sort array from Z - A according to gender or not 

function SortZa() {

    var SortZa = productArray;

    if(!details) {
        var SortZa = productArray;
    } else {
        var SortZa = filteredProductArray;
    }

    let sortedZa = SortZa.sort(function (x, y) {

        let a = x.name.toUpperCase(),
        b = y.name.toUpperCase();
        if(a == b)
            return 0;
        if(a < b)
            return 1;
        return -1;
    });

    productsContainer.innerHTML = ""
    sortedZa.forEach(function (product) {
        createProductHtml(product)
    })

}

const filterZa = document.getElementById("z-a")
filterZa.addEventListener("click", SortZa)

 */