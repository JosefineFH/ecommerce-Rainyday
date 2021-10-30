const url = "https://josefineholth.one/wp-json/wc/store/products?per_page=100";

const weRecommend = document.querySelector(".we_recommend")
const womansJackets = document.querySelector(".ladies_jackets")
const mensJackets = document.querySelector(".mens-jackets");
const onSale = document.querySelector(".on_sale")

const discoundIcon = document.querySelector(".discount-icon");

const productCardSetId = document.querySelector(".product_card")



// let onsale;
let tagsSlug;
fetch(url)
    .then(response => response.json())
    .then(data => {
        let products = data

        for (let i = 0; i < products.length; i++) {
            // onsale = products[i].on_sale
            let tags = products[i].tags
            for (let t = 0; t < tags.length; t++) {
                tagsSlug = tags[t].slug
                if (tagsSlug === "recommended") {
                    weRecommend.innerHTML += `
                    <article class="product_card">
                    <a href="/specific-jacket-page.html?id=${products[i].id}">
                    <div class="discount-icon">
                    
                    </div>
                    <img src="${products[i].images[0].src}" alt="Hiker W Jacket Woman Mirage">
                    <h3> ${products[i].name}</h3>
                    <p class="prise-card">${products[i].prices.currency_symbol} ${products[i].prices.price}</p>
                    </a>
                    </article>`
                }

                if (tagsSlug === "recommended-woman") {
                    womansJackets.innerHTML += `
                    <article class="product_card">
                    <a href="/specific-jacket-page.html?id=${products[i].id}">
                    <div class="discount-icon">
                    
                    </div>
                    <img src="${products[i].images[0].src}" alt="Hiker W Jacket Woman Mirage">
                    <h3> ${products[i].name}</h3>
                    <p class="prise-card">${products[i].prices.currency_symbol} ${products[i].prices.price}</p>                    
                    </a>
                    </article>`
                }

                if (tagsSlug === "recommended-men") {
                    mensJackets.innerHTML += ` <article class="product_card">
                    <a href="/specific-jacket-page.html?id=${products[i].id}">                    
                    <div class="discount-icon">
                    
                    </div>
                    <img src="${products[i].images[0].src}" alt="Hiker W Jacket Woman Mirage">
                    ${products[i].on_sale}
                    <h3> ${products[i].name}</h3>
                    <p class="prise-card">${products[i].prices.currency_symbol} ${products[i].prices.price}</p>                    </a>
                    </article>`
                }

            }
            if (products[i].on_sale === true) {
                console.log(products[i].on_sale)

                onSale.innerHTML += ` <article class="product_card">
                <a href="/specific-jacket-page.html?id=${products[i].id}">                
                <div class="discount-icon">
                
                </div>
                <img src="${products[i].images[0].src}" alt="Hiker W Jacket Woman Mirage">
                <h3> ${products[i].name}</h3>
                <p class="prise-card">${products[i].prices.currency_symbol} ${products[i].prices.price}</p>
                </a>
                </article>`
            }

        }
    })
    .catch(error => {
        console.log(error)
    })