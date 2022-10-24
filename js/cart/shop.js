const apiUrl = "https://www.jonnekrosby.site/rainy-days/wp-json/wc/v3/products";
const apiKey = "?consumer_key=ck_e070055b2e3d33ca2dabf2de3c38c5ccc67cd900&consumer_secret=cs_6d9350b73252e6db2598a63346d8c7d50227bd1e";
const baseUrl = apiUrl + apiKey;

const productsContainer = document.querySelector(".products");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const details = params.get("gender");
let searchValue = params.get("search");

const backgroundImgShop = document.querySelector(".background-image-shop");
const loader = document.querySelector(".loader");
const searchButton = document.querySelector("#submit");

const sortbyToggle = document.getElementById("sortby");
const sortbyList = document.querySelector(".sortby-list");
const sortbyListClose = document.querySelectorAll(".sortby-list li");
const sortbyContainer = document.querySelector(".sortby-container");

const colorToggle = document.getElementById("color");
const colorList = document.querySelector(".color-list");
const colorListClose = document.querySelectorAll(".color-list li");
const colorContainer = document.querySelector(".color-container");

const activityToggle = document.getElementById("activity");
const activityList = document.querySelector(".activity-list");
const activityListClose = document.querySelectorAll(".activity-list li");
const activityContainer = document.querySelector(".activity-container");

const sizeToggle = document.getElementById("size");
const sizeList = document.querySelector(".size-list");
const sizeListClose = document.querySelectorAll(".size-container li");
const sizeContainer = document.querySelector(".size-container");

const filterPopular = document.getElementById("popular");
const filterBestSelling = document.getElementById("best-selling");

const resetFilter = document.getElementById("reset-filter");
const filterStatus = document.querySelector(".filter-status");


async function getProducts(url) {

  try {
    const response = await fetch(url);
    const products = await response.json();
    console.log(products)

    // sort array low to high 

    function lowToHighPrice() {
      let lowToHighPrice = products.sort(function (x, y) {
        return x.price - y.price;
      });
      filterStatus.innerHTML = `Filtering by: Sortby: Lowprice - Highprice`
      productsContainer.innerHTML = "";
      createProductsHtml(lowToHighPrice);
    }

    const filterLowPrice = document.getElementById("low-price")
    filterLowPrice.addEventListener("click", lowToHighPrice)

    // sort array high to low price

    function highToLowPrice() {
      let highLowPrice = products.sort(function (x, y) {
        return y.price - x.price;
      });
      filterStatus.innerHTML = `Filtering by: Sortby: Highprice - Lowprice`
      productsContainer.innerHTML = "";
      createProductsHtml(highLowPrice);
    }

    const filterHighPrice = document.getElementById("high-price")
    filterHighPrice.addEventListener("click", highToLowPrice)

    // sort array from Z - A

    function SortZa() {
      let sortedZa = products.sort(function (x, y) {
        let a = x.name.toUpperCase(),
          b = y.name.toUpperCase();
        if (a == b)
          return 0;
        if (a < b)
          return 1;
        return -1;
      });
      filterStatus.innerHTML = `Filtering by: Sortby: Z - A`
      productsContainer.innerHTML = ""
      createProductsHtml(sortedZa);
    }

    const filterZa = document.getElementById("z-a")
    filterZa.addEventListener("click", SortZa)

    // sorting array from A -Z

    function SortAz() {
      let sortedAz = products.sort(function (x, y) {
        let a = x.name.toUpperCase(),
          b = y.name.toUpperCase();
        if (a == b)
          return 0;
        if (a > b)
          return 1;
        return -1;
      });
      filterStatus.innerHTML = `Filter: Sortby: A - Z`
      productsContainer.innerHTML = ""
      createProductsHtml(sortedAz);
    }

    const filterAz = document.getElementById("a-z")
    filterAz.addEventListener("click", SortAz)


    // filter products

    function filterMessage(attributeTarget, filterCriteria) {
      console.log(attributeTarget, filterCriteria)
      let attributeText = "";
      if (attributeTarget == "0") {
        attributeText = "Color";
      }
      if (attributeTarget == "1") {
        attributeText = "Size";
      }
      if (attributeTarget == "2") {
        attributeText = "Activity";
      }
      if (attributeTarget == "3") {
        attributeText = "Sortby";
      }

      filterStatus.innerHTML = `Filter: ${attributeText} - ${filterCriteria}`
    }


    function checkAttribute(event) {

      let attributeTarget = event.target.value;
      let filterCriteria = event.target.innerHTML;
      const filteredColor = products.filter(product => product.attributes[attributeTarget].options.includes(filterCriteria));
      console.log(filteredColor)
      filterMessage(attributeTarget, filterCriteria)
      productsContainer.innerHTML = "";
      createProductsHtml(filteredColor)
    }

    filterPopular.addEventListener("click", checkAttribute);
    filterBestSelling.addEventListener("click", checkAttribute);

    colorToggle.addEventListener("click", () => {
      colorList.classList.toggle("active")
    })

    colorListClose.forEach(function (colorMenu) {
      colorMenu.onclick = function (color) {
        checkAttribute(color)
        colorList.classList.remove("active")
      }
    })

    document.addEventListener("click", function (e) {
      if (!colorContainer.contains(e.target)) {
        colorList.classList.remove("active")
      }
    });

    //activity menu = feature menu

    activityToggle.addEventListener("click", () => {
      activityList.classList.toggle("active")
    })

    activityListClose.forEach(function (activityMenu) {
      activityMenu.onclick = function (feature) {
        checkAttribute(feature)
        activityList.classList.remove("active")
      }
    })

    document.addEventListener("click", function (e) {
      if (!activityContainer.contains(e.target)) {
        activityList.classList.remove("active")
      }
    });

    sizeToggle.addEventListener("click", () => {
      sizeList.classList.toggle("active")
    })

    sizeListClose.forEach(function (sizeMenu) {
      sizeMenu.onclick = function (size) {
        checkAttribute(size)
        sizeList.classList.remove("active")
      }
    })

    document.addEventListener("click", function (e) {
      if (!sizeContainer.contains(e.target)) {
        sizeList.classList.remove("active")
      }
    });

    // reset filter

    function filterReset() {
      filterStatus.innerHTML = "Filter: none";
      productsContainer.innerHTML = "";
      createProductsHtml(products);
    }

    resetFilter.addEventListener("click", filterReset);


    // create html for products

    createProductsHtml(products);
  }


  catch (error) {
    console.log("something went wrong fetching api");
    productsContainer.innerHTML = "Something went wrong fetching products";
  }
}

// sort products by gender by params or cta

function sortByGender() {
  if (!details) {
    let allProductsUrl;
    allProductsUrl = baseUrl;
    getProducts(allProductsUrl);
  }
  else {
    let genderUrl;
    genderUrl = baseUrl + `&category=${details}`
    getProducts(genderUrl);
  }

}

// Keyword search function (needs more work)

let searchUrl

if (searchValue !== null) {
  search()
  searchValue = ""
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

//sortby menu

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

// creating HTML from API

function createProductsHtml(products) {
  products.forEach(function (product) {
    loader.remove();
    productsContainer.innerHTML +=
      `<div class="product" >
        <a tabindex="-1" href="details.html?id=${product.id}&name=${product.name}" data-product="${product.id}">
            <h2>${product.name}</h2>
            <div style="background-image: url(${product.images[0].src})" aria-label="a ${product.tags[0].name} is wearing a ${product.name}" class="product-image"></div>
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
  const allActive = document.querySelector(".all");

  if (details === "17") {
    manActive.classList.add("active");
  }
  if (details === "23") {
    womanActive.classList.add("active");
  }
  if (!details) {
    allActive.classList.add("active")
  }
}
toggleActiveLink()

//hamburger menu filter

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