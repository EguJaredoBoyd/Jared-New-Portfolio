const menuButton = document.getElementById('menu-button');
function menu(){
    menuButton.innerHTML = 'clicked';
    if (menuButton === 'clicked'){
        menuButton = menu;
    }
}