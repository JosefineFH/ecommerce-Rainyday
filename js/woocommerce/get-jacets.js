const url = "https://josefineholth.one/wp-json/wc/store/products?per_page=100";

const weRecommend = document.querySelector(".we_recommend");
const womansJackets = document.querySelector(".ladies_jackets");
const mensJackets = document.querySelector(".mens-jackets");
const onSale = document.querySelector(".on_sale");

const productCardSetId = document.querySelector(".product_card");

let tagsSlug;
fetch(url)
    .then(response => response.json())
    .then(data => {
        let products = data

        for (let i = 0; i < products.length; i++) {
            let tags = products[i].tags

            for (let t = 0; t < tags.length; t++) {
                tagsSlug = tags[t].slug

                
                
                if (tagsSlug === "recommended") {
                    weRecommend.innerHTML += `
                    <article class="product_card">
                    <a href="/specific-jacket-page.html?id=${products[i].id}">
                    <img src="${products[i].images[0].src}" alt="${products[i].images[0].alt}">
                    <h3> ${products[i].name}</h3>
                    <p class="prise-card">${products[i].prices.currency_symbol} ${products[i].prices.price}</p>
                    </a>
                    </article>`;

                } else if (tagsSlug === "recommended-woman") {
                    womansJackets.innerHTML += `
                    <article class="product_card">
                    <a href="/specific-jacket-page.html?id=${products[i].id}">
                    <img src="${products[i].images[0].src}" alt="${products[i].images[0].alt}">
                    <h3> ${products[i].name}</h3>
                    <p class="prise-card">${products[i].prices.currency_symbol} ${products[i].prices.price}</p>                    
                    </a>
                    </article>`;
                } else if (tagsSlug === "recommended-men") {
                    mensJackets.innerHTML += ` 
                    <article class="product_card">
                    <a href="/specific-jacket-page.html?id=${products[i].id}">                    
                    <img src="${products[i].images[0].src}" alt="${products[i].images[0].alt}">
                    <h3> ${products[i].name}</h3>
                    <p class="prise-card">${products[i].prices.currency_symbol} ${products[i].prices.price}</p>                    
                    </a>
                    </article>`;
                }

            }
            if (products[i].on_sale === true) {
                onSale.innerHTML += ` 
                <article class="product_card">
                <a href="/specific-jacket-page.html?id=${products[i].id}">                
                <img src="${products[i].images[0].src}" alt="${products[i].images[0].alt}">
                <h3> ${products[i].name}</h3>
                <p class="prise-card">${products[i].prices.currency_symbol} ${products[i].prices.price}</p>
                </a>
                </article>`;
            }


            // const dispalyOnSale = document.querySelectorAll(".discount-icon");
            // dispalyOnSale.classList.add("trues");

            // if (products[i].on_sale == true) {
            //     console.log(products[i].on_sale);
            //     console.log(products[i].name);
            //     // console.log(dispalyOnSale);
            //     // console.log(dispalyOnSale)
            //     // dispalyOnSale.innerHTML += `<p> On Sale </p>`
            // }
        }
    })
    .catch(error => {
        console.log(error)
    })