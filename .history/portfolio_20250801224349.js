const menuButton = document.getElementById('menu-button');
function menu(){
    menuButton.innerHTML = 'clicked';
    if (menuButton.innerHTML === 'clicked'){
        menuButton.innerHTML = 'Menu';
    }
}