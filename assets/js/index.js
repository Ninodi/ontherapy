let geoLanguageBtn = document.querySelector(".gelanguage")
let ingLanguageBtn = document.querySelector(".inglanguage")
let logo = document.querySelector(".logo")

geoLanguageBtn.addEventListener('click', () => {
    if(document.body.clientWidth <= 1700){
        logo.style.marginRight = '19%'
    }
    document.querySelectorAll(".eng").forEach(eng => {
        eng.style.display = 'none'
    })
    document.querySelectorAll(".geo").forEach(geo => {
        geo.style.display = "flex"
    })
})

ingLanguageBtn.addEventListener('click', () => {
    if(document.body.clientWidth <= 1700){
        logo.style.marginRight = '23%'
    }
    document.querySelectorAll(".eng").forEach(eng => {
        eng.style.display = 'flex'
    })
    document.querySelectorAll(".geo").forEach(geo => {
        geo.style.display = "none"
    })
})


