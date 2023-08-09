// Owl Carousel
$(document).ready(function() {

    $('.owl-carousel').owlCarousel({
        items: 3,
        loop: true,
        nav: true,
        margin: 10
    });
       
});

// Menu Mobile
var openProductsMobile = document.querySelector('#products-visible-mobile').addEventListener('click', function() {
    document.querySelector('#products').style.visibility="visible"
});

var openMobile = document.querySelector('.btn-mobile').addEventListener('click', function() {
    document.querySelector('.menu-mobile').style.visibility="visible"
});

var closeMobile = document.querySelector('.close-menu, .menu-mobile').addEventListener('click', function() {
    document.querySelector('.menu-mobile').style.visibility="hidden"
});