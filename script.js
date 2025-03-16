const todoinput=document.querySelector(".todo-input");
const addbtn=document.querySelector(".add-btn");
const todolist=document.querySelector(".todolist");
const todoform=document.querySelector(".todo-form");

todoform.addEventListener("submit", event=>{
  event.preventDefault();
  const inputvalue=todoinput.value;  

  generatetodoinfo(inputvalue);

})


function generatetodoinfo(input){
    



}



