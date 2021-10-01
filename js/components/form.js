const form = document.querySelector("form");
const name = document.querySelector("#full_name");
const email = document.querySelector("#email");
const contactMessage = document.querySelector("#message")
const outPutError = document.querySelector(".message")

function formValidation(event){
    event.preventDefault();
    outPutError.innerHTML = "";


    // console.log(`${email.value}`);
    
    // console.log(`${message.value}`);
    
    if(!lenghtCheck(name.value, 0) === true){
        outPutError.innerHTML += `<p> - Your name is missing of filled in incorrectly</p>`;
        outPutError.className = "error";
    }
    if(!emailValidation(email.value) === true){
        outPutError.innerHTML += `<p>- Your email is missing or is filled in incorrectly</p>`;
        outPutError.className = "error";
    }
    if(!lenghtCheck(contactMessage.value, 25) === true){
        outPutError.innerHTML += `<p>- Your message has to contain 25 characters</p>`;
        outPutError.className = "error";
    }
    else{
        outPutError.innerHTML = `<p>Your message has been send to us and we will contact you in 1 - 2 work day's</p>`;
        outPutError.className = "styleMessage";

        setTimeout(function() {
            form.submit()
        }, 4000)
        
    }
    
}
function emailValidation(email){
    const symbols = /\S+@\S+\.\S+/;
    const pattern = symbols.test(email);
    return pattern;
}
function lenghtCheck(value, len){
    if(value.trim().length > len){
        return true;
    } else {
        return false
    }
}


form.addEventListener("submit", formValidation);