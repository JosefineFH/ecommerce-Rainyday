let shoppingCartStorage = window.localStorage.getItem('itemsInShoppingCount');

let shoppingCart = document.querySelector("#addToCart");
let shoppingCartCounter = document.querySelector(".shppingCardCounter");

const addToCartButton = document.querySelector("#addToCart");
const cartContent = document.querySelector(".overlay");
const closeButton = document.querySelector("#closeWindow");


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

/* -------------------------------------------------------------------------- */
/*                    Adds number to shopping card counter                    */
/* -------------------------------------------------------------------------- */
function addToCart() {
    if(shoppingCartStorage === null){
        shoppingCartStorage = 0;
    } else {
        shoppingCartStorage++;
        console.log(shoppingCartStorage);
    }

    window.localStorage.setItem('itemsInShoppingCount', shoppingCartStorage);
    shoppingCartCounter.innerHTML = `${shoppingCartStorage}`;
}

shoppingCart.addEventListener("click", addToCart);

function showCart(){
    console.log("your shopping cart");
    cartContent.classList.toggle("show");
}
addToCartButton.addEventListener("click", showCart);

function closeCart(){
    console.log("close")
    cartContent.classList.remove("show");
}
closeButton.addEventListener("click", closeCart);