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

// Shopping Cart
var listCartIsVisible = document.querySelector('#cart-btn').addEventListener('click', ()=> {
    document.querySelector('#cart-list').style.visibility='visible'
})
var listCartIsNotVisible = document.querySelector('#close-cartList').addEventListener('click', ()=> {
    document.querySelector('#cart-list').style.visibility='hidden'
})

// Adicionar Carrinnho
let cartStatus = document.querySelector('#cart-status')
let productName = document.querySelector('#produtoNome')
let productQntd = document.querySelector('#products-number')
let productValor = document.querySelector('#produtoValor')
let btnAdicionaItem = document.querySelectorAll('#adiciona-produto')
for(var i = 0; i < btnAdicionaItem.length; i++) {
    btnAdicionaItem[i].addEventListener('click', ()=> {
        cartStatus.innerHTML = 1
    })
}
