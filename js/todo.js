const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos)); //JSON.stringify 브라우저가 가진 기능 =object나 array나 어떤 것이든 string으로 바꿔줌
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