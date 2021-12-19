const shoppingCart = document.querySelector("#sections");
const shoppingCartMessage = document.querySelector(".shoppingCartMessage");
const productCountShow = document.querySelector(".priceCount");
const count = document.querySelector(".checkout-price");
const emptyCart = document.querySelector(".emptyCart");
const goToCheckout = document.querySelector(".goToCheckout");
const shoppingCartSection = document.querySelector(".shoppingCartSection");
const buttonSection = document.querySelector('.buttons')
const shoppingCartCount = document.querySelector('.shoppingCardCounter')

let jacketCount = document.querySelector(".storage-count");
let minusButton;
let cartResult;


if (cart === null || cart === 0) {
    buttonSection.style.display = 'none'
    shoppingCartMessage.style.display = 'block';

} else {
    shoppingCartMessage.style.display = 'none';
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
            <button class="minusButton" id="${jacketIds}">-</button>
            <p class="storage-count" id="${jacketIds}">${jacketIdsCount}</p>
            <button class="plussButton" id="${jacketIds}">+</button>
            </div>
            </div>
            `
                }

                const countDisplay = document.querySelectorAll('.storage-count');
                const minusButtonNodeList = document.querySelectorAll('.minusButton');

                minusButtonNodeList.forEach(minusButtonNodeList => {
                    minusButtonNodeList.addEventListener('click', (event) => {
                        cart = JSON.parse(localStorage.getItem('shoppingCartItems')) || [];
                        
                        let buttonId = minusButtonNodeList
                        let jacketId = event.target.id


                        for (let c = 0; c < cartResult.length; c++) {
                            if (buttonId.id === cartResult[c].jacketId) {
                                for (let i in cart) {
                                    
                                    if (jacketId === cart[i].jacketId) {
                                        cart.findIndex(i => i.id === cart)
                                        cart.splice(i, 1)
                                        cartResult[c].count--
                                        countDisplay.forEach(element => {
                                            if (element.id == cartResult[c].jacketId) {
                                                
                                                element.innerHTML = cartResult[c].count;
                                                shoppingCartCount.innerHTML = cart.length
                                            }
                                        })
                                        break;
                                    }
                                }
                            }
                        }
                        localStorage.setItem('shoppingCartItems', JSON.stringify(cart))
                    })
                })

                const plussButtonNodeList = document.querySelectorAll('.plussButton');
                plussButtonNodeList.forEach(plussButtonNodeList => {
                    plussButtonNodeList.addEventListener('click', (event) => {
                        cart = JSON.parse(localStorage.getItem('shoppingCartItems')) || [];
                        let buttonId = plussButtonNodeList
                        let jacketId = event.target.id

                        for (let c = 0; c < cartResult.length; c++) {

                            if (buttonId.id === cartResult[c].jacketId) {
                                cartResult[c].count++
                                countDisplay.forEach(element => {
                                    if (element.id == cartResult[c].jacketId) {
                                        element.innerHTML = cartResult[c].count;
                                        shoppingCartCount.innerHTML = cart.length
                                        items = {
                                            jacketId: jacketId
                                        }
                                        cart.push(items);
                                    }
                                })
                            }
                        }
                        localStorage.setItem('shoppingCartItems', JSON.stringify(cart))
                    })
                })
                let getPrice = document.querySelectorAll('.checkout-price')
                goToCheckout.addEventListener("click", () => {
                    let price = product.prices.price * jacketIdsCount;
                    
                    console.log(price.toString())
                    
                    window.localStorage.setItem('shoppingPrice', price);
                    
                });
            })
    }

}
if (cart === "0") {
    
    minusButton.disabled = true;
    shoppingCart.classList.add("hide");
}


function emptyShoppingCart() {
    
    localStorage.clear();
    location.reload();
}
emptyCart.addEventListener("click", emptyShoppingCart);


// function goToCheckoutPage() {
//     let price = document.querySelectorAll('.checkout-price')
//     price.forEach(totalPrice => {

//         console.log(totalPrice)

//         window.localStorage.setItem('shoppingPrice', totalPrice);
//     })
    
// }
// setTimeout(goToCheckoutPage, 3000);
// goToCheckout.addEventListener("click", goToCheckoutPage);