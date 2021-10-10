let shoppingStoragePrice = window.localStorage.getItem('shoppingPrice');

let orderCount = document.querySelector(".orderCount");
let checkoutPrice = document.querySelector(".checkout-price");

const form = document.querySelector("form");

orderCount.innerHTML = shoppingCartStorage;
checkoutPrice.innerHTML = shoppingStoragePrice;

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

const toggle = document.querySelector(".toggle_name");
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
    if (lengthCheck(firstName.value, 0) === true && lengthCheck(lastName.value, 0) === true && lengthCheck(phoneNumber.value, 7) === true) {
        nameinfo.style.display = "none"
        addressInfo.style.display = "unset"
        deliveryOptions.style.display = "none"

        toggleName.style.display = "none";
        toggle.style.display = "unset"

        toggleAddressInfo.style.display = "unset";

        persenolValidation = true;
    }
}

function addressValidationCheck() {
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
        nameinfo.style.display = "none"
        addressInfo.style.display = "none";
        deliveryOptions.style.display = "unset"

        toggleName.style.display = "unset";
        toggleAddressInfo.style.display = "none";

        toggle.style.display = "unset"
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

        pymentInfo.style.display = "unset"
        nameinfo.style.display = "none"
        addressInfo.style.display = "none";
        

        toggleAddressInfo.classList.add("hideButton");
        console.log(deliveryValidation)

        if (toggleAddressInfo.classList.contains = "hideButton") {
            toggleAddressInfo.style.display = "unset"
        }
    } else {
        errorDelivery.innerHTML = "* You have to choose a delivery method";
    }
}

function paymentValidationCheck() {


    if (!lengthCheck(cardNumber.value, 3) === true) {
        errorCardNumber.innerHTML = "* Credit card number missing or to short"
    } else {
        errorCardNumber.style.display = "none";
    }
    if (!lengthCheck(cardExpirationDate.value, 5) === true) {
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
        toggle.display.style = "unset";

    }
}

function checkoutValidation(event) {
    event.preventDefault();

    if (persenolValidation === true && addressValidation === true && deliveryValidation === true && paymentValidation === true) {
        setTimeout(function () {
            window.localStorage.clear('shoppingPrice');
            window.localStorage.clear('itemsInShoppingCount');
            form.submit();
            window.location.replace('/checkout_success.html')
        }, 1000)
    }
}

form.addEventListener("submit", checkoutValidation);

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

toggleName.onclick = function () {
    nameValidationCheck();
    pymentInfo.style.display = "none";
    togglePaymentOption.style.display = "unset"
    toggleDeliveryOption.style.display = "unset"

}
toggleAddressInfo.onclick = function () {
    addressValidationCheck()
    pymentInfo.style.display = "none"
}
toggleDeliveryOption.onclick = function () {
    console.log("delivery options")
    deliveryValidationCheck()

}
togglePaymentOption.onclick = function () {
    console.log("Payment option function");
    paymentValidationCheck()


}
toggle.onclick = function () {
    nameinfo.style.display = "unset";
    addressInfo.style.display = "none";

    toggleName.style.display = "unset";
    toggle.style.display = "none"

    deliveryOptions.style.display = "none"
    toggleAddressInfo.style.display = "unset";

    pymentInfo.style.display = "none";

    toggleDeliveryOption.style.display = "unset"
}