if(!localStorage.name) localStorage.name = '';
if(!localStorage.pass) localStorage.pass = '';

const login = () => {
    let btn = document.querySelector('.login-button.login-button'),
     btnLink = document.querySelector('.authorization-btn'),
     login = document.querySelector(".modal-login"),
     loginName = document.querySelector(".login-name"),
     loginPass = document.querySelector(".login-pass"),
     authorizedUser = document.querySelector('.authorized-user'),
     modalLoginBtn = document.querySelector('.modal-login__btn'),
     exit = document.querySelector('.log-btn'),
        loginInputName = document.querySelector('.login-name'),
        loginInputPass = document.querySelector('.login-pass'),
        changeUser = document.querySelector('.change-user'),
        changeUserName = document.querySelector('.change-window__name'),
        changeUserBtn = document.querySelector('.change-user__btn');


    btn.addEventListener('click', (e) => {
        login.classList.add('modal-login--active');
        if (e.target.classList[2] === 'exit') {
            console.log('yaeh');
            localStorage.setItem('name', '');
            login.classList.remove('modal-login--active');
            window.location.reload();
        }
    });

    login.addEventListener('click', (e) => {
       if (e.target === login) {
        login.classList.remove('modal-login--active');
       }
    });

    authorizedUser.addEventListener('click', (e) => {
        changeUser.classList.add('change-user--active');
        changeUserName.value = localStorage.name;
    });

    changeUser.addEventListener('click', (e) => {
        if (e.target === changeUser) {
            changeUser.classList.remove('change-user--active');
        }
    });

    changeUserBtn.addEventListener('click', () => {
        let cahngeVal = changeUserName.value;
        if (cahngeVal === '') {
            alert('В поле должно быть не менее 4 символов!');
        } else if (cahngeVal.length <= 3) {
            alert('В поле должно быть не менее 4 символов!');
        } else {
            localStorage.setItem('name', cahngeVal);
            window.location.reload();
        }
    });

    modalLoginBtn.addEventListener('click', () => {
        loginUser();
        if (loginInputName.value === '' || loginInputName.value.trim().length <= 3) {
            alert('Заполните все поля. А также в каждом поле должно быть не менее 4 символов!');
        } else if (loginInputPass.value === '' || loginInputPass.value.trim().length <= 3) {
            alert('Заполните все поля. А также в каждом поле должно быть не менее 4 символов!');
        } else {
            passUser();
            window.location.reload();
            login.classList.remove('modal-login--active');
        }
    });

    setInterval(function () {
        if (authorizedUser.innerHTML != '') {
            btnLink.classList.add('exit');
            btnLink.innerHTML = 'Выйти';
        }
    }, 1);

    let loginUser = () => {
        let loginVal = loginName.value;
        localStorage.setItem('name', loginVal);
    };
    let passUser = () => {
        let loginPassword = loginPass.value;
        localStorage.setItem('pass', loginPassword);
    };

    authorizedUser.innerHTML = localStorage.name;
}

login();