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

// Btn Adicionar Carrinnho
const adicionaItem = document.getElementsByClassName('adiciona-produto')
for(var i = 0; i < adicionaItem.length; i++) {
    adicionaItem[i].addEventListener('click', function(event) {
        event.target
    })
}