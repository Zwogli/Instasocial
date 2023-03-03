// todo add comments
// todo load comments

// todo function post-bar
// todo count likes
// function addComment(i){
//     let commentInput = document.getElementById(`input${i}`);
//     posts[i]["comment"].push(commentInput.value);
//     document.getElementById(`allComments${i}`) += `${posts[post]["comment"]}`;
// }

function addComment(newComment){
    let input = document.getElementById(`input${newComment}`).value;
    posts[newComment]["comments"].push(input);
    input.value = '';
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
        comments.innerHTML += `<li class="p-users-12px">${comment}</li>`
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
