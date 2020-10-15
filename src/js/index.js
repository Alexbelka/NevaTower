let menu = document.querySelector('.header-menu');
let navigation = document.querySelector('.header-navigation');
let open = document.querySelector('.header-info__open');
let close = document.querySelector('.header-info__close');


open.addEventListener('click',function(){
    menu.classList.toggle('header-menu__closed');
})
