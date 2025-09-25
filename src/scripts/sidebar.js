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
  sidebar.appendChild(entry);
}