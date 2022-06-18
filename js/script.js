// MODAL

let ModalOne = document.querySelector('.modal-one')
let ModalTwo = document.querySelector('.modal-two')
let ModalThree = document.querySelector('.modal-three')
let ModalFour = document.querySelector('.modal-four')
let ModalFive = document.querySelector('.modal-five')

let showModalOne = document.querySelector('.show-modal-one')
let showModalTwo = document.querySelector('.show-modal-two')
let showModalThree = document.querySelector('.show-modal-three')
let showModalFour = document.querySelector('.show-modal-four')
let showModalFive = document.querySelector('.show-modal-five')

let closeModalOne = document.querySelector('.close-modal-one')
let closeModalTwo = document.querySelector('.close-modal-two')
let closeModalThree = document.querySelector('.close-modal-three')
let closeModalFour = document.querySelector('.close-modal-four')
let closeModalFive = document.querySelector('.close-modal-five')

showModalOne.addEventListener('click', () => {
    ModalOne.classList.add('active')
})

showModalTwo.addEventListener('click', () => {
    ModalTwo.classList.add('active')
})

showModalThree.addEventListener('click', () => {
    ModalThree.classList.add('active')
})

showModalFour.addEventListener('click', () => {
    ModalFour.classList.add('active')
})

showModalFive.addEventListener('click', () => {
    ModalFive.classList.add('active')
})


closeModalOne.addEventListener('click', () => {
    ModalOne.classList.remove('active')
})

closeModalTwo.addEventListener('click', () => {
    ModalTwo.classList.remove('active')
})

closeModalThree.addEventListener('click', () => {
    ModalThree.classList.remove('active')
})

closeModalFour.addEventListener('click', () => {
    ModalFour.classList.remove('active')
})

closeModalFive.addEventListener('click', () => {
    ModalFive.classList.remove('active')
})



// BURGER

let BurgerBtn = document.querySelector('.burger-view')
let BurgerLine = document.querySelectorAll('.burger-line')
let BurgerContent = document.querySelector('.burger-content')
let BurgerLinkOne = document.querySelector('.burger-link-1')
let BurgerLinkTwo = document.querySelector('.burger-link-2')
let BurgerLinkThree = document.querySelector('.burger-link-3')

let x = 0;
BurgerBtn.addEventListener('click', function () {
    BurgerBtn.classList.add('active')
    BurgerLine[0].classList.add('burger-line-1')
    BurgerLine[2].classList.add('burger-line-2')
    BurgerContent.classList.add('active')
    BurgerLinkOne.classList.add('active')
    BurgerLinkTwo.classList.add('active')
    BurgerLinkThree.classList.add('active')
    x++
    if (x % 2 == 0) {
        offBurger()
    }
})

function offBurger() {
    BurgerBtn.classList.remove('active')
    BurgerLine[0].classList.remove('burger-line-1')
    BurgerLine[2].classList.remove('burger-line-2')
    BurgerContent.classList.remove('active')
    BurgerLinkOne.classList.remove('active')
    BurgerLinkTwo.classList.remove('active')
    BurgerLinkThree.classList.remove('active')
}

BurgerLinkOne.addEventListener('click', function () {
    offBurger()
})

BurgerLinkTwo.addEventListener('click', function () {
    offBurger()
})

BurgerLinkThree.addEventListener('click', function () {
    offBurger()
})
