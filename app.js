const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden"; // 일반적으로 string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용한다.

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    // greeting.innerText ="Hello " + username; 
    greeting.innerText = `Hello ${username} !`; //둘다 string과 변수를 합쳐주고 있다. ` ` 백틱 기호로 시작 중간에 변수만 추가 가능
    greeting.classList.remove(HIDDEN_CLASSNAME)//hidden을 두번 사용하는걸 방지하가위해서 상수 선언
}



loginForm.addEventListener("submit", onLoginSubmit);


