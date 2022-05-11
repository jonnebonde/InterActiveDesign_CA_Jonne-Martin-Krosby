const toggleButton = document.querySelector(".toggle-button");
const navMenu = document.querySelector(".nav-menu");

toggleButton.addEventListener("click", () => {
    navMenu.classList.toggle("active")
})