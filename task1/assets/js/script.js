let usa = document.querySelector(".body-usa")
let usaBtn = document.querySelector(".box-usa")
let fra = document.querySelector(".body-fra")
let fraBtn = document.querySelector(".box-france")
let gb = document.querySelector(".body-gb")
let gbBtn = document.querySelector(".box-gb")
let ger = document.querySelector(".body-ger")
let gerBtn = document.querySelector(".box-germany")

usaBtn.onclick = function () {
    usa.classList.remove("d-none")
    fra.classList.add("d-none")
    gb.classList.add("d-none")
    ger.classList.add("d-none")

}
fraBtn.onclick = function () {
    fra.classList.remove("d-none")
    usa.classList.add("d-none")
    gb.classList.add("d-none")
    ger.classList.add("d-none")
}

gbBtn.onclick = function () {
    gb.classList.remove("d-none")
    usa.classList.add("d-none")
    fra.classList.add("d-none")
    ger.classList.add("d-none")
}

gerBtn.onclick = function () {
    ger.classList.remove("d-none")
    usa.classList.add("d-none")
    gb.classList.add("d-none")
    fra.classList.add("d-none")
}