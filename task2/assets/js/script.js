let firstname = document.querySelector("#firstname")
let surname = document.querySelector("#surname")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let confirm = document.querySelector("#confirm-password")

let nameEmpty = document.querySelector(".name-empty-err");
let surnameEmpty = document.querySelector(".surname-empty-err");
let emailEmpty = document.querySelector(".email-empty-err");
let passwordEmpty = document.querySelector(".ps-empty-err");
let passwordLength = document.querySelector(".ps-length-err");
let cPasswordEmpty = document.querySelector(".cp-empty-err");
let cPasswordSame = document.querySelector(".cp-same-err");

let submit = document.querySelector(".submit");

submit.onclick = function () {
    if (firstname.value.trim() && surname.value.trim() && email.value.trim() && password.value.trim() && password.value.trim().length >= 8 && confirm.value.trim() && confirm.value.trim() == password.value.trim()) {
        window.location.reload();
    }
    if(!firstname.value.trim()){
        nameEmpty.classList.remove("d-none")
    }
    else(
        nameEmpty.classList.add("d-none")
    )
    if (!surname.value.trim()) {
        surnameEmpty.classList.remove("d-none")
    }
    else{
        surnameEmpty.classList.add("d-none")
    }
    if (!email.value.trim()) {
        emailEmpty.classList.remove("d-none")
    }
    else{
        emailEmpty.classList.add("d-none")
    }
    if (!password.value.trim()) {
        passwordEmpty.classList.remove("d-none")
    }
    else{
        passwordEmpty.classList.add("d-none")
    }
    if(password.value.trim() && password.value.trim().length < 8){
        passwordLength.classList.remove("d-none")
    }
    else{
        passwordLength.classList.add("d-none")
    }
    if (!confirm.value.trim()) {
        cPasswordEmpty.classList.remove("d-none")
    }
    else{
        cPasswordEmpty.classList.add("d-none")
    }
    if (password.value.trim() && confirm.value.trim() && confirm.value.trim() != password.value.trim()) {
        cPasswordSame.classList.remove("d-none")
    }
    else{
        cPasswordSame.classList.add("d-none")
    }
}