let shoppingCartStorage = window.localStorage.getItem('itemsInShoppingCount');
let shoppingCartCounter = document.querySelector(".shoppingCardCounter");

displayShoppingCartCount();
function displayShoppingCartCount() {

    if (shoppingCartStorage === null) {
        shoppingCartStorage = 0;

    } else {
        shoppingCartCounter.innerHTML = `${shoppingCartStorage}`;
    }
}