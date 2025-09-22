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
const title = document.createElement("h1");
title.innerText = "Create a new task";
const description = document.createElement("textarea");
description.placeholder = "Describe your task";
const dueDate = document.createElement("input");
dueDate.type = "date";
const notes = document.createElement("textarea");
notes.placeholder = "Notes..";
const priority = document.createElement("select");

const priorities = ["None","Low", "Medium", "High"];
priorities.forEach((level) => {
  const option = document.createElement("option");
  option.value = level.toLowerCase();
  option.text = level;
  priority.append(option);
});

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
    function createTask(text, des, due, note, priority) {

    let completed = false;
   const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerText = `Title: ${text}`;
    const p1 = document.createElement("p");
    p1.innerText = `Description: ${des}`;
    const p2 = document.createElement("p");
    p2.innerText = `Due: ${due}`;
    const p3 = document.createElement("p");
    p3.innerText = `Notes: ${note}`;
    const p4 = document.createElement("p");
    p4.innerText = `Priority: ${priority}`;
    li.append(p, p1, p2, p3, p4);
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
        des,
        due,
        note,
        priority,
        element: li,
        toggle,         
      };
    }

    const task = createTask(
      input.value,
      description.value,
      dueDate.value, notes.value,
      priority.value
    );
    taskUl.appendChild(task.element);

  input.value = "";
  description.value = "";
  notes.value = "";
  dueDate.value = "";
  priority.value = "None";
  addBtn.disabled = true;
  
  container.style.display = "none";
  addTask.style.display = "block";
});

container.append(title, input, description, dueDate, notes,priority, addBtn);
document.body.appendChild(taskUl);


const newProject = document.createElement("button");
newProject.innerText = "New Project";

let projectCount = 0;
const maxProjects = 6;

newProject.addEventListener("click", () => {
  if(projectCount >= maxProjects) return;

  const div = document.createElement("div");
  div.style.width = "200px";
const h2 = document.createElement("h2");
h2.innerText = "Create new Project";
const projInput = document.createElement("input");
projInput.type = "text";
projInput.placeholder = "Project Name";
const submit = document.createElement("button");
submit.innerText = "Submit";
const cancel = document.createElement("button");
cancel.innerText = "Cancel";


submit.addEventListener("click", () => {
    const projDiv = document.createElement("div");
    projDiv.innerText = `Project Name: ${projInput.value}`;
      document.body.append(projDiv);
div.remove();
projectCount++;
});

cancel.addEventListener("click", () => {
 div.remove();
});
div.append(h2, projInput, submit, cancel);
document.body.append(div);
});
document.body.appendChild(newProject);