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

    } else if (firstname.value.trim() && surname.value.trim() && email.value.trim() && password.value.trim() && password.value.trim().length >= 8 && confirm.value.trim() && confirm.value.trim() != password.value.trim()) {

        nameEmpty.classList.add("d-none")
        surnameEmpty.classList.add("d-none")
        emailEmpty.classList.add("d-none")
        passwordEmpty.classList.add("d-none")
        passwordLength.classList.add("d-none")
        cPasswordEmpty.classList.add("d-none")
        cPasswordSame.classList.remove("d-none")

    } else if (firstname.value.trim() && surname.value.trim() && email.value.trim() && password.value.trim() && password.value.trim().length <= 8 && confirm.value.trim() && confirm.value.trim() == password.value.trim()) {

        nameEmpty.classList.add("d-none")
        surnameEmpty.classList.add("d-none")
        emailEmpty.classList.add("d-none")
        passwordEmpty.classList.add("d-none")
        passwordLength.classList.remove("d-none")
        cPasswordEmpty.classList.add("d-none")
        cPasswordSame.classList.add("d-none")

    } else if (firstname.value.trim() && surname.value.trim() && email.value.trim() && password.value.trim() && password.value.trim().length <= 8 && confirm.value.trim() && confirm.value.trim() != password.value.trim()) {
        nameEmpty.classList.add("d-none")
        surnameEmpty.classList.add("d-none")
        emailEmpty.classList.add("d-none")
        passwordEmpty.classList.add("d-none")
        passwordLength.classList.remove("d-none")
        cPasswordEmpty.classList.add("d-none")
        cPasswordSame.classList.remove("d-none")
    } else if (!firstname.value.trim() && surname.value.trim() && email.value.trim() && password.value.trim() && password.value.trim().length >= 8 && confirm.value.trim() && confirm.value.trim() == password.value.trim()) {
        nameEmpty.classList.remove("d-none")
        surnameEmpty.classList.add("d-none")
        emailEmpty.classList.add("d-none")
        passwordEmpty.classList.add("d-none")
        passwordLength.classList.add("d-none")
        cPasswordEmpty.classList.add("d-none")
        cPasswordSame.classList.add("d-none")
    } else if (firstname.value.trim() && !surname.value.trim() && email.value.trim() && password.value.trim() && password.value.trim().length >= 8 && confirm.value.trim() && confirm.value.trim() == password.value.trim()) {
        nameEmpty.classList.add("d-none")
        surnameEmpty.classList.remove("d-none")
        emailEmpty.classList.add("d-none")
        passwordEmpty.classList.add("d-none")
        passwordLength.classList.add("d-none")
        cPasswordEmpty.classList.add("d-none")
        cPasswordSame.classList.add("d-none")
    } else if (firstname.value.trim() && surname.value.trim() && !email.value.trim() && password.value.trim() && password.value.trim().length >= 8 && confirm.value.trim() && confirm.value.trim() == password.value.trim()) {
        nameEmpty.classList.add("d-none")
        surnameEmpty.classList.add("d-none")
        emailEmpty.classList.remove("d-none")
        passwordEmpty.classList.add("d-none")
        passwordLength.classList.add("d-none")
        cPasswordEmpty.classList.add("d-none")
        cPasswordSame.classList.add("d-none")
    } else if (firstname.value.trim() && surname.value.trim() && email.value.trim() && !password.value.trim() && confirm.value.trim() && confirm.value.trim() != password.value.trim()) {
        nameEmpty.classList.add("d-none")
        surnameEmpty.classList.add("d-none")
        emailEmpty.classList.add("d-none")
        passwordEmpty.classList.remove("d-none")
        passwordLength.classList.add("d-none")
        cPasswordEmpty.classList.add("d-none")
        cPasswordSame.classList.add("d-none")
    } else if (firstname.value.trim() && surname.value.trim() && email.value.trim() && password.value.trim() && password.value.trim().length >= 8 && !confirm.value.trim()) {
        nameEmpty.classList.add("d-none")
        surnameEmpty.classList.add("d-none")
        emailEmpty.classList.add("d-none")
        passwordEmpty.classList.add("d-none")
        passwordLength.classList.add("d-none")
        cPasswordEmpty.classList.remove("d-none")
        cPasswordSame.classList.add("d-none")
    } else if (firstname.value.trim() && surname.value.trim() && email.value.trim() && password.value.trim() && password.value.trim().length <= 8 && !confirm.value.trim()) {
        nameEmpty.classList.add("d-none")
        surnameEmpty.classList.add("d-none")
        emailEmpty.classList.add("d-none")
        passwordEmpty.classList.add("d-none")
        passwordLength.classList.remove("d-none")
        cPasswordEmpty.classList.remove("d-none")
        cPasswordSame.classList.add("d-none")
    } else if (!firstname.value.trim() && !surname.value.trim() && !email.value.trim() && password.value.trim() && password.value.trim().length >= 8 && confirm.value.trim() && confirm.value.trim() == password.value.trim()) {
        nameEmpty.classList.remove("d-none")
        surnameEmpty.classList.remove("d-none")
        emailEmpty.classList.remove("d-none")
        passwordEmpty.classList.add("d-none")
        passwordLength.classList.add("d-none")
        cPasswordEmpty.classList.add("d-none")
        cPasswordSame.classList.add("d-none")
    } else if (!firstname.value.trim() && !surname.value.trim() && email.value.trim() && password.value.trim() && password.value.trim().length >= 8 && confirm.value.trim() && confirm.value.trim() == password.value.trim()) {
        nameEmpty.classList.remove("d-none")
        surnameEmpty.classList.remove("d-none")
        emailEmpty.classList.add("d-none")
        passwordEmpty.classList.add("d-none")
        passwordLength.classList.add("d-none")
        cPasswordEmpty.classList.add("d-none")
        cPasswordSame.classList.add("d-none")
    } else if (firstname.value.trim() && !surname.value.trim() && !email.value.trim() && password.value.trim() && password.value.trim().length >= 8 && confirm.value.trim() && confirm.value.trim() == password.value.trim()) {
        nameEmpty.classList.add("d-none")
        surnameEmpty.classList.remove("d-none")
        emailEmpty.classList.remove("d-none")
        passwordEmpty.classList.add("d-none")
        passwordLength.classList.add("d-none")
        cPasswordEmpty.classList.add("d-none")
        cPasswordSame.classList.add("d-none")
    } else if (!firstname.value.trim() && surname.value.trim() && !email.value.trim() && password.value.trim() && password.value.trim().length >= 8 && confirm.value.trim() && confirm.value.trim() == password.value.trim()) {
        nameEmpty.classList.remove("d-none")
        surnameEmpty.classList.add("d-none")
        emailEmpty.classList.remove("d-none")
        passwordEmpty.classList.add("d-none")
        passwordLength.classList.add("d-none")
        cPasswordEmpty.classList.add("d-none")
        cPasswordSame.classList.add("d-none")
    } else if (!firstname.value.trim() && !surname.value.trim() && !email.value.trim() && !password.value.trim() && confirm.value.trim()) {
        nameEmpty.classList.remove("d-none")
        surnameEmpty.classList.remove("d-none")
        emailEmpty.classList.remove("d-none")
        passwordEmpty.classList.remove("d-none")
        passwordLength.classList.add("d-none")
        cPasswordEmpty.classList.add("d-none")
        cPasswordSame.classList.add("d-none")
    } else if (!firstname.value.trim() && !surname.value.trim() && !email.value.trim() && password.value.trim() && password.value.trim().length >= 8 && confirm.value.trim() && confirm.value.trim() != password.value.trim()) {
        nameEmpty.classList.remove("d-none")
        surnameEmpty.classList.remove("d-none")
        emailEmpty.classList.remove("d-none")
        passwordEmpty.classList.add("d-none")
        passwordLength.classList.remove("d-none")
        cPasswordEmpty.classList.add("d-none")
        cPasswordSame.classList.remove("d-none")
    } else if (firstname.value.trim() && surname.value.trim() && email.value.trim() && !password.value.trim() && !confirm.value.trim()) {
        nameEmpty.classList.add("d-none")
        surnameEmpty.classList.add("d-none")
        emailEmpty.classList.add("d-none")
        passwordEmpty.classList.remove("d-none")
        passwordLength.classList.add("d-none")
        cPasswordEmpty.classList.remove("d-none")
        cPasswordSame.classList.add("d-none")
    } else if (firstname.value.trim() && surname.value.trim() && !email.value.trim() && password.value.trim() && password.value.trim().length <= 8 && confirm.value.trim()) {
        nameEmpty.classList.add("d-none")
        surnameEmpty.classList.add("d-none")
        emailEmpty.classList.remove("d-none")
        passwordEmpty.classList.add("d-none")
        passwordLength.classList.remove("d-none")
        cPasswordEmpty.classList.add("d-none")
        cPasswordSame.classList.add("d-none")
    } else if (firstname.value.trim() && surname.value.trim() && !email.value.trim() && password.value.trim() && password.value.trim().length >= 8 && confirm.value.trim() && confirm.value.trim() != password.value.trim()) {
        nameEmpty.classList.add("d-none")
        surnameEmpty.classList.add("d-none")
        emailEmpty.classList.remove("d-none")
        passwordEmpty.classList.add("d-none")
        passwordLength.classList.add("d-none")
        cPasswordEmpty.classList.add("d-none")
        cPasswordSame.classList.remove("d-none")
    } else if (firstname.value.trim() && surname.value.trim() && !email.value.trim() && password.value.trim() && password.value.trim().length >= 8 && !confirm.value.trim()) {
        nameEmpty.classList.add("d-none")
        surnameEmpty.classList.add("d-none")
        emailEmpty.classList.remove("d-none")
        passwordEmpty.classList.add("d-none")
        passwordLength.classList.add("d-none")
        cPasswordEmpty.classList.remove("d-none")
        cPasswordSame.classList.add("d-none")
    } else if (firstname.value.trim() && surname.value.trim() && !email.value.trim() && !password.value.trim() && !confirm.value.trim()) {
        nameEmpty.classList.add("d-none")
        surnameEmpty.classList.add("d-none")
        emailEmpty.classList.remove("d-none")
        passwordEmpty.classList.remove("d-none")
        passwordLength.classList.add("d-none")
        cPasswordEmpty.classList.remove("d-none")
        cPasswordSame.classList.add("d-none")
    } else if (firstname.value.trim() && !surname.value.trim() && !email.value.trim() && !password.value.trim() && !confirm.value.trim()) {
        nameEmpty.classList.add("d-none")
        surnameEmpty.classList.remove("d-none")
        emailEmpty.classList.remove("d-none")
        passwordEmpty.classList.remove("d-none")
        passwordLength.classList.add("d-none")
        cPasswordEmpty.classList.remove("d-none")
        cPasswordSame.classList.add("d-none")
    } else if (firstname.value.trim() && surname.value.trim() && email.value.trim() && password.value.trim() && password.value.trim().length >= 8 && confirm.value.trim() && confirm.value.trim() == password.value.trim()) {
        nameEmpty.classList.add("d-none")
        surnameEmpty.classList.add("d-none")
        emailEmpty.classList.add("d-none")
        passwordEmpty.classList.add("d-none")
        passwordLength.classList.add("d-none")
        cPasswordEmpty.classList.add("d-none")
        cPasswordSame.classList.add("d-none")
    } else if (firstname.value.trim() && surname.value.trim() && email.value.trim() && password.value.trim() && password.value.trim().length >= 8 && confirm.value.trim() && confirm.value.trim() == password.value.trim()) {
        nameEmpty.classList.add("d-none")
        surnameEmpty.classList.add("d-none")
        emailEmpty.classList.add("d-none")
        passwordEmpty.classList.add("d-none")
        passwordLength.classList.add("d-none")
        cPasswordEmpty.classList.add("d-none")
        cPasswordSame.classList.add("d-none")
    } else if (firstname.value.trim() && surname.value.trim() && email.value.trim() && password.value.trim() && password.value.trim().length >= 8 && confirm.value.trim() && confirm.value.trim() == password.value.trim()) {
        nameEmpty.classList.add("d-none")
        surnameEmpty.classList.add("d-none")
        emailEmpty.classList.add("d-none")
        passwordEmpty.classList.add("d-none")
        passwordLength.classList.add("d-none")
        cPasswordEmpty.classList.add("d-none")
        cPasswordSame.classList.add("d-none")
    } else {
        nameEmpty.classList.remove("d-none")
        surnameEmpty.classList.remove("d-none")
        emailEmpty.classList.remove("d-none")
        passwordEmpty.classList.remove("d-none")
        cPasswordEmpty.classList.remove("d-none")
    }
}