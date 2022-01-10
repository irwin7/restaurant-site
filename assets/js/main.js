let elNavItem = document.querySelectorAll('.nav__item');
let elMenuBtn = document.querySelector('.nav__toggle');
let elNav = document.querySelector('.nav__menu');
let elNavBtn = document.querySelector('.nav__dark');
let elBody = document.querySelector('body');

elMenuBtn.addEventListener('click',()=>{
    elNav.classList.toggle('show-menu');
})

elNavBtn.addEventListener('click',()=>{
    elBody.classList.toggle('dark-theme');
})

window.addEventListener('scroll',()=>{
    console.log(window.scrollY);
    if(window.scrollY > 10){
        document.querySelector('.l-header').classList.add('scroll-header');
    }
    if(window.scrollY < 10){
        document.querySelector('.l-header').classList.remove('scroll-header');
    }
    if(window.scrollY < 338){
        removeClass();
        elNavItem[0].querySelector('.nav__link').classList.add('active-link');
    }
    if(window.scrollY > 338 && window.scrollY < 878){
        removeClass();
        elNavItem[1].querySelector('.nav__link').classList.add('active-link');
    }
    if(window.scrollY > 877 && window.scrollY < 1407){
        removeClass();
        elNavItem[2].querySelector('.nav__link').classList.add('active-link');
    }
    if(window.scrollY > 1406 && window.scrollY < 2684){
        removeClass();
        elNavItem[3].querySelector('.nav__link').classList.add('active-link');
    }
    if(window.scrollY > 2683){
        removeClass();
        elNavItem[4].querySelector('.nav__link').classList.add('active-link');
    }
})

function removeClass(){
    for(let item of elNavItem){
        item.querySelector('.nav__link').classList.remove('active-link');
    }
}