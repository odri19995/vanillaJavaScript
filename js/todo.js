const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY ="todos"

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  console.log(li.id); //지워진 id도 확인 가능
  li.remove();
}

function paintToDo(newTodo) { //paintTodo는 이제 text가 아니라 object를 받는다.
  const li = document.createElement("li"); 
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text; //newTodo object에서 text만 가져오고 싶다.
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
  const newTodoObj = {
    text: newTodo,
    id: Date.now(), //랜덤한 id만드는 법 초마다 다르기 때문에 다른 숫자를 줄것이다.
  };
  toDos.push(newTodoObj); //text 대신 object를 넣어주고 싶다. 
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);

}

//지울 때마다 지워진것을 localStorage에 반영하고 싶다. 
//deleteToDo는 화면에서 어떤 HTML의 element를 알고 있지만 어떤 todo text를 지워야 하는지 모른다.
//만약 a가 두개 일경우 어떤 건지 알 수 없다. 
//todo들에게 ID같은 걸 주고 싶다.  text대신에 object를 만들고 싶다. 