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

const toggleName = document.querySelector(".toggle_address");

const toggleAddressInfo = document.querySelector(".toggle_delivery_info");
const toggleDeliveryOption = document.querySelector(".toggle_payment_info");
const togglePaymentOption = document.querySelector(".payment");
const submitButton = document.querySelector(".submit_button");

/* --------------------------- span error messages -------------------------- */
const errorMessageFirstName = document.querySelector(".error_first_name");
const errorMessageLastName = document.querySelector(".error_last_name");
const errorPhoneNumber = document.querySelector(".error_phone_number");
const errorAddress = document.querySelector(".error_address");
const errorCity = document.querySelector(".error_city");
const errorZipCode = document.querySelector(".error_zip_code");
const errorDelivery = document.querySelector(".error_delivery");
const errorCardNumber = document.querySelector(".error_card_number")
const errorExpirationDate = document.querySelector(".error_expire_date")
const errorCVC = document.querySelector(".error_cvc")
const errorCardHolderName = document.querySelector(".error_cardholder_name")

/* -------------------------------- functions ------------------------------- */
function nameValidationCheck() {
    if (!lengthCheck(firstName.value, 0) === true) {
        errorMessageFirstName.innerHTML = "* Your first name is missing";

    } else {
        errorMessageFirstName.style.display = "none"
    }
    if (!lengthCheck(lastName.value, 0) === true) {
        errorMessageLastName.innerHTML = "* Your last name is missing";
    } else {
        errorMessageLastName.style.display = "none";
    }
    if (!lengthCheck(phoneNumber.value, 7) === true) {
        errorPhoneNumber.innerHTML = "* Your phone number is missing";
    } else {
        errorPhoneNumber.style.display = "none"
    }
    if (lengthCheck(firstName.value, 0) === true && lengthCheck(lastName.value, 0) === true && lengthCheck(phoneNumber.value, 8) === true) {
        nameinfo.style.display = "none"
        addressInfo.style.display = "unset"
        
        if (nameinfo.classList.contains("hide")) {
            console.log("fix this shit with the buttons");
        }
        persenolValidation = true;
    }
}

function addressValidationCheck() {
    // toggleName.style.display = "none";

    if (!lengthCheck(address.value, 0) === true) {
        errorAddress.innerHTML = "* Address is missing";
    } else {
        errorAddress.style.display = "none";
    }
    if (!lengthCheck(city.value, 0) === true) {
        errorCity.innerHTML = "* City is missing";
    } else {
        errorCity.style.display = "none";
    }
    if (!lengthCheck(zipCode.value, 4) === true) {
        errorZipCode.innerHTML = "* Your zip code is missing or to short";
    } else {
        errorZipCode.style.display = "none";
    }
    if (lengthCheck(address.value, 0) === true && lengthCheck(city.value, 0) === true && lengthCheck(zipCode.value, 3) === true) {
        addressInfo.style.display  = "none";
        deliveryOptions.style.display = "unset"

        addressValidation = true;
    }
}

deliveryPostenNorway.onclick = function () {
    if (deliveryPostenNorway.checked == true) {
        deliveryPickUpPoint.disabled = true;
    } else {
        deliveryPickUpPoint.disabled = false;
    }
}

deliveryPickUpPoint.onclick = function () {
    if (deliveryPickUpPoint.checked == true) {
        deliveryPostenNorway.disabled = true
    } else {
        deliveryPickUpPoint.disabled = false;
    }
}


function deliveryValidationCheck() {
    if (deliveryPostenNorway.checked == true || deliveryPickUpPoint.checked == true) {
        deliveryValidation = true;
        
        deliveryOptions.style.display = "none";
        
        paymentOption.style.display ="unset"
    } else {
        errorDelivery.innerHTML = "* You have to choose a delivery method";
        console.log("this is not true")
    }
}

function paymentValidationCheck() {
    console.log("payment check");

    if (!lengthCheck(cardNumber.value, 4) === true) {
        errorCardNumber.innerHTML = "* Credit card number missing or to short"
    } else {
        errorCardNumber.style.display = "none";
    }
    if (!lengthCheck(cardExpirationDate.value, 4) === true) {
        errorExpirationDate.innerHTML = "* The expiration date has not been filled out or has the wrong format"
    } else {
        errorExpirationDate.style.display = "none";
    }
    if (!lengthCheck(cardCvcNumber.value, 3) === true) {
        errorCVC.innerHTML = "* CVC number is missing or to short";
    } else {
        errorCVC.style.display = "none";
    }
    if (!lengthCheck(cardholdersName.value, 0) === true) {
        errorCardHolderName.innerHTML = "* The card holder name is missing";
    } else {
        errorCardHolderName.style.display = "none";
    }
    if (lengthCheck(cardNumber.value, 4) === true && lengthCheck(cardExpirationDate.value, 4) === true && lengthCheck(cardCvcNumber.value, 3) === true && lengthCheck(cardholdersName.value, 0) === true) {
        paymentValidation = true;
    }
}

function checkoutValidation(event) {
    event.preventDefault();

    if (persenolValidation === true && addressValidation === true && deliveryValidation === true && paymentValidation === true) {
        setTimeout(function () {
            form.submit();
            window.location.replace('/checkout_success.html')
        }, 1000)
    }
}

form.addEventListener("submit", checkoutValidation);

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

function concoleThis() {
    console.log("does this work?");
}

toggleName.onclick = function () {
    nameValidationCheck();
}
toggleAddressInfo.onclick = function () {
    addressValidationCheck()
}
toggleDeliveryOption.onclick = function () {
    console.log("delivery options")
    deliveryValidationCheck()
}
togglePaymentOption.onclick = function () {
    console.log("Payment option function");
    paymentValidationCheck()
}