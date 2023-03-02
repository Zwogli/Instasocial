function render(){
    renderProfil();
    renderSuggestionUser();
}

function renderSuggestionUser(){
    let newUserBox = document.getElementById('suggestions-user');
    newUserBox.innerHTML = '';
    for (let i = 0; i < newUsers.length; i++) {
        let newUser = newUsers[i];

        newUserBox.innerHTML += /*html*/`
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
        document.getElementById(`suggestions-user-img${i}`).src = `${newUser["user-img"]}`;
    }
}

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