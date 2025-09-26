import { sidebar } from "./sidebar.js";
import { createProject } from "./main.js";
import "../styles/general.css";
import "../styles/main.css";
import "../styles/sidebar.css";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}
document.body.appendChild(sidebar);

const container = document.getElementById("container");
const h1 = document.createElement("h1");
h1.innerText = "Todo List";
h1.classList.add("todo");
const newProj = document.createElement("button");
newProj.innerText = "New Project";
newProj.classList.add("newProj");
container.append(h1, newProj);
const projDiv = document.createElement("div");
projDiv.classList.add("projDiv");
const popupBox = document.createElement("div");
popupBox.classList.add("popupBox");
const h2 = document.createElement("h2");
h2.innerText = "Create New Project";
h2.classList.add("heading");
const projInput = document.createElement("input");
projInput.placeholder = "New project name";
projInput.classList.add("projInput");
const submit = document.createElement("button");
submit.innerText = "Submit";
submit.classList.add("submit");
const cancel = document.createElement("button");
cancel.innerText = "Cancel";
cancel.classList.add("cancel");
cancel.addEventListener("click", () => {
  projDiv.remove();
});

popupBox.append(h2, projInput, submit, cancel);
projDiv.append(popupBox);

newProj.addEventListener("click", () => {
  if (!document.body.contains(projDiv)) {
    document.body.append(projDiv);
  }
});

const projectGrid = document.createElement("div");
projectGrid.classList.add("projectGrid");
document.body.appendChild(projectGrid);

submit.addEventListener("click", () => {
  const projectName = projInput.value.trim();
  if (!projectName) return;
  projInput.value = "";
createProject(projectName, projectGrid, projDiv);
});
