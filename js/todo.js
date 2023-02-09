const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
// const toDoInput = toDoForm.querySelector("input") 이미 todo-form을 썼기 때문에 활용 가능하다.
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo) { //toDo를 그리는 함수
  const li = document.createElement("li"); //변수 const li는 다른거여도 상관없다. 가져오는 값은 "li"
  const span = document.createElement("span");
  li.appendChild(span); //span을 li안에 넣어준다.
  span.innerText = newTodo; 
  toDoList.appendChild(li); //속내용을 만든 li를 toDoList안에 넣어준다.
}

function handleToDoSubmit(event) {
  event.preventDefault(); //새로고침 방지
  const newTodo = toDoInput.value;  //변수에 넣기전전 console.log로 알아보는것도 좋다.
  toDoInput.value = ""; //toDoINput.value를 비워주지만 newTodo에 저장된 값은 멀쩡하다.
  paintToDo(newTodo); //저장된 값을 paintToDo에 보내준다. 그려야 할게 뭔지 알게된다. 
}

toDoForm.addEventListener("submit", handleToDoSubmit);