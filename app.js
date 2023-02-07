// const loginForm = document.getElementById("login-form");
// const loginInput =loginForm.querySelector("input");
// const loginButton =loginForm.querySelector("button");//우리가 정의한 loginFrom에서 찾을 수 있다.

//더 짧게 
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick(){
    //console.dir(loginInput); loginInput의 내부를 보여준다. //입력하면 value로 들어간다.
    console.log("hello", loginInput.value);
}

loginButton.addEventListener("click", onLoginBtnClick);