function toggleMenu() {
    const menuMObile = document.getElementById("menu-mobile")

    if(menuMObile.className === "menu-mobile-active"){
        menuMObile.className = "menu-mobile"
    }else{
        menuMObile.className = "menu-mobile-active"
    }
}