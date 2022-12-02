const toggleMenu = () =>{
    const btnMenu = document.getElementById('menu-btn');
    const menu =  document.getElementById('menu-options');
    const upStripe = document.getElementById('up-stripe');
    const downStripe = document.getElementById('down-stripe');
    const links = document.querySelectorAll('.nav__menu__link')
    btnMenu.addEventListener('click', e => {
        menu.classList.toggle('nav__menu--open')
        upStripe.classList.toggle('menu__stripe__up--open')
        downStripe.classList.toggle('menu__stripe__down--open')
    })

    menu.addEventListener('click', e => {
        links.forEach(link => {
            link.classList.remove('active')
        })
        console.log(e.target)
        if(e.target.tagName == "A"){
            e.target.classList.add('active')
        }
        menu.classList.toggle('nav__menu--open');
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

const scrollUp = () =>{
    const scrollBtn = document.getElementById('up-btn');
    const about = document.getElementById('about-menu'); //690
    const portfolio = document.getElementById('portfolio-menu') //2113
    const contact = document.getElementById('contact-menu') //3792
    const aboutBar = document.getElementById('about-bar'); //690
    const portfolioBar = document.getElementById('portfolio-bar') //2113
    const contactBar = document.getElementById('contact-bar') //3792

    scrollBtn.addEventListener('click', e =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    })
    window.onscroll = () =>{
        if(window.scrollY < 650){
            about.classList.remove('active')
            aboutBar.classList.remove('bar__active')
            contactBar.classList.remove('bar__active')
            portfolioBar.classList.remove('bar__active')
        }
        if(window.scrollY > 550){
            about.classList.add('active')
            aboutBar.classList.add('bar__active')
            portfolio.classList.remove('active')
            portfolioBar.classList.remove('bar__active')
        }
        if (window.scrollY > 2100){
            about.classList.remove('active')
            aboutBar.classList.remove('bar__active')
            portfolio.classList.add('active')
            portfolioBar.classList.add('bar__active')
            contact.classList.remove('active')
            contactBar.classList.remove('bar__active')
        }
        if(window.scrollY > 2450){
            portfolio.classList.remove('active')
            portfolioBar.classList.remove('bar__active')
            contact.classList.add('active')
            contactBar.classList.add('bar__active')
        }

        if(window.scrollY < 490){
            scrollBtn.classList.remove('up__btn--active')
        }else {
            scrollBtn.classList.add('up__btn--active')
        }
    }

}


document.addEventListener('DOMContentLoaded',() => {
    toggleMenu()
    mode()
    scrollUp()
})