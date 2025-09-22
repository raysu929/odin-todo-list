import "../styles/general.css";
import "../styles/main.css";
if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

const container = document.getElementById("container");

const newProj = document.createElement("button");
newProj.innerText = "New Project";
newProj.classList.add("newProj");

const projDiv = document.createElement("div");
projDiv.classList.add("projDiv");
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
newProj.addEventListener("click", () => {
  if (!document.body.contains(projDiv)) {
    projDiv.append(h2, projInput, submit, cancel);
    document.body.append(projDiv);
  }
});

submit.addEventListener("click", () => {
  const projectName = projInput.value.trim();
  if (!projectName) return; 
  projInput.value = "";

  const projContainer = document.createElement("div");
  const projectTitle = document.createElement("h2");
  projectTitle.innerText = projectName;
  projContainer.appendChild(projectTitle);

  const taskList = document.createElement("ul");
  projContainer.appendChild(taskList);

  const addTask = document.createElement("button");
  addTask.innerText = "Add task";

  addTask.addEventListener("click", () => {
    const taskDiv = document.createElement("div");

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
      option.value = level.toLowerCase();
      option.text = level;
      priority.append(option);
    });

    const notes = document.createElement("textarea");
    notes.placeholder = "Notes..";

    const addButton = document.createElement("button");
    addButton.innerText = "Submit";

    addButton.addEventListener("click", () => {
      const task = createTask(
        taskTitle.value,
        des.value,
        dueDate.value,
        notes.value,
        priority.value
      );

      taskList.appendChild(task.element);
      taskDiv.remove();
    });

    taskDiv.append(taskTitle, des, dueDate, priority, notes, addButton);
    projContainer.appendChild(taskDiv);
  });

  projContainer.append(addTask);
  document.body.append(projContainer);

  projDiv.remove();
});

container.append(newProj);

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