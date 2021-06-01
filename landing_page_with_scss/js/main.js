// === mobile menu ====

let hamberger = document.getElementById("hamberger-menu");
let mobileMenu = document.querySelector(".main-nav");
let closeBtn = document.getElementById("pencet");
let allSections = document.getElementsByTagName("section");

function toggleMenu() {
    mobileMenu.classList.toggle("active");
    closeBtn.classList.toggle("close");
    for(var items of allSections){
        items.classList.toggle("push-to-right");
    }
}

hamberger.addEventListener('click', toggleMenu);







// var myCarousel = document.querySelector('#imageInfo');
// var carousel = new bootstrap.Carousel(myCarousel, {
//   interval: 2000,
//   wrap: false,
// });