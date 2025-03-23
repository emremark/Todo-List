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

            let taskContentDiv = document.createElement("div");
            taskContentDiv.className = "taskContentDiv"

            let taskButtonCont = document.createElement("div");
            taskButtonCont.className = "taskButtonsCont";

            let delTaskButton = document.createElement("button");
            delTaskButton.className = "delTaskButton"
            let editTaskButton = document.createElement("button");
            editTaskButton.className = "editTaskButton"

            let task_title = document.createElement("div");
            let task_priority = document.createElement("div");
            let task_due = document.createElement("div");

            task_title.textContent = `Title: ${item.title}`;
            task_priority.textContent = `Title: ${item.priority}`;
            task_due.textContent = `Title: ${item.dueDate}`;

            taskButtonCont.appendChild(delTaskButton);
            taskButtonCont.appendChild(editTaskButton);
            taskContentDiv.appendChild(task_title);
            taskContentDiv.appendChild(task_priority);
            taskContentDiv.appendChild(task_due);
            taskDiv.appendChild(taskContentDiv);
            taskDiv.appendChild(taskButtonCont);
            taskContainer.appendChild(taskDiv);
        })
    }

    function renderNoProject() {
        let taskContainer = document.querySelector(".right_bottom");
        taskContainer.innerHTML = "";

        let top = document.querySelector(".active");
        top.textContent = "No projects";
    }

    return { renderProjects, renderActiveProject, renderNoProject }

})();