import "../styles/general.css";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}
const wrapper = document.getElementById("popup");
const container = document.getElementById("container");
const taskUl = document.getElementById("tasks");
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Add Task";
const addBtn = document.createElement("button");
addBtn.innerText = "Add";


addBtn.addEventListener("click", () => {
 const li = document.createElement("li");
  const check = document.createElement("input");
  check.type = "checkbox";
  check.addEventListener("click", () => {
    if(li.style.textDecoration === "line-through"){
li.style.textDecoration = "none";
li.style.opacity = "1";
    }else{
li.style.textDecoration = "line-through";
li.style.opacity = "0.7";
    }
  })
  if(input.value.trim() === ""){
    input.placeholder = "Oops, Try Again!";
    addBtn.style.backgroundColor = "red";
    addBtn.style.color = "white";
    return;
  }else{
input.placeholder = "Add Task";
addBtn.style.backgroundColor = "";
addBtn.style.color = "";
  }
  li.innerText = input.value;
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
deleteBtn.addEventListener("click", () => {
  li.remove();
});
  input.value = "";
  li.appendChild(check);

 taskUl.appendChild(li);
 li.appendChild(deleteBtn);
 
});

container.append(input, addBtn, taskUl);


const addTask = document.createElement("button");
addTask.innerText = "Add Task";
addTask.addEventListener("click", () => {
container.style.display = "block";

})
wrapper.append(addTask);
