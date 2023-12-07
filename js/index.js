const upBtn = document.querySelector('.up');
const burger = document.querySelector('.burger-menu-for-adaptic');
const  nav = document.querySelector('nav');

const moveUp = () => {
    if (window.scrollY === 0) {
        upBtn.classList.add('hide');
    } else {
        if (upBtn.classList.contains('hide')) upBtn.classList.remove('hide');
    }
}

const openNav = () => {
    nav.classList.toggle('open');
}

window.addEventListener('scroll', moveUp);
burger.addEventListener('click', openNav);