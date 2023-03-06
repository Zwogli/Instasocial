function renderLike(i){
    let likeImg = document.getElementById(`change-like${i}`);
    if(posts[i]["like"] == false){
        likeImg.innerHTML = `<img id="bar-like${i}" onclick="toggleLike(${i})" class="svg darkModeFilter" src="img/svg/favorite_FILL0_wght400_GRAD0_opsz48.svg" alt="favorite"></img>`;
    }else{
        likeImg.innerHTML = `<img onclick="toggleLike(${i})" class="svg" src="img/heart-69-64.png" alt="favorite"></img>`;
    }
    document.getElementById(`likes-count${i}`).innerHTML = `Gefällt ${posts[i]["likes"]} Mal`;
}

function toggleLike(i){
    if(posts[i]["like"] == false){
        posts[i]["like"] = true;
        document.getElementById(`likes-count${i}`).innerHTML = "Gefällt "+ posts[i]["likes"]++ +" Mal";
    }else{
        posts[i]["like"] = false;
        document.getElementById(`likes-count${i}`).innerHTML = "Gefällt " + posts[i]["likes"]-- + " Mal";
    }
    save();
    renderLike(i);
}


function addComment(newComment){
    let input = document.getElementById(`input${newComment}`).value;
    posts[newComment]["comment"].push(input);
    input = '';
    save();
    render();
}

function showComments(i){
    let post = posts[i]
    let comments = document.getElementById(`allComments${i}`);
    comments.innerHTML = '';
    
    if(comments.style.display === "none"){
        comments.style.display = "block";
    }else{
        comments.style.display = "none";
    }

    for (let j = 0; j < post["comment"].length; j++) {
        let comment= post["comment"][j];
        comments.innerHTML += /*html*/`
        <li class="p-users-12px">${comment}</li>
        `;
    }
}


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
