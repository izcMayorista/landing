const iconoMenu = document.querySelector('.hamburger-menu'),
    nav = document.querySelector('.nav-header'),
    screen = window.screen.availWidth;

if(screen <= 530){
    iconoMenu.classList.remove('hide');
    nav.classList.add('hide')
}

iconoMenu.addEventListener( 'click', () => {
    nav.classList.toggle('hide')
})