const  menuButton = document.getElementById('menu-button');
const menuContent = document.getElementById('menu-content');
function toggleMenu(){
    menuContent.classList.toggle('show');
    if(menuButton.innerHTML === 'Menu'){
        menuButton.innerHTML = 'X';
    }
    else{
        menuButton.innerHTML = 'Menu';
    }


}