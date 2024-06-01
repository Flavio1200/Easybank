const menu = document.querySelector('.menu')
const img = document.querySelector('#menu')
const mobile = document.querySelector('.mobile-navbar')
const hero = document.querySelector('.hero')
const body = document.body

menu.addEventListener('click', function(){
    if(img.src = '/images/icon-hamburger.svg' ){
        img.src = '/images/icon-close.svg'
    }
    mobile.classList.toggle('active');
    hero.classList.toggle('hero2')
    body.classList.toggle('scrY')
})

// const open = ()=>{
//     if(img.src = '/images/icon-hamburger.svg' ){
//         img.src = '/images/icon-close.svg'
//     }
// }

// const close = ()=>{
//     if(img.src = '/images/icon-close.svg' ){
//         img.src = '/images/icon-hamburger.svg'
//     }
// }