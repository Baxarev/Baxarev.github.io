window.addEventListener('DOMContentLoaded', () => {
    const nav_list = document.querySelector('.nav_list'),
    menuItem = document.querySelectorAll('.nav_list_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_activ');
        nav_list.classList.toggle('nav_list_activ');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_activ');
            nav_list.classList.toggle('nav_list_activ');
        })
    })
})