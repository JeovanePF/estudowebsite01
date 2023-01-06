let btnLeft = document.querySelector('.btn-left')
let btnRight = document.querySelector('.btn-right')
let btnMobile = document.querySelector('.btn-mobile')
let slideIndex = 1

showSlide(slideIndex)

btnMobile.addEventListener('click', ()=> {
    let areaMenu = document.querySelector('.menu-mobile')
    if (areaMenu.classList.contains('menu-mobile-mostrar')) {
        areaMenu.classList.remove('menu-mobile-mostrar')
    } else {
        areaMenu.classList.add('menu-mobile-mostrar')
    }
})

btnLeft.addEventListener('click', ()=> {
    showSlide(slideIndex += -1)
})

btnRight.addEventListener('click', ()=> {
    showSlide(slideIndex += 1)
})

function automatic() {
    showSlide(slideIndex += 1)
}

function showSlide(index) {
    let slides = document.querySelectorAll('.slides')
    if (index > slides.length) {
        slideIndex = 1
    }
    if (index < 1) {
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }
    slides[slideIndex - 1].style.display = 'block'
}

setInterval(automatic, 6000)