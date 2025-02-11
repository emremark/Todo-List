/*
import { mainMod } from "./mainmod";
const modInstance = mainMod();

export const ui = function () {

    function makeProjectButton(pro) {
        let pCont = document.getElementById("projects_container");
        let projectButton = document.createElement("button");

        projectButton.className = "project_button";
        projectButton.textContent = pro.projectName;
        projectButton.setAttribute("data-name", pro.projectName);

        projectButton.addEventListener("click", () => {
            modInstance.activate(pro);
        })

        pCont.appendChild(projectButton);

        
    } 

    return {makeProjectButton}
}


/*
    function renderProjectPage() {
        let top = document.querySelector(".right_top");
        top.textContent = activeProject.projectName;

        //OVDE IDE LOOP PA CALL RENDER TASKS
    }

    return {renderNewProject, renderProjectPage}
}
/*
    function renderProjects(projectList) {
        let pCont = document.getElementById("projects_container");
        pCont.innerHTML = ""

        projectList.forEach((project) => {
            let projectButton = document.createElement("button");
            projectButton.className = "project_button";
            projectButton.textContent = project.projectName;
            projectButton.setAttribute("data-name", project.projectName);

            pCont.appendChild(projectButton);
        });
    }

    function renderProjectPage(activeProject) {
        let top = document.querySelector(".right_top");
        top.textContent = activeProject.projectName;

        let newTask = document.createElement("button");
        newTask.className = "addTask";
        top.appendChild(newTask);
        newTask.textContent = "Add task";

        
    }

    return {renderProjects, renderProjectPage}
}
    */