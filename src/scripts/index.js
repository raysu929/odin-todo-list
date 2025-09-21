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

input.addEventListener("input", () => {
  if (input.value.trim() === "") {
    addBtn.disabled = true;
    input.placeholder = "Oops, Try Again!";
    addBtn.style.backgroundColor = "red";
    addBtn.style.color = "white";
  } else {
    addBtn.disabled = false;
    input.placeholder = "Add Task";
    addBtn.style.backgroundColor = "";
    addBtn.style.color = "";
  }
});

const addBtn = document.createElement("button");
addBtn.disabled = true;
addBtn.innerText = "Add";

const addTask = document.createElement("button");
addTask.innerText = "Add Task";
addTask.addEventListener("click", () => {
  if (container.style.display === "block") {
    container.style.display = "none";
    addTask.style.display = "block";
  } else {
    container.style.display = "block";
    addTask.style.display = "none";
  }
});
wrapper.append(addTask);

addBtn.addEventListener("click", () => {
    function createTask(text) {
    let completed = false;
   const li = document.createElement("li");
   li.innerText = text;
   const check = document.createElement("input");
   check.type = "checkbox";

      function toggle(){
 completed = !completed;
          if(completed){
li.style.textDecoration = "line-through";
li.style.opacity = "0.7";
          }else{
li.style.textDecoration = "none";
li.style.opacity = "1";
          }  
        }
      
   check.addEventListener("click", toggle);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", () => {
      li.remove();
    });
    li.appendChild(check);
    li.appendChild(deleteBtn);
      return {
        text,
        element: li,
        toggle,         
      };
    }

    const task = createTask(input.value);
    taskUl.appendChild(task.element);

  input.value = "";
  addBtn.disabled = true;
  
  container.style.display = "none";
  addTask.style.display = "block";
});

container.append(input, addBtn);
document.body.appendChild(taskUl);