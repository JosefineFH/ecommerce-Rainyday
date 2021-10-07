let shoppingCartStorage = window.localStorage.getItem('itemsInShoppingCount');
let shoppingCartCounter = document.querySelector(".shoppingCardCounter");

/* -------------------------------------------------------------------------- */
/*                       Displays count on shopping card                      */
/* -------------------------------------------------------------------------- */

displayShoppingCartCount();
function displayShoppingCartCount() {

    if (shoppingCartStorage === null) {
        shoppingCartStorage = 0;

    } else {
        shoppingCartCounter.innerHTML = `${shoppingCartStorage}`;
    }
}