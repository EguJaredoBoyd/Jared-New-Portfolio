const  menuButton = document.getElementById('menu-button');
const menuContent = document.getElementById('menu-content');
function toggleMenu(){
    menuContent.classList.toggle('show');
    if(menuButton.innerHTML === 'Menu'){
        menuButton.innerHTML = '<i class="ri-close-large-line"></i>';
    }
    else{
        menuButton.innerHTML = 'Menu';
    }


}