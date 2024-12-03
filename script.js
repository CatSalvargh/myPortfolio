function toggleMenu(){
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');

    //add 'open' class to the targeted elements above via DOM. That class has its own styling
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

