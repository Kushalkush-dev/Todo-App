const todoinput=document.querySelector(".todo-input");
const addbtn=document.querySelector(".add-btn");
const todolistul=document.querySelector(".todolist");
const todoform=document.querySelector(".todo-form");

let todolists=[];


gettodos();
generatetodoinfo()


todoform.addEventListener("submit", event=>{
  event.preventDefault();
  const inputvalue=todoinput.value;  

  if(inputvalue){

  
  todolists.push(inputvalue);
  todoinput.value="";
  generatetodoinfo();

  savetodo();
  }

  
})


 function generatetodoinfo(){
    todolistul.innerHTML=""

todolists.forEach((element,index) => {
 
  const todoli=document.createElement("li");
  todoli.classList.add("todoitems");

  todoli.innerHTML=` <input type="checkbox" id="todo-${index}">
        <label for="todo-${index}" class="custom-checkbox"><svg  fill="transparent" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></label>
        <label for="todo-${index}" class="todo-text">${element}</label>
        <button class="delete-btn" onclick="deletetodo(${index})"><svg fill="var(--btn-color)"xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></button>`
  todolistul.appendChild(todoli);
});

}


function deletetodo(index){

  todolists.splice(index,1);
  generatetodoinfo();
  savetodo();

}


function savetodo(){
  const todosjson=JSON.stringify(todolists)
  localStorage.setItem("todos", todosjson)
}

function gettodos(){
  const todojsonobj=localStorage.getItem("todos") || "[]"
  todolists=JSON.parse(todojsonobj);
}