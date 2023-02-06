const title =document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    title.style.color = "blue";
}

function handleMouseEnter(){
    title.innerText = "Mouse is here!";
}

function handleMouseLeave(){
    title.innerText = "Mouse is gone!";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";  //여기 body 자리에 title이 들어갈수 있는데 그 타이틀은 HTML title이다.
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOffline(){
    alert("no WIFI");
}

function handleWindowOnline(){
    alert("good signal!");
}

title.addEventListener("click",handleTitleClick);
title.addEventListener("mouseenter",handleMouseEnter);
title.addEventListener("mouseleave",handleMouseLeave);
window.addEventListener("resize",handleWindowResize); //예) 창모드나 콘솔창을 열어 사이즈가 줄어들면 토마토가 된다.
window.addEventListener("copy",handleWindowCopy);
window.addEventListener("offline",handleWindowOffline);
window.addEventListener("online",handleWindowOnline);