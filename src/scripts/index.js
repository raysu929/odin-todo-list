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
addBtn.addEventListener("click", () => {
  const ul = document.createElement("ul");
  const li = document.createElement("li");
  li.innerText = input.value;
  input.value = "";
 container.append(ul);
ul.appendChild(li);
})
container.append(input, addBtn);
