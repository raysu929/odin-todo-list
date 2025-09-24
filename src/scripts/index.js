import "../styles/general.css";
import "../styles/main.css";
if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

const container = document.getElementById("container");
const h1 = document.createElement("h1");
h1.innerText = "Todo List";
h1.classList.add("todo");
const newProj = document.createElement("button");
newProj.innerText = "New Project";
newProj.classList.add("newProj");

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
submit.classList.add("submit")
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
  createProject(projectName);
});

function createProject(projectName) {
  const projContainer = document.createElement("div");
  projContainer.classList.add("projContainer");
  const projectTitle = document.createElement("div");
  projectTitle.innerText = projectName;
  projectTitle.classList.add("title")
  projContainer.appendChild(projectTitle);

  const taskList = document.createElement("ul");
  projContainer.appendChild(taskList);

  const addTask = document.createElement("button");
  addTask.innerText = "Add task";
addTask.classList.add("addTask");
  addTask.addEventListener("click", () => {
    const taskOverlay = document.createElement("div");
    taskOverlay.classList.add("taskOverlay");
    const taskForm = document.createElement("div");
    taskForm.classList.add("popupBox"); 
   const heading = document.createElement("h1");
   heading.innerText = "Create A Task";
   heading.classList.add("taskHeading");
    const taskTitle = document.createElement("input");
    taskTitle.placeholder = "Add Task";

    const des = document.createElement("textarea");
    des.placeholder = "Describe task";

    const dueDate = document.createElement("input");
    dueDate.type = "date";

    const priority = document.createElement("select");
    const priorities = ["None", "Low", "Medium", "High"];
    priorities.forEach((level) => {
      const option = document.createElement("option");
      option.classList.add("option")
      option.value = level.toLowerCase();
      option.text = level;
      priority.append(option);
    });

    const notes = document.createElement("textarea");
    notes.placeholder = "Notes..";

    const addButton = document.createElement("button");
    addButton.innerText = "Submit";
addButton.classList.add("submit");
    const cancelButton = document.createElement("button");
    cancelButton.innerText = "Cancel";
    cancelButton.classList.add("cancel");

    cancelButton.addEventListener("click", () => {
      taskOverlay.remove();
    });

    addButton.addEventListener("click", () => {
      const task = createTask(
        taskTitle.value.trim(),
        des.value.trim(),
        dueDate.value,
        notes.value.trim(),
        priority.value
      );

      taskList.appendChild(task.element);
      taskOverlay.remove();
    });

    taskForm.append( heading, taskTitle, des, dueDate, priority, notes, addButton, cancelButton);
taskOverlay.append(taskForm);
document.body.appendChild(taskOverlay);
  });
  projectTitle.append(addTask);
  projectGrid.appendChild(projContainer);
  projDiv.remove();
}

container.append(h1, newProj);

function createTask(text, des, due, note, priority) {
  let completed = false;
  const li = document.createElement("li");
  li.classList.add("li");
  const p = document.createElement("p");
  p.innerText = ` ${text}`;
  p.classList.add("para");
  const p1 = document.createElement("p");
  p1.innerText = ` ${des}`;
  const p2 = document.createElement("p");
  p2.innerText = `Due: ${due}`;
  const p3 = document.createElement("p");
  p3.innerText = `Notes: ${note}`;
  const p4 = document.createElement("p");
  p4.innerText = `Priority: ${priority}`;
  li.append(p, p1, p2, p3, p4);
  const check = document.createElement("input");
  check.type = "checkbox";

  function toggle() {
    completed = !completed;
    if (completed) {
      li.style.textDecoration = "line-through";
      li.style.opacity = "0.7";
    } else {
      li.style.textDecoration = "none";
      li.style.opacity = "1";
    }
  }

  check.addEventListener("click", toggle);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add("delete");
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