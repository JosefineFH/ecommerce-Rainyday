let shoppingCart = document.querySelector("#addToCart");
let productId = window.localStorage.getItem('productId');


const addToCartButton = document.querySelector("#addToCart");
const cartContent = document.querySelector(".overlay");
const closeButton = document.querySelector("#closeWindow");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");


console.log(productId)
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
    // if(!productId === null){
    //     console.log("there is something her")
    // }
    window.localStorage.setItem('itemsInShoppingCount', shoppingCartStorage);
    window.localStorage.setItem('productId', id );
    shoppingCartCounter.innerHTML = `${shoppingCartStorage}`;
}

shoppingCart.addEventListener("click", addToCart);

function showCart(){
    cartContent.classList.toggle("show");
}
addToCartButton.addEventListener("click", showCart);

function closeCart(){
    cartContent.classList.remove("show");
}
closeButton.addEventListener("click", closeCart);