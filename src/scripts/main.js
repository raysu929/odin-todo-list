import { updateSidebar } from "./sidebar.js";
import { createNewProject } from "./project.js";
import { createTodo } from "./todo.js";

const projects = [];

const newProject = createNewProject("Default");
projects.push(newProject);

const todo1 = createTodo(
  "Buy Milk",
  "Get 2 liters of milk",
  "2025-10-01",
  "High"
);
newProject.addTodo(todo1);
console.log(projects);

function renderProject(project) {
  const projContainer = document.createElement("div");
  projContainer.classList.add("projContainer");
const projectTitle = document.createElement("div");
projectTitle.classList.add("title");

const titleText = document.createElement("span");
titleText.classList.add("project-name");
titleText.textContent = project.name;

projectTitle.appendChild(titleText);

  projContainer.appendChild(projectTitle);

const taskList = document.createElement("ul");
project.todos.forEach((todo) => {
  const taskItem = document.createElement("li");
  taskItem.textContent = `${todo.title} - Due: ${todo.dueDate}`;
  taskItem.classList.add(`priority-${todo.priority.toLowerCase()}`);
  taskList.appendChild(taskItem);
});

projContainer.appendChild(taskList);
const deleteTask = document.createElement("button");
deleteTask.innerText = "🗑️";
deleteTask.classList.add("delete");
deleteTask.addEventListener("click", () => {
  projContainer.remove();
});

  const addTask = document.createElement("button");
  addTask.innerText = "Add Task";
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
      option.classList.add("option");
      option.value = level.toLowerCase();
      option.text = level;
      priority.append(option);
      if (level === "Low") {
        option.style.color = "yellow";
      } else if (level === "Medium") {
        option.style.color = "orange";
      } else if (level === "High") {
        option.style.color = "red";
      } else {
        option.style.color = "lightblue";
      }
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
      task.element.classList.add(`priority-${priority.value}`);
      taskOverlay.remove();
    });

    taskForm.append(
      heading,
      taskTitle,
      des,
      dueDate,
      priority,
      notes,
      addButton,
      cancelButton
    );
    taskOverlay.append(taskForm);
    document.body.appendChild(taskOverlay);
  });
  projectTitle.appendChild(addTask);
  projectTitle.appendChild(deleteTask);
  return projContainer;
}
function initializeProjects() {
  const projectGrid = document.querySelector(".projectGrid");
  projects.forEach((project) => {
    const projElem = renderProject(project);
    projectGrid.appendChild(projElem);
    updateSidebar(newProject.name, projElem, projElem.querySelector(".title"));
  });
}

export { initializeProjects, projects, renderProject, createNewProject };

function createProject(projectName, projectGrid, projDiv) {
  const projContainer = document.createElement("div");
  projContainer.classList.add("projContainer");
  const projectTitle = document.createElement("div");
  projectTitle.classList.add("title");
  projContainer.appendChild(projectTitle);

  const titleText = document.createElement("span");
  titleText.classList.add("project-name");
  titleText.innerText = projectName;
  const taskList = document.createElement("ul");
  projContainer.appendChild(taskList);
  
  projectTitle.append(titleText, addTask, deleteTask);
  projectGrid.appendChild(projContainer);
  projDiv.remove();
  updateSidebar(projectName, projContainer, projectTitle);
}

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
  p4.classList.add("p4");
  li.append(p, p1, p2, p3, p4);
  const check = document.createElement("input");
  check.type = "checkbox";
  check.classList.add("check");
  const editTask = document.createElement("button");
  editTask.innerText = "✏️";
  editTask.classList.add("edit");
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "🗑️";
  deleteBtn.classList.add("delete");

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
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  editTask.addEventListener("click", () => {
    const overlay = document.createElement("div");
    overlay.classList.add("taskOverlay");

    const popup = document.createElement("div");
    popup.classList.add("popupBox");

    const heading = document.createElement("h2");
    heading.innerText = "Edit Task";
    const inputTitle = document.createElement("input");
    inputTitle.type = "text";
    inputTitle.value = text;

    const inputDesc = document.createElement("textarea");
    inputDesc.value = des;

    const inputDate = document.createElement("input");
    inputDate.type = "date";
    inputDate.value = due;

    const inputNote = document.createElement("textarea");
    inputNote.value = note;

    const inputPriority = document.createElement("select");
    const priorities = ["None", "Low", "Medium", "High"];
    priorities.forEach((level) => {
      const option = document.createElement("option");
      option.value = level.toLowerCase();
      option.text = level;
      inputPriority.append(option);
    });
    inputPriority.value = priority;

    const saveBtn = document.createElement("button");
    saveBtn.innerText = "Save";
    saveBtn.classList.add("submit");
    const cancelBtn = document.createElement("button");
    cancelBtn.innerText = "Cancel";
    cancelBtn.classList.add("cancel");
    cancelBtn.addEventListener("click", () => {
      overlay.remove();
    });

    saveBtn.addEventListener("click", () => {
      const newTitle = inputTitle.value.trim();
      const newDesc = inputDesc.value.trim();
      const newDue = inputDate.value;
      const newNote = inputNote.value.trim();
      const newPriority = inputPriority.value;

      if (newTitle) {
        text = newTitle;
        des = newDesc;
        due = newDue;
        note = newNote;
        priority = newPriority;

        p.innerText = ` ${text}`;
        p1.innerText = ` ${des}`;
        p2.innerText = `Due: ${due}`;
        p3.innerText = `Notes: ${note}`;
        p4.innerText = `Priority: ${priority}`;

        p.append(check, editTask, deleteBtn);

        li.classList.remove(
          "priority-none",
          "priority-low",
          "priority-medium",
          "priority-high"
        );
        li.classList.add(`priority-${priority}`);
      }

      overlay.remove();
    });

    popup.append(
      heading,
      inputTitle,
      inputDesc,
      inputDate,
      inputNote,
      inputPriority,
      saveBtn,
      cancelBtn
    );
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
  });

  p.append(check, editTask, deleteBtn);
  li.append(p, p1, p2, p3, p4);

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