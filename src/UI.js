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
            taskDiv.setAttribute("data-taskt", item.id);
            //Div for task info containment
            let taskContentDiv = document.createElement("div");
            taskContentDiv.className = "taskContentDiv"
            //Div for task button containment
            let taskButtonCont = document.createElement("div");
            taskButtonCont.className = "taskButtonsCont";
            //Tasks button Delete
            let delTaskButton = document.createElement("button");
            delTaskButton.className = "delTaskButton";
            delTaskButton.textContent = "Delete";
            delTaskButton.setAttribute("data-taskt", item.id);

            let task_title = document.createElement("div");
            let task_priority = document.createElement("div");
            let task_due = document.createElement("div");

            task_title.textContent = `Title: ${item.title}`;
            task_priority.textContent = `Priority: ${item.priority}`;
            task_due.textContent = `Due date: ${item.dueDate}`;

            taskButtonCont.appendChild(delTaskButton);
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