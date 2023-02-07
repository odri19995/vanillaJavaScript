const h1 =document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    
    h1.classList.toggle("clicked"); //한줄의 코드로 5줄을 대체했다.
 
}

window.addEventListener("click",handleTitleClick); 

/* 
toggle은 토큰이 존재하면 토큰제거
토큰존재 하지않으면 토큰 추가

toggle은 h1의 classList에 clicked class가 이미있는지 확인하여
만약있다면 toggle 이 clicked를 제거해준다
만약 class name이 존재하지 않는다면 toggle은 classname 추가
있으면 제거 없으면 생성 !!!
 */