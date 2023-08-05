const body = document.querySelector("body");
const nav = document.querySelector("nav");
const modeToggle = document.querySelector(".dark-light");
const searchToggle = document.querySelector(".search-toggle");
const menuToggle = document.querySelector(".menu-toggle");
const mainMenu = document.querySelector(".menu");


// Theme Mood Toggle
modeToggle.addEventListener("click", ()=>{
    modeToggle.classList.toggle("active");
    body.classList.toggle("active");
})

// Search Box Toggle
searchToggle.addEventListener('click', ()=>{
    searchToggle.classList.toggle("active");
})

menuToggle.addEventListener('click', ()=>{
    mainMenu.classList.toggle('active');
})

      