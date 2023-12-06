const upBtn = document.querySelector('.up');

const moveUp = () => {
    if (window.scrollY === 0) {
        upBtn.classList.add('hide');
    } else {
        if (upBtn.classList.contains('hide')) upBtn.classList.remove('hide');
    }
}

window.addEventListener('scroll', moveUp);