let checkBoxes = document.querySelectorAll(".checkBox")
let answers = document.querySelectorAll(".answer")
let body = document.querySelector("body")
let btn = document.querySelector(".btn")
let closeBtn = document.querySelector(".close")
let createBtn = document.querySelector(".createBtn")
let closePopup = document.querySelector(".closePopup")


checkBoxes.forEach(each => (
    each.addEventListener('click', () => {
        each.classList.toggle("checked")
    })
))

answers.forEach(answer => (
    answer.addEventListener('click', () => {
        let allOptions = answer.parentElement.querySelectorAll('.answer')
        allOptions.forEach(option => (
            option.classList.remove("selected")
        ))
        answer.classList.add("selected")
    })
))

btn.addEventListener('click', () => {
    body.classList.add('popup')
})

closeBtn.addEventListener('click', () => {
    body.classList.remove('popup')
})


createBtn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log("create account")
    document.querySelector(".formSection").style.display = "none"
    document.querySelector(".therapistPopup").style.display = "block"
})

closePopup.addEventListener('click', () => {
    body.classList.remove('popup') 
})


