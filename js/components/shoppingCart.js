const shoppingCart = document.querySelector("#sections");
const shoppingCartMessage = document.querySelector(".shoppingCartMessage");
let shoppingCartStorage = window.localStorage.getItem('itemsInShoppingCount');

const productCountShow = document.querySelector(".priceCount");

const count = document.querySelector(".checkout-price");
let jacketCount = document.querySelector(".storage-count");
let jacketPrice = "1399";

const emptyCart = document.querySelector(".emptyCart");


displayShoppingCart();

function displayShoppingCart() {

    if (shoppingCartStorage === null) {
        shoppingCart.classList.add("hide");
        
    } else {
        shoppingCartMessage.classList.add("hide");
        
        const totalPrice = jacketPrice * shoppingCartStorage;
        console.log(jacketCount);
        console.log(shoppingCartStorage);

        count.innerHTML += `${totalPrice}`;
        jacketCount.innerHTML += `${shoppingCartStorage}`;
    }
}

function emptyShoppingCart(){
    console.log("empty");
    localStorage.clear();
    location.reload();
}
emptyCart.addEventListener("click", emptyShoppingCart);


const plussButton = document.querySelector(".plussButton");

function pluss(){
    shoppingCartStorage++;

    window.localStorage.setItem('itemsInShoppingCount', shoppingCartStorage);
    jacketCount.innerHTML = `${shoppingCartStorage}`

    location.reload();
}
plussButton.addEventListener("click", pluss);


const minusButton = document.querySelector(".minusButton");
function minus(){
    console.log("minus");
    shoppingCartStorage--;

    window.localStorage.setItem('itemsInShoppingCount', shoppingCartStorage);
    jacketCount.innerHTML = `${shoppingCartStorage}`

    location.reload();
}
minusButton.addEventListener("click", minus);