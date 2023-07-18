// Owl Carousel
$(document).ready(function() {

    $('.owl-carousel').owlCarousel({
        items: 4,
        loop: true,
        nav: true,
        margin: 10
    });
       
});

// Products
var openProducts = document.querySelector('#products-visible').addEventListener('click', function() {
    document.querySelector('#products').style.visibility="visible"
});

var closeProducts = document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('#products').style.visibility="hidden"
});

var openProductsBtn = document.querySelector('#products-visible-btn').addEventListener('click', function() {
    document.querySelector('#products').style.visibility="visible"
});

// Menu Mobile
var openProductsMobile = document.querySelector('#products-visible-mobile').addEventListener('click', function() {
    document.querySelector('#products').style.visibility="visible"
});

var openMobile = document.querySelector('.btn-mobile').addEventListener('click', function() {
    document.querySelector('.menu-mobile').style.visibility="visible"
});

var closeMobile = document.querySelector('.close-menu').addEventListener('click', function() {
    document.querySelector('.menu-mobile').style.visibility="hidden"
});