import { ProjectModule } from "./project";

export const UI = (function () {
    
    function renderProjects() {
        let pCont = document.getElementById("projects_container");
        pCont.innerHTML = "";
        ProjectModule.projectList.forEach((project) => {
            let projectButton = document.createElement("button");
            projectButton.className = "project_button";
            projectButton.textContent = project.projectName;
            projectButton.setAttribute("data-name", project.projectName);
            pCont.appendChild(projectButton);

            let del = document.createElement("button");
            del.className = "project_button_del";
            del.textContent = "Delete";
            del.setAttribute("data-pname", project.projectName);
            projectButton.appendChild(del);
        })
    }

    function renderActiveProject(project) {
        let taskContainer = document.querySelector(".right_bottom");
        taskContainer.innerHTML = "";

        let top = document.querySelector(".active");
        top.textContent = project.projectName;
        
        project.task_list.forEach((item) => {
            let taskDiv = document.createElement("div");
            taskDiv.className = "tdiv";
            taskContainer.appendChild(taskDiv)
        })
    }

    return { renderProjects, renderActiveProject }

})();