
const toggleMenu = () =>{
    const btnMenu = document.getElementById('menu-btn');
    const menu =  document.getElementById('menu-options');
    const upStripe = document.getElementById('up-stripe');
    const downStripe = document.getElementById('down-stripe');
    btnMenu.addEventListener('click', e => {
        menu.classList.toggle('nav__menu--open')
        upStripe.classList.toggle('menu__stripe__up--open')
        downStripe.classList.toggle('menu__stripe__down--open')
    })
}

const mode = () =>{
    const btnMode = document.getElementById('mode');
    const body = document.querySelector('.body');
    btnMode.addEventListener('click', e => {
        body.classList.toggle('dark')
        btnMode.classList.toggle('mode')
    })
}


document.addEventListener('DOMContentLoaded',() => {
    toggleMenu()
    mode()
})