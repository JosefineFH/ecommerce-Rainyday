const shoppingCart = document.querySelector("#sections");
const shoppingCartMessage = document.querySelector(".shoppingCartMessage");
const productCountShow = document.querySelector(".priceCount");
const count = document.querySelector(".checkout-price");
const emptyCart = document.querySelector(".emptyCart");
const goToCheckout = document.querySelector(".goToCheckout");
const shoppingCartSection = document.querySelector(".shoppingCartSection");

let jacketCount = document.querySelector(".storage-count");
let minusButton;
let cartResult;

shoppingCartMessage.classList.add("hide");


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
    let jacketIdsCount = cartResult[i].count;

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
            <button class="minusButton" id="${product.id}">-</button>
            <p class="storage-count">${jacketIdsCount}</p>
            <button class="plussButton" id="${product.id}">+</button>
            </div>
            </div>
            `

                const minusButtonNodeList = document.querySelectorAll('.minusButton');

                minusButtonNodeList.forEach(minusButtonNodeList => {
                    minusButtonNodeList.addEventListener('click', (event) => {
                        cart = JSON.parse(localStorage.getItem('shoppingCartItems')) || [];
                        for (var i in cart) {
                            let jacketId = event.target.id
                            if (jacketId === cart[i].jacketId) {
                                cart.findIndex(i => i.id === cart);
                                cart.splice(i, 1);
                                break;
                            }
                        }
                        localStorage.setItem('shoppingCartItems', JSON.stringify(cart))
                    })
                })

                const plussButtonNodeList = document.querySelectorAll('.plussButton');

                plussButtonNodeList.forEach(plussButtonNodeList => {
                    plussButtonNodeList.addEventListener('click', (event) => {
                        console.log(plussButtonNodeList)
                        cart = JSON.parse(localStorage.getItem('shoppingCartItems')) || [];
                        for (var i in cart) {
                            let jacketId = event.target.id
                            console.log(jacketId)
                            if (jacketId === cart[i].jacketId) {
                                console.log(jacketId)
                                items = {
                                    jacketId: jacketId
                                }
                                console.log(items)
                                cart.push(items);
                                break;
                            }
                        }
                        localStorage.setItem('shoppingCartItems', JSON.stringify(cart))
                    })
                })
            }
        })
}

}
// if (cart === "0") {
//     console.log("empty");
//     minusButton.disabled = true;
//     shoppingCart.classList.add("hide");
// }


// function emptyShoppingCart() {
//     console.log("empty");
//     localStorage.clear();
//     location.reload();
// }
// emptyCart.addEventListener("click", emptyShoppingCart);


// const plussButton = document.querySelectorAll(".plussButton");

// function pluss() {
//     cart++;

//     window.localStorage.setItem('itemsInShoppingCount', cart);
//     jacketCount.innerHTML = `${cart}`

//     location.reload();
// }
// // plussButton.addEventListener("click", pluss);


// function minus() {
//     console.log(jacketIds)
//     console.log("minus");
//     shoppingCartItemStorage--;

//     // window.localStorage.setItem('itemsInShoppingCount', cart);
//     jacketCount.innerHTML = `${cart}`

//     location.reload();
// }
// // minusButton.addEventListener("click", minus);

// function goToCheckoutPage() {
//     console.log("you are now checking out");
//     console.log(totalPrice)
//     window.localStorage.setItem('shoppingPrice', totalPrice);
// }
// setTimeout(goToCheckoutPage, 3000);
// goToCheckout.addEventListener("click", goToCheckoutPage);