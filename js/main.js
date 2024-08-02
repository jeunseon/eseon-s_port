window.onload = function(){
    const menuOpen = document.querySelector('.menuOpen');
    const menuBox = document.querySelector('.menuBox');
    menuOpen.addEventListener('click', () => {
        menuBox.classList.toggle('on')
    });
}
