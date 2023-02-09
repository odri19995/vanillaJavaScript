const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY ="todos"

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //JSON.stringify 브라우저가 가진 기능 =object나 array나 어떤 것이든 string으로 바꿔줌
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li"); 
  const span = document.createElement("span");
  span.innerText = newTodo; 
  const button =document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click",deleteToDo);
  li.appendChild(span); 
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;  
  toDoInput.value = ""; 
  toDos.push(newTodo); //빈 리스트에 newTodo값을 넣어준다. 하지만 local storage에는 리스트는 저장이 안된다. 단지 텍스트만 저장 가능
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos); //string을 JS가 이해하 할 수 있는 리스트로 바꿔준다.
  toDos = parsedToDos; //비어있지 않으면 예전에 저장된 값을 불러오고 싶다.
  parsedToDos.forEach(paintToDo);
  // parsedToDos.forEach((item) => console.log("this is the turn of ", item));// arrow function(화살표 함수) 함수를 안쓰고 짧게 작성하는것
  //Js는 이 function을 호출 하면서 array에 있는 각각의 item을 준다. 한 함수를 여러번 호출하는게 아니다. !!!! 중요 !!!!!
  //sayHello("a")-> sayHello("b")->sayHello("c")
  //하지만 이건 이 array의 item들에 대해 한 개의 function만 실행할 수 있게 해줌 ex)parsedToDos.forEach(헬로호출 함수) hello * 리스트요소 개수
  //Js는 이벤트리스터가 event(argument)를 그냥 제공해 주는 것처럼 지금 처리되고 있는 item 또한 제공해준다.
  //헬로 함수에 item를 넣어 list[0] hello, list[1] hello 가 가능해진다.
}