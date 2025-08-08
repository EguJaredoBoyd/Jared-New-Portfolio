const  menuButton = document.getElementById('menu-button');
const menuContent = document.getElementById('menu-content');
function toggleMenu(){
    menuContent.classList.toggle('show');
    if(menuButton.innerHTML === '<i class="ri-menu-line"></i>'){
        menuButton.innerHTML = '<i class="ri-close-large-line"></i>';
    }
    else{
        menuButton.innerHTML = '<i class="ri-menu-line"></i>.ri-menu-line{ color: red;}';
    }


}