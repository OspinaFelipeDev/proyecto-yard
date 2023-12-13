const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shoping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');

}

const productList = [];
productList.push({
    name: 'Figure',
    price: 120,
    image: 'https://images.pexels.com/photos/16075339/pexels-photo-16075339/free-photo-of-munecas-juguetes-fondo-gris-fondo-de-pantalla-para-el-movil.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Bike',
    price: 150,
    image: 'https://images.pexels.com/photos/16075339/pexels-photo-16075339/free-photo-of-munecas-juguetes-fondo-gris-fondo-de-pantalla-para-el-movil.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Tv',
    price: 200,
    image: 'https://images.pexels.com/photos/16075339/pexels-photo-16075339/free-photo-of-munecas-juguetes-fondo-gris-fondo-de-pantalla-para-el-movil.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Figure',
    price: 120,
    image: 'https://images.pexels.com/photos/16075339/pexels-photo-16075339/free-photo-of-munecas-juguetes-fondo-gris-fondo-de-pantalla-para-el-movil.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Bike',
    price: 150,
    image: 'https://images.pexels.com/photos/16075339/pexels-photo-16075339/free-photo-of-munecas-juguetes-fondo-gris-fondo-de-pantalla-para-el-movil.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Tv',
    price: 200,
    image: 'https://images.pexels.com/photos/16075339/pexels-photo-16075339/free-photo-of-munecas-juguetes-fondo-gris-fondo-de-pantalla-para-el-movil.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});



function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
     
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
     
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
     
        const productInfoDiv = document.createElement('div');
     
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
     
        const productName = document.createElement('p');
        productName.innerText = product.name;
     
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
     
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', 'icons/bt_add_to_cart.svg');
     
        productInfoFigure.appendChild(productImgCart);
     
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
     
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
     
         cardsContainer.appendChild(productCard);
     }
}

renderProducts(productList);