// Menu Mobile
var openProductsMobile = document.querySelector('#products-visible-mobile').addEventListener('click', function() {
    document.querySelector('#products').style.visibility="visible";
});

var openMobile = document.querySelector('.btn-mobile').addEventListener('click', function() {
    document.querySelector('.menu-mobile').style.visibility="visible";
});

var closeMobile = document.querySelector('.close-menu, .menu-mobile').addEventListener('click', function() {
    document.querySelector('.menu-mobile').style.visibility="hidden";
});

// Shopping Cart
var listCartIsVisible = document.querySelector('#cart-btn').addEventListener('click', ()=> {
    document.querySelector('#cart-list').style.visibility='visible';
})
var listCartIsNotVisible = document.querySelector('#close-cartList').addEventListener('click', ()=> {
    document.querySelector('#cart-list').style.visibility='hidden';
});

// Seleciona elementos
let cartStatus = document.querySelector('#cart-status');
let cartList = document.querySelector('#cart-listProducts');
let productName = document.querySelector('#produtoNome');
let productQntd = document.querySelector('#produtoQntd');
let productValor = document.querySelector('#produtoValor');
let btnAdicionaItem = document.querySelectorAll('#adiciona-produto');
let num = 0;

// Lista Objetos
let allProducts = [
    {
        id: 0,
        name: 'Brigadeiro Belga',
        qntd: 0,
        price: [90.00]
    },
    {
        id: 1,
        name: 'Brigadeiro de Paçoca',
        qntd: 0,
        price: [90.00]
    },
    {
        id: 2,
        name: 'Copinhos de Chocolate',
        qntd: 0,
        price: [100.00]
    },
    {
        id: 3,
        name: 'Brigadeiro de Óreo',
        qntd: 0,
        price: [90.00]
    },
    {
        id: 4,
        name: 'Brigadeiro de Maracujá',
        qntd: 0,
        price: [90.00]
    },
    {
        id: 5,
        name: 'Brigadeiros Gourmet',
        qntd: 0,
        price: [100.00]
    }
];


// Incrementa Valor no Ícone
for(var i = 0; i < btnAdicionaItem.length; i++) {
    btnAdicionaItem[i].addEventListener('click', ()=> {
        num++
        num = (num < 6) ? '0' + num : num;
        cartStatus.innerHTML = num;
    });
};


// Adiciona produto
function getProducts() {
    return allProducts;
};
for(var i = 0; i < btnAdicionaItem.length; i++) {
    btnAdicionaItem[i].addEventListener('click', ()=> {
        productName.innerHTML = allProducts.name;
        productQntd.innerHTML = allProducts.qntd;
        productValor.innerHTML = allProducts.price;
    });
};

// Remove produto
function ready() {
    const removeProductButton = document.querySelectorAll('#remove-product');
    for(var i = 0; i < removeProductButton; i++) {
        removeProductButton[i].addEventListener('click', function(event) {
            event.target.parentElement.parentElement.remove();
            updateTotal()
        });
    };
};