// let shoppingCartStorage = window.localStorage.getItem('itemsInShoppingCount');
let shoppingCartCounter = document.querySelector(".shoppingCardCounter");

let cart = JSON.parse(localStorage.getItem('shoppingCartItems'));

displayShoppingCartCount();
function displayShoppingCartCount() {

    if (cart === null) {
        cart = 0;

    } else {
        shoppingCartCounter.innerHTML = cart.length;
    }
}