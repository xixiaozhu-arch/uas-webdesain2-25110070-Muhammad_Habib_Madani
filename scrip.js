// =======================================
// WEBSITE UMKM LOTEK ENI
// script.js
// =======================================

// ==========================
// LOADING SCREEN (2 DETIK)
// ==========================

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hide");

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);

    }, 2000);
});

// ==========================
// DARK MODE
// ==========================

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        darkModeBtn.innerHTML = "☀️";

    }else{

        darkModeBtn.innerHTML = "🌙";

    }

});

// ==========================
// BACK TO TOP
// ==========================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        backToTop.style.display = "block";

    }else{

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ==========================
// ACTIVE MENU
// ==========================

const currentPage = window.location.pathname.split("/").pop();

const links = document.querySelectorAll(".nav-menu a");

links.forEach(link=>{

    if(link.getAttribute("href")===currentPage){

        link.classList.add("active");

    }

});

if(currentPage===""){

    document.querySelector(".nav-menu a").classList.add("active");

}