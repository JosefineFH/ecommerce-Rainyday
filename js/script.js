let shoppingCart = document.querySelector("#addToCart");

const addToCartButton = document.querySelector("#addToCart");
const cartContent = document.querySelector(".overlay");
const closeButton = document.querySelector("#closeWindow");


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