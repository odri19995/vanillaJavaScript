const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event) {
  const li = event.target.parentElement; //parentElement안에는 다른 정보들이 들어간다.  parentElement.innerText하면 안의 값을 알 수 있다.
  //parent는 li이다.
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li"); 
  const span = document.createElement("span");
  span.innerText = newTodo; 
  const button =document.createElement("button"); //하지만 어떤 버튼이 눌린지 모른다.
  button.innerText = "❌"; //윈도우 기준 이모지 윈도우키 + .
  button.addEventListener("click",deleteToDo);
  li.appendChild(span); 
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;  
  toDoInput.value = ""; 
  paintToDo(newTodo); 
}

toDoForm.addEventListener("submit", handleToDoSubmit);