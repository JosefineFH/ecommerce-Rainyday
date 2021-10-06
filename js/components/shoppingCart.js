const shoppingCart = document.querySelector("#sections");
const shoppingCartMessage = document.querySelector(".shoppingCartMessage");
let shoppingCartStorage = window.localStorage.getItem('itemsInShoppingCount');

const productCountShow = document.querySelector(".priceCount");

const count = document.querySelector(".checkout-price");
let jacketCount = document.querySelector(".storage-count");
let jacketPrice = "1399";
let totalPrice;

/* --------------------------------- buttons -------------------------------- */
const emptyCart = document.querySelector(".emptyCart");
const goToCheckout = document.querySelector(".goToCheckout")


displayShoppingCart();

function displayShoppingCart() {

    if (shoppingCartStorage === null || shoppingCartStorage === "0") {
        shoppingCart.classList.add("hide");

    } else {
        shoppingCartMessage.classList.add("hide");

        totalPrice = jacketPrice * shoppingCartStorage;

        count.innerHTML += `${totalPrice}`;
        jacketCount.innerHTML += `${shoppingCartStorage}`;
    }
    if (shoppingCartStorage === "0") {
        console.log("empty");
        minusButton.disabled = true;
        shoppingCart.classList.add("hide");

    } else {
        console.log("not empty")
    }

}

function emptyShoppingCart() {
    console.log("empty");
    localStorage.clear();
    location.reload();
}
emptyCart.addEventListener("click", emptyShoppingCart);


const plussButton = document.querySelector(".plussButton");

function pluss() {
    shoppingCartStorage++;

    window.localStorage.setItem('itemsInShoppingCount', shoppingCartStorage);
    jacketCount.innerHTML = `${shoppingCartStorage}`

    location.reload();
}
plussButton.addEventListener("click", pluss);


const minusButton = document.querySelector(".minusButton");

function minus() {
    console.log("minus");
    shoppingCartStorage--;

    window.localStorage.setItem('itemsInShoppingCount', shoppingCartStorage);
    jacketCount.innerHTML = `${shoppingCartStorage}`

    location.reload();
}
minusButton.addEventListener("click", minus);

function goToCheckoutPage(){
    console.log("you are now checking out");
    console.log(totalPrice)
    window.localStorage.setItem('shoppingPrice', totalPrice);
}
setTimeout(goToCheckoutPage, 3000);
goToCheckout.addEventListener("click", goToCheckoutPage);