export const sidebar = document.createElement("div");
sidebar.classList.add("sidebar");
const headingProj = document.createElement("h1");
headingProj.innerText = "All Projects";
headingProj.classList.add("headingProj");
sidebar.appendChild(headingProj);

export function updateSidebar(projectName, projectContainerElement) {
  const entry = document.createElement("div");
  entry.classList.add("sidebarEntry");

  const projPara = document.createElement("p");
  projPara.innerText = projectName;
projPara.classList.add("projPara");
entry.appendChild(projPara);

 const edit = document.createElement("button");
 edit.innerText = "✏️";
 edit.classList.add("edit");
 entry.appendChild(edit);
 const deleteBtn = document.createElement("button");
 deleteBtn.innerText = "🗑️";
 deleteBtn.classList.add("sidebar-delete");
 entry.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", () => {
    entry.remove();
    if (projectContainerElement && projectContainerElement.remove) {
      projectContainerElement.remove();
    }
  });
  
  edit.addEventListener("click", () => {
    const overlay = document.createElement("div");
    overlay.classList.add("taskOverlay"); 

    const div = document.createElement("div");
    div.classList.add("popupBox");
    const editProj = document.createElement("h1");
    editProj.innerText = "Edit Project";
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "New project name";
    input.value = projPara.innerText;

    const cancel = document.createElement("button");
    cancel.innerText = "Cancel";
    cancel.classList.add("cancel");
    const submit = document.createElement("button");
    submit.innerText = "Submit";
    submit.classList.add("submit");
    div.append(editProj, input, submit, cancel);
    document.body.appendChild(div);
    overlay.appendChild(div);
    document.body.appendChild(overlay);

    cancel.addEventListener("click", () => {
      overlay.remove();
    });

    submit.addEventListener("click", () => {
      const newName = input.value.trim();
      if (newName) {
        projPara.innerText = newName;
      }
      overlay.remove();
    });
  });
  sidebar.appendChild(entry);
}