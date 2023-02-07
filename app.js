const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a")


function onLoginSubmit(event){
    event.preventDefault();
    console.log(loginInput.value);
}

function handleLinkClick(event){
    event.preventDefault(); //동작을 막는다.
    console.dir(event) //mountEvent가 뜨는걸 확인가능
    alert("click");
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click",handleLinkClick) //버튼만 주고 실행시키는건 자바스크립트의 몫이다.
// Js는 함수를 실행시키는 동시에 그 함수에 첫번째 인자로 object를 넣어준다. 이 object에는 방금 일어난 event의 정보가 들어있다.

