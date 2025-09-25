export const sidebar = document.createElement("div");
sidebar.classList.add("sidebar");
const headingProj = document.createElement("h1");
headingProj.innerText = "All Projects";
headingProj.classList.add("headingProj");
sidebar.appendChild(headingProj);

export function updateSidebar(projectName) {
  const projPara = document.createElement("p");
  projPara.innerText = projectName;
projPara.classList.add("projPara");
  sidebar.append(projPara);
  document.body.append(sidebar);
}