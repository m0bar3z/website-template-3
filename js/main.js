let myNav = document.getElementById('menu-navbar');

function openNav() {
      document.getElementById("mySidenav").style.width = "250px";
}
    
function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
}

window.onscroll = function () { 
    if (window.pageYOffset >= 730 ) {
        myNav.classList.add("nav-colored");
    } 
    else {
        myNav.classList.remove("nav-colored");
    }
};
