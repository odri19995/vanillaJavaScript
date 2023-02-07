const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

//미션 1. form을 submit 할 때 입력값을 받아낸다. -> console창에 나타났다 사라진다. 성공.
function onLoginSubmit(){
    const username = loginInput.value;
    console.log("")
}

loginForm.addEventListener("submit", onLoginSubmit)
