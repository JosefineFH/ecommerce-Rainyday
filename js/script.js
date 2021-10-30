let shoppingCart = document.querySelector("#addToCart");
let productId = window.localStorage.getItem('productId');


const addToCartButton = document.querySelector("#addToCart");
const cartContent = document.querySelector(".overlay");
const closeButton = document.querySelector("#closeWindow");
const overlayContent = document.querySelector(".overlayContent")

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

// console.log(shoppingCartStorage.length)
function addToCart() {
    let items = {
        jacketId: id
    }

    cart = [];

    // Parse the serialized data back into an array of objects
    cart = JSON.parse(localStorage.getItem('shoppingCartItems')) || [];

    // Push the new data (whether it be an object or anything else) onto the array
    cart.push(items);

    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('shoppingCartItems', JSON.stringify(cart));

    shoppingCartCounter.innerHTML = cart.length;

}

shoppingCart.addEventListener("click", addToCart);

function showCart() {
    cartContent.classList.toggle("show");

    const url = `https://josefineholth.one/wp-json/wc/store/products/${id}`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        let product = data
        console.log(product)
        overlayContent.innerHTML = `
        <img class="product-img" src="${product.images[0].src}" alt="${product.images[0].alt}"/>
          <h4>${product.name}</h4>
          <h4 class="prise-card">${product.prices.currency_symbol} ${product.prices.price}</h4>
        `
    })    
    

    /**
     * Add so the data shows up her, img, name and price on the jacket. Use the api
     */
}
addToCartButton.addEventListener("click", showCart);

function closeCart() {
    cartContent.classList.remove("show");
}
closeButton.addEventListener("click", closeCart);