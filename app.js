const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");


function onLoginSubmit(event){  //js가 argument를 이벤트로 채워준다.
    event.preventDefault(); //form submit의 기본동작 새로고침 억제
    console.log(loginInput);
}

loginForm.addEventListener("submit", onLoginSubmit);
// submit event가 발생할때 Js는 onLoginSubmit function을 호출하고 있고 이 때 event object를 argument로 주고있고
