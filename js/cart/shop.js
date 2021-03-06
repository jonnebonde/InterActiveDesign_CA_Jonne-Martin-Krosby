import { productArray } from "../products/productlist.js";

const productsContainer = document.querySelector(".products");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const details = params.get("gender");
const backgroundImgShop = document.querySelector(".background-image-shop");


// filterfunction to sort products by gender

let filteredProductArray = productArray.filter(function (sortedArray) {
    return sortedArray.gender === details;
});


//if filterfunction has no value(null) all products are shown

function productArrayHTML() {
    if (details) {
        sortedProductsHTML()
    } else {
        allProductsHTML()
    }
}
productArrayHTML()

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
    sizeMenu.onclick = function () {
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
    colorMenu.onclick = function () {
        colorList.classList.remove("active")
    }
})

document.addEventListener("click", function (e) {
    if (!colorContainer.contains(e.target)) {
        colorList.classList.remove("active")
    }
});


//activity menu

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

    if ((details === "man") || (details === "woman") || (!details)) {

        if (details === "man") {
            backgroundImgShop.style.backgroundImage = "url('./images/men_img.jpg')"
            backgroundImgShop.setAttribute("aria-label", "picture of a man on a mountain")
        }

        if (details === "woman") {
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

    if (details === "man") {
        manActive.classList.add("active");
    }

    if (details === "woman") {
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


function sortedProductsHTML() {
    filteredProductArray.forEach(function (product) {
        createProductHtml(product)
    });
}


function allProductsHTML() {

    let shuffledShop = productArray.sort(() => 0.5 - Math.random());

    productsContainer.innerHTML = ""
    shuffledShop.forEach(function (product) {
        createProductHtml(product)
    });
}


function randomGender() {

    let shuffledShop = filteredProductArray.sort(() => 0.5 - Math.random());

    productsContainer.innerHTML = ""
    shuffledShop.forEach(function (product) {
        createProductHtml(product)
    });
}

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

const filterPopular = document.getElementById("popular");
const filterBestSelling = document.getElementById("best-selling");


filterPopular.addEventListener("click", sortByGender);
filterBestSelling.addEventListener("click", sortByGender)


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


// creating HTML from product array

function createProductHtml(product) {

    productsContainer.innerHTML +=
        `<div class="product" >
            <a tabindex="-1" href="details.html?id=${product.id}&name=${product.name}" data-product="${product.id}">
                <h2>${product.name}</h2>
                <div style="background-image: url(${product.image})" aria-label="a ${product.gender} is wearing a ${product.name}" class="product-image"></div>
                <div class="product-info-text">
                    <span>${product.description}</span>
                    <span class="product-price">Price: ${product.price}</span>
                </div>
            </a>
                <a  class="product-button" href="details.html?id=${product.id}&name=${product.name}" data-product="${product.id}">Details</a>
            </div>
            `
}