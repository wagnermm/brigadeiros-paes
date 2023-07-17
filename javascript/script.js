// Owl Carousel
$(document).ready(function() {

    $('.owl-carousel').owlCarousel()
       
})

// Products
var openProducts = document.querySelector('#products-visible').addEventListener('click', function() {
    document.querySelector('#products').style.visibility="visible"
})

var closeProducts = document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('#products').style.visibility="hidden"
})

var openProductsBtn = document.querySelector('#products-visible-btn').addEventListener('click', function() {
    document.querySelector('#products').style.visibility="visible"
})