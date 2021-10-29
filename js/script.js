let shoppingCart = document.querySelector("#addToCart");
let productId = window.localStorage.getItem('productId');


const addToCartButton = document.querySelector("#addToCart");
const cartContent = document.querySelector(".overlay");
const closeButton = document.querySelector("#closeWindow");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");



// console.log(productId)
/* -------------------------------------------------------------------------- */
/*                    Adds number to shopping card counter                    */
/* -------------------------------------------------------------------------- */
// console.log(shoppingCartStorage.length)
function addToCart() {
    if (shoppingCartStorage === null) {
        shoppingCartStorage = 0;
    } else {
        shoppingCartStorage++;
    }
    
    const retrieveProductCountAndId = JSON.parse(localStorage.getItem('productCountAndId'));
    let count = 1
    let productCountAndId = [{
        "id": id,
        "count": count
    }]
    if(retrieveProductCountAndId){
        console.log("This exists")
        console.log(retrieveProductCountAndId)
        window.localStorage.setItem('productCountAndId', JSON.stringify(retrieveProductCountAndId));
        let newCount;
        
        for(let i = 0; i < retrieveProductCountAndId.length; i++){
            console.log(retrieveProductCountAndId[i].id)
            if(retrieveProductCountAndId[i].id === id){
                
                newCount = retrieveProductCountAndId[i].count
                newCount++

                productCountAndId = {
                    "id": id,
                    "count": newCount
                }
                retrieveProductCountAndId = retrieveProductCountAndId ? retrieveProductCountAndId.split(',') : [];
                retrieveProductCountAndId.push(productCountAndId);
                localStorage.setItem('productCountAndId', JSON.stringify(productCountAndId));
                console.log(true)
            } else {
                console.log(false)
                productCountAndId.push(JSON.parse(localStorage.getItem('productCountAndId')));
                localStorage.setItem('productCountAndId', JSON.stringify(productCountAndId))
                
            }
        }
        console.log(newCount)
    } else {
        console.log("this does not exist")
        window.localStorage.setItem('productCountAndId', JSON.stringify(productCountAndId));
    }


    // if (shoppingCartStorage === null) {
    //     shoppingCartStorage = 0;
    // } else {
    //     shoppingCartStorage++;
    //     // console.log(shoppingCartStorage);
    // }

    window.localStorage.setItem('itemsInShoppingCount', shoppingCartStorage);
    // window.localStorage.setItem('productId', id);

    shoppingCartCounter.innerHTML = `${shoppingCartStorage}`;
}

shoppingCart.addEventListener("click", addToCart);

function showCart() {
    cartContent.classList.toggle("show");
}
addToCartButton.addEventListener("click", showCart);

function closeCart() {
    cartContent.classList.remove("show");
}
closeButton.addEventListener("click", closeCart);