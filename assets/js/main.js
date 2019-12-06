const navigationSwitcher = document.querySelector('.navigation__switcher--js');

navigationSwitcher.addEventListener('click', (e) => {
    const navigationList = document.querySelector('.navigation__list--js');
    navigationList.classList.toggle('navigation__list--visible');
    navigationSwitcher.classList.toggle('navigation__switcher--white');
    if (navigationList.classList.contains('navigation__list--visible')) {
        navigationSwitcher.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        navigationSwitcher.innerHTML = '<i class="fas fa-bars"></i>';
    }
})