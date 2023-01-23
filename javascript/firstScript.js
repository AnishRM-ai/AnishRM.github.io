const hamburger = document.querySelector(".hamburger-menu");
const navmenu = document.querySelector("#menu-bar");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
}
)
document.querySelectorAll(".navlink").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navmenu.classList.remove("active");
}))