const openMenu = document.getElementById("open-menu");
const menuMobile = document.getElementById("hamburger-menu");
const closeMenu = document.getElementById("close-menu")

openMenu.addEventListener("click", 
    function () {
    menuMobile.classList.add("active");

}

);

closeMenu.addEventListener("click", 
    function () {
    menuMobile.classList.remove("active");

}

);