function darkMode(){
    let body = document.getElementById('body');
    let img = document.getElementById('img-darkmode');
    body.classList.toggle("darkMode");

        if(body.classList == "darkMode"){
            img.src = `img/svg/light_mode_FILL0_wght400_GRAD0_opsz48.svg`;
        }else{
            img.src = `img/svg/dark_mode_FILL0_wght400_GRAD0_opsz48.svg`;
        }
}

function menu(){
    let hamburgerMenu = document.getElementById('menu-div');
    if(hamburgerMenu.style.display === "none"){
        hamburgerMenu.style.display = "block";
    }else{
        hamburgerMenu.style.display = "none";
    }
}

// todo add comments
// todo load comments
// todo hide/show comments
// todo count comments

// todo function post-bar
// todo count likes