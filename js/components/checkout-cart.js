let shoppingCartStorage = window.localStorage.getItem('itemsInShoppingCount');
let shoppingStoragePrice = window.localStorage.getItem('shoppingPrice');

let orderCount = document.querySelector(".orderCount");
let checkoutPrice = document.querySelector(".checkout-price");

const form = document.querySelector("form");

orderCount.innerHTML = shoppingCartStorage;
checkoutPrice.innerHTML = shoppingStoragePrice;

function checkoutValidation(){}

function emailValidation(email){
    const symbols = /\S+@\S+\.\S+/;
    const pattern = symbols.test(email);
    return pattern;
}
function lenghtCheck(value, len){
    if(value.trim().length > len){
        return true;
    } else {
        return false
    }
}


form.addEventListener("submit", formValidation);