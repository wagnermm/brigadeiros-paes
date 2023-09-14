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
let productImg = document.querySelector('#produtoImg');
let removeProductButton = document.querySelector('#remove-product');
let btnAdicionaItem = document.getElementsByClassName('adiciona-produto');
let num = 0;

// Incrementa Valor no Ícone
for(var i = 0; i < btnAdicionaItem.length; i++) {
    btnAdicionaItem[i].addEventListener('click', ()=> {
        num++
        num = (num < 6) ? '0' + num : num;
        cartStatus.innerHTML = num;
    });
};


// Adiciona produto
let btn1 = document.querySelector('#productSelect-1').addEventListener('click', function() {
    productName.innerHTML = "Brigaderio Belga";
    productQntd.innerHTML = "1";
    productValor.innerHTML = "90";
    productImg.innerHTML = "<img src='images/brigadeiro.jpg'>"
});
let btn2 = document.querySelector('#productSelect-2').addEventListener('click', function() {
    productName.innerHTML = "Brigaderio de Paçoca";
    productQntd.innerHTML = "1";
    productValor.innerHTML = "90";
    productImg.innerHTML = "<img src='images/pacoca.jpg'>"
});
let btn3 = document.querySelector('#productSelect-3').addEventListener('click', function() {
    productName.innerHTML = "Copinhos de Chocolate";
    productQntd.innerHTML = "1";
    productValor.innerHTML = "100";
    productImg.innerHTML = "<img src='images/copinhos.jpg'>"
});
let btn4 = document.querySelector('#productSelect-4').addEventListener('click', function() {
    productName.innerHTML = "Brigaderio de Óreo";
    productQntd.innerHTML = "1";
    productValor.innerHTML = "90";
    productImg.innerHTML = "<img src='images/bolacha.jpg'>"
});
let btn5 = document.querySelector('#productSelect-5').addEventListener('click', function() {
    productName.innerHTML = "Brigaderio de Maracujá";
    productQntd.innerHTML = "1";
    productValor.innerHTML = "90";
    productImg.innerHTML = "<img src='images/maracuja.jpg'>"
});
let btn6 = document.querySelector('#productSelect-6').addEventListener('click', function() {
    productName.innerHTML = "Brigaderios Gourmett";
    productQntd.innerHTML = "1";
    productValor.innerHTML = "100";
    productImg.innerHTML = "<img src='images/frutas.jpg'>"
});


// Remove produto
removeProductButton.addEventListener('click', function() {
    for(var i = 0; i < allProducts.length; i++) {
        if(allProducts) {
            productName.remove();
            productQntd.remove();
            productValor.remove();
            productImg.remove();
        };
    };
});


// Lista Objetos
let allProducts = [
    {
        id: 0,
        name: 'Brigadeiro Belga',
        qntd: 1,
        price: [90.00],
        image: "<img src='images/brigadeiro.jpg'>"
    },
    {
        id: 1,
        name: 'Brigadeiro de Paçoca',
        qntd: 1,
        price: [90.00],
        image: "<img src='images/pacoca.jpg'>"
    },
    {
        id: 2,
        name: 'Copinhos de Chocolate',
        qntd: 1,
        price: [100.00],
        image: "<img src='images/copinhos.jpg'>"
    },
    {
        id: 3,
        name: 'Brigadeiro de Óreo',
        qntd: 1,
        price: [90.00],
        image: "<img src='images/bolacha.jpg'>"
    },
    {
        id: 4,
        name: 'Brigadeiro de Maracujá',
        qntd: 1,
        price: [90.00],
        image: "<img src='images/maracuja.jpg'>"
    },
    {
        id: 5,
        name: 'Brigadeiros Gourmet',
        qntd: 1,
        price: [100.00],
        image: "<img src='images/frutas.jpg'>"
    }
];

