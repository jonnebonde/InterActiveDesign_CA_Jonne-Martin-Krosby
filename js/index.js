const searchBtn = document.querySelector(".submit-btn");
const searchField = document.getElementById("search")

searchBtn.onclick = function search(){
    if(searchField.style.display === "none") {
        searchField.style.display = "block";
    }else {

        searchField.style.display = "none";
    }  
}