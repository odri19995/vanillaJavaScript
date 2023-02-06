const h1 =document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const clickedClass = "clicked";
    if (h1.className == clickedClass){
        h1.className ="";
    }else {
        h1.className = clickedClass;
    }// 변수를 잘못 쓴다면 console에서 오류가 출력된다. 
}

window.addEventListener("click",handleTitleClick); 


/*만약 h1.에 class가 초기에 있어도 그냥 덮어써버린다. 
우리가 정말로 해줘야 하는건, JavaScript로 모든 class name을 변경하지 않는 것이다.
우리는 원래 있던 class name을 간직하고 싶다. sexy-font를 간직하고 싶다.
우리는 이 sexy-font를 삭제하지 않고, clicked class를 변경하고 싶다. */