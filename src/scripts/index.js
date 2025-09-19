import "../styles/general.css";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

const container = document.getElementById("container");
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Add Task";
const addBtn = document.createElement("button");
addBtn.innerText = "Add";

const deleteBtn = document.createElement("button");
deleteBtn.innerText = "Delete";

addBtn.addEventListener("click", () => {
  const ul = document.createElement("ul");
  const li = document.createElement("li");
  li.innerText = input.value;
  input.value = "";

  
deleteBtn.addEventListener("click", () => {
li.remove();
 
});
 container.append(ul);
ul.appendChild(li);
li.appendChild(deleteBtn);
});

container.append(input, addBtn);
