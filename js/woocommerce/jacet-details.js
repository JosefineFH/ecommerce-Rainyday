// console.log("jackets details")
// // const queryString = document.location.search;
// console.log(queryString)

// // const params = new URLSearchParams(queryString);
// console.log(params)

// // const id = params.get("id");
// console.log(id)



const url = `https://josefineholth.one/wp-json/wc/store/products/${id}`

const productDetails = document.querySelector(".product_details");

// console.log(url)

async function getSingleJacketDetails(){
    try{
        const response = await fetch(url);
        
        const jacket = await response.json();

        productDetails.innerHTML += `
        <img class="product-img" src="${jacket.images[0].src}" alt="${jacket.images[0].alt}">
        <h1>${jacket.name}</h1>
        ${jacket.description}
      <h2 class="prise-card">${jacket.price_html}</h2>
        `
        // console.log(jacket.images[0].alt)
    } catch (error){
        // console.log(error)
    }
}
getSingleJacketDetails();