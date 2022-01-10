let elNavItem = document.querySelectorAll('.nav__item');
let elMenuBtn = document.querySelector('.nav__toggle');
let elNav = document.querySelector('.nav__menu');
let elNavBtn = document.querySelector('.nav__dark');
let elBody = document.querySelector('body');

elMenuBtn.addEventListener('click',()=>{
    elNav.classList.toggle('nav-active');
})

elNavBtn.addEventListener('click',()=>{
    elBody.classList.toggle('dark-theme');
})

window.addEventListener('scroll',()=>{
    if(window.scrollY > 10){
        document.querySelector('.l-header').classList.add('fixHead');
    }
    if(window.scrollY < 10){
        document.querySelector('.l-header').classList.remove('fixHead');
    }
    if(window.scrollY < 380){
        removeClass();
        elNavItem[0].querySelector('.nav__link').classList.add('active-link');
    }
    if(window.scrollY > 380 && window.scrollY < 930){
        removeClass();
        elNavItem[1].querySelector('.nav__link').classList.add('active-link');
    }
    if(window.scrollY > 930 && window.scrollY < 1460){
        removeClass();
        elNavItem[2].querySelector('.nav__link').classList.add('active-link');
    }
    if(window.scrollY > 1460 && window.scrollY < 2737){
        removeClass();
        elNavItem[3].querySelector('.nav__link').classList.add('active-link');
    }
    if(window.scrollY > 2737){
        removeClass();
        elNavItem[4].querySelector('.nav__link').classList.add('active-link');
    }
})

function removeClass(){
    for(let item of elNavItem){
        item.querySelector('.nav__link').classList.remove('active-link');
    }
}