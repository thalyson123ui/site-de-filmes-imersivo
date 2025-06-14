//Enabling Home Swiper

var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

//Enabling Coming Soon Swiper

var swiper = new Swiper(".coming-container", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 55000,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: { slidesPerView: 2, },
        568: { slidesPerView: 3, },
        768: { slidesPerView: 4, },
        968: { slidesPerView: 5, },
    },
});

//Shadow Header

let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
})

//Enabling responsive menu
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//Removing menu by clicking in links
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}