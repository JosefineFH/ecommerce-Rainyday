const url = "https://josefineholth.one/wp-json/wc/store/products?per_page=100";

const jacketsForTheLadies = document.querySelector(".jackets_woman");
const jacketsForTheMen = document.querySelector(".jackets-men");
let tagsSlug;
fetch(url)
    .then(response => response.json())
    .then(data => {
        let products = data

        for (let i = 0; i < products.length; i++) {
            // onsale = products[i].on_sale
            console.log(products[i].images[0].alt)
            let tags = products[i].tags
            for (let t = 0; t < tags.length; t++) {

                tagsSlug = tags[t].slug

                if (tagsSlug === "womans-jackets") {
                    jacketsForTheLadies.innerHTML += `
                    <article class="product_card">
                        <a href="/specific-jacket-page.html?id=${products[i].id}">

                            <img src="${products[i].images[0].src}"
                                alt="${products[i].images[0].alt}" />
                            <h3>${products[i].name}</h3>
                            <p class="prise-card"><p class="prise-card">${products[i].prices.currency_symbol} ${products[i].prices.price}</p></p>
                            <div class="button vertical-center"> view jacket</div>
                        </a>
                    </article>
                    `
                }
                // console.log(tags)
                if (tagsSlug === "mens-jackets") {

                    jacketsForTheMen.innerHTML += `
                    <article class="product_card">
                        <a href="/specific-jacket-page.html?id=${products[i].id}">

                            <img src="${products[i].images[0].src}"
                                alt="${products[i].images[0].alt}" />
                            <h3>${products[i].name}</h3>
                            <p class="prise-card"><p class="prise-card">${products[i].prices.currency_symbol} ${products[i].prices.price}</p></p>
                            <div class="button vertical-center"> view jacket</div>
                        </a>
                    </article>
                    `
                }

            }
        }
    })