const shoppingCart = document.querySelector("#sections");
const shoppingCartMessage = document.querySelector(".shoppingCartMessage");

// let cart = JSON.parse(localStorage.getItem('shoppingCartItems'));

const productCountShow = document.querySelector(".priceCount");

const count = document.querySelector(".checkout-price");
let jacketCount = document.querySelector(".storage-count");
// let jacketPrice = "1399";
// let totalPrice;

/* --------------------------------- buttons -------------------------------- */
const emptyCart = document.querySelector(".emptyCart");
const goToCheckout = document.querySelector(".goToCheckout")

const shoppingCartSection = document.querySelector(".shoppingCartSection");

displayShoppingCart();

function displayShoppingCart() {
    let cartResult;


    if (cart === null || cart === "0") {
        shoppingCart.classList.add("hide");

    } else {
        cartResult = [...cart.reduce((shoppingCart, id) => {
                if (!shoppingCart.has(id.jacketId))
                    shoppingCart.set(id.jacketId, {
                        ...id,
                        count: '0'
                    });

                shoppingCart.get(id.jacketId).count++;
                return shoppingCart;
            },
            new Map
        ).values()];

        for (var i in cartResult) {
            let jacketIds = cartResult[i].jacketId;
            let jacketIdsCount = cartResult[i].count
            const url = `https://josefineholth.one/wp-json/wc/store/products/${jacketIds}`

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    let product = data;

                    if (jacketIds == product.id) {
                        let price = product.prices.price * jacketIdsCount;

                        shoppingCartSection.innerHTML += `
                        <img class="product_img vertical-center" src="${product.images[0].src}" alt="${product.images[0].alt}"/>
                        <div class="jacketInfo">
                        <h2>${product.name}</h2>
                        <div class="priceCount">
                          <div>
                            <p class="vertical-center">
                            Prize: ${product.prices.currency_symbol}<span class="checkout-price"> ${price} </span>
                            </p>
                          </div>
                          <div class="button-counter">
                            <button class="minusButton">-</button>
                            <p class="storage-count">${jacketIdsCount}</p>
                            <button class="plussButton">+</button>
                          </div>
                        </div>
                        `
                    }
                    productName = product.name
                })
        }

        shoppingCartMessage.classList.add("hide");
    }
    if (cart === "0") {
        console.log("empty");
        minusButton.disabled = true;
        shoppingCart.classList.add("hide");
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
    cart++;

    window.localStorage.setItem('itemsInShoppingCount', cart);
    jacketCount.innerHTML = `${cart}`

    location.reload();
}
// plussButton.addEventListener("click", pluss);


const minusButton = document.querySelector(".minusButton");

function minus() {
    console.log("minus");
    shoppingCartItemStorage--;

    window.localStorage.setItem('itemsInShoppingCount', cart);
    jacketCount.innerHTML = `${cart}`

    location.reload();
}
// minusButton.addEventListener("click", minus);

function goToCheckoutPage() {
    console.log("you are now checking out");
    // console.log(totalPrice)
    // window.localStorage.setItem('shoppingPrice', totalPrice);
}
setTimeout(goToCheckoutPage, 3000);
goToCheckout.addEventListener("click", goToCheckoutPage);