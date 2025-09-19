import "../styles/general.css";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

const container = document.getElementById("container");
const taskUl = document.getElementById("tasks");
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Add Task";
const addBtn = document.createElement("button");
addBtn.innerText = "Add";


addBtn.addEventListener("click", () => {
  const li = document.createElement("li");
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
 taskUl.appendChild(li);
 li.appendChild(deleteBtn);

 
});

container.append(input, addBtn, taskUl);


