function render(){
    renderProfil();
    renderSuggestionUser();
    renderPosts();
}

function renderPosts(){
    let addedUser = document.getElementById('added-user');
    let postHead = document.getElementById('post-head');
    let bodyImg = document.getElementById('body-img');
    let subscribe = document.getElementById('subscribe');

    let newPost = document.getElementById('post');

    addedUser.innerHTML = '';
    postHead.innerHTML = '';
    bodyImg.src = '';
    subscribe.innerHTML = '';

    newPost = '';

    for (let i = 0; i < posts.length; i++) {
        let post = posts[i];

        newPost.innerHTML += generateNewPost(i, post, addedUser, postHead, bodyImg, subscribe);
        
    }
}

function generateNewPost(i, post, addedUser, postHead, bodyImg, subscribe){
    generateAddedUser(addedUser, i, post);
        postHead.innerHTML = /*html*/`
        <div class="post-head-left">
            <img id="post-img${i}" class="img-border-42px" src="img/svg/account_circle_FILL0_wght400_GRAD0_opsz48.svg" alt="account">
            <div class="user-margin a-center">
                <p class="p-users-14px"><b>${post["author"]}</b></p>
                <p class="p-users-12px">${post["location"]}</p>
            </div>
        </div>
        <img class="post-head-right" src="img/svg/more_horiz_FILL0_wght400_GRAD0_opsz48.svg" alt="more">
        `;
        generatePostUserImg(i, post);
        bodyImg.src = `${post["content"]}`;
        subscribe.innerHTML = /*html*/`
        <p class="p-users-14px">Gefällt ${post["likes"]} Mal</p>
        <p class="p-users-14px">${post["message"]}</p>
        <p id="number-comments" class="count-comment p-users-14px-grey c-pointer">Alle x Kommentare ansehen</p>
        <div class="comment-section">
            <input type="text" placeholder="Kommentieren...">
            <button>Posten</button>
        </div>
        `;
}

function generatePostUserImg(i, post){
    return document.getElementById(`post-img${i}`).src = `${post["user-img"]}`
}

function generateAddedUser(addedUser, i, post){
    addedUser.innerHTML += /*html*/`
    <div class="more-users">
        <img id="adde-user-img${i}" class="img-border-66px" src="img/svg/account_circle_FILL0_wght400_GRAD0_opsz48.svg" alt="account">
        <p class="p-users-12px"><b>${post["author"]}</b></p>
    </div>
    `;
    generateAddedUserImg(i, post);
}

function generateAddedUserImg(i, post){
    return document.getElementById(`adde-user-img${i}`).src = `${post["user-img"]}`;
}

// <<<<<<<<<<<MoreUser
// todo render last img
function renderSuggestionUser(){
    let newUserBox = document.getElementById('suggestions-user');
    newUserBox.innerHTML = '';
    for (let i = 0; i < newUsers.length; i++) {
        let newUser = newUsers[i];

        newUserBox.innerHTML += generateSuggestionUser(i, newUser);
        generateNewUserImg(i, newUser);
    }
}

function generateSuggestionUser(i, newUser){
    return  /*html*/`
    <div class="suggestions-users">
                        <div class="suggestions-user">
                            <img id="suggestions-user-img${i}" class="suggestions-user-img" src="img/svg/account_circle_FILL0_wght400_GRAD0_opsz48.svg" alt="suggestion-account">
                            <div class="user-margin a-center">
                                <p class="p-users-14px"><b>${newUser["user-name"]}</b></p>
                                <p class="p-users-12px-grey">${newUser["name"]}</p>
                            </div>
                        </div>
                        <a class="follow a-center">Folgen</a>
                    </div>
    `;
}

function generateNewUserImg(i, newUser){
    return document.getElementById(`suggestions-user-img${i}`).src = `${newUser["user-img"]}`;
}

// <<<<<<<<<Profil
function renderProfil(){
    for (let i = 0; i < profil.length; i++) {
        let aktivProfil = profil[i];
        
    document.getElementById('user-name-aside').innerHTML = /*html*/`
        <p class="p-users-14px"><b>${aktivProfil["profil-username"]}</b></p>
        <p class="p-users-14px-grey">${aktivProfil["profil-name"]}</p>
    `;
    document.getElementById('user-img-aside').src = `${aktivProfil["profil-img"]}`;
    document.getElementById('menu-profil-img').src = `${aktivProfil["profil-img"]}`;
    document.getElementById('menu-footer-profil-img').src = `${aktivProfil["profil-img"]}`;
    };
}