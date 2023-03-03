// todo function post-bar
// todo count likes

function like(i){
    
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
        <li class="p-users-12px">${comment} <a>X</a></li>
        `;
    }
}

// Save JSON
function save(){              
    let postsASText = JSON.stringify(posts);
    localStorage.setItem('posts',postsASText);   
}

function load(){                
    let postsASText = localStorage.getItem('posts');    
    if (postsASText){
        posts = JSON.parse(postsASText);
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
