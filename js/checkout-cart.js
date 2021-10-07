// let shoppingCartStorage = window.localStorage.getItem('itemsInShoppingCount');
let shoppingStoragePrice = window.localStorage.getItem('shoppingPrice');

let orderCount = document.querySelector(".orderCount");
let checkoutPrice = document.querySelector(".checkout-price");

const form = document.querySelector("form");

orderCount.innerHTML = shoppingCartStorage;
checkoutPrice.innerHTML = shoppingStoragePrice;

const toggle = document.querySelector(".toggleName");
const nameinfo = document.querySelector(".nameInfo");
const addressInfo = document.querySelector(".address_info");
const deliveryInfo = document.querySelector(".delivery_info");
const pymentInfo = document.querySelector(".payment_info");


const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const phoneNumber = document.querySelector("#phone_number");
let persenolValidation = false;

const address = document.querySelector("#address");
const city = document.querySelector("#city");
const zipCode = document.querySelector("#zip_code");
let addressValidation = false;

const deliveryOptions = document.querySelector(".delivery_options");
const deliveryPostenNorway = document.querySelector("#delivery-Posten-Norway");
const deliveryPickUpPoint = document.querySelector("#delivery-pick-up-point");
let deliveryValidation = false;

const paymentOption = document.querySelector(".payment_options");
const cardNumber = document.querySelector("#card_number");
const cardExpirationDate = document.querySelector("#expiration_date");
const cardCvcNumber = document.querySelector("#cvc_number");
const cardholdersName = document.querySelector("#cardholder_name");
let paymentValidation = false;

// toggle.addEventListener("click", function() {
//     content.classList.toggle("show");
//   });
const toggleName = document.querySelector(".toggle_name");
const toggleAddressInfo = document.querySelector(".toggle_address_info");
const toggleDeliveryOption = document.querySelector(".toggle_delivery_info");
const togglePaymentOption = document.querySelector(".toggle_payment_info");

function nameValidationCheck() {
    console.log("name function triggerd");

    if (!lengthCheck(firstName.value, 0) === true && !lengthCheck(lastName.value, 0) === true && !lengthCheck(phoneNumber.value, 8) === true) {
        if (!lengthCheck(firstName.value, 0) === true) {
            console.log("Your first name is missing")
        }
        if (!lengthCheck(lastName.value, 0) === true) {
            console.log("Your last name is missing")
        }
        if (!lengthCheck(phoneNumber.value, 8) === true) {
            console.log("Your phone number is missing")
        }
    } else {
        nameinfo.classList.add("hide")

        addressInfo.classList.remove("hide")
        addressInfo.classList.add("show");

        persenolValidation = true;
    }
}

function addressValidationCheck() {
    console.log("Validating address");

    if (!lengthCheck(address.value, 0) === true && !lengthCheck(city.value, 0) === true && !lengthCheck(zipCode.value, 4) === true) {
        console.log("Your address is missing")
        if (!lengthCheck(address.value, 0) === true) {
            console.log("address is missing")
        }
        if (!lengthCheck(city.value, 0) === true) {
            console.log("Your city is missing")
        }
        if (!lengthCheck(zipCode.value, 4) === true) {
            console.log("Your zipCode is missing")
        }
    } else {
        addressInfo.classList.remove("show");
        addressInfo.classList.add("hide");

        deliveryOptions.classList.remove("hide");
        deliveryOptions.classList.add("show");

        addressValidation = true;
    }
}

function deliveryValidationCheck() {
    console.log("delivery check");

    if (!deliveryPostenNorway.checked === true || deliveryPickUpPoint.checked === true) {
        console.log("Your delivery option is missing");
    } else {
        deliveryValidation = true;

        deliveryOptions.classList.remove("show");
        deliveryOptions.classList.add("hide");

        paymentOption.classList.remove("hide");
        paymentOption.classList.add("show");


    }
}

function paymentValidationCheck() {
    console.log("payment check");
    if (!lengthCheck(cardNumber.value, 4) === true && !lengthCheck(cardExpirationDate.value, 4) === true && !lengthCheck(cardCvcNumber.value, 3) === true && !lengthCheck(cardholdersName.value, 0) === true) {
        if (!lengthCheck(cardNumber.value, 4) === true) {
            console.log("Your card number is missing")
        }
        if (!lengthCheck(cardExpirationDate.value, 4) === true) {
            console.log("Your card Expiration Date is missing")
        }
        if (!lengthCheck(cardCvcNumber.value, 3) === true) {
            console.log("Your card Number is missing")
        }
        if (!lengthCheck(cardholdersName.value, 0) === true) {
            console.log("Your card holders Name is missing")
        }
    } else {
        paymentValidation = true;
    }
}


toggleName.addEventListener("click", nameValidationCheck)
toggleDeliveryOption.addEventListener("click", deliveryValidationCheck);

toggleAddressInfo.addEventListener("click", addressValidationCheck);
togglePaymentOption.addEventListener("click", paymentValidationCheck);


function checkoutValidation(event) {
    event.preventDefault();

    if(persenolValidation === true && addressValidation === true && deliveryValidation === true && paymentValidation === true){
        console.log("Your order has been send to us")
    } else {
        console.log("info is missing")
    }
}









/* -------------------------------------------------------------------------- */
/*                              Validation rules                              */
/* -------------------------------------------------------------------------- */
function emailValidation(email) {
    const symbols = /\S+@\S+\.\S+/;
    const pattern = symbols.test(email);
    return pattern;
}

function lengthCheck(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false
    }
}

form.addEventListener("submit", checkoutValidation);