/*
import { Project } from "./project";

export const events = function () {

    function createProjectButton() {

        const addnewP = document.querySelector(".btn_new_project");
        addnewP.addEventListener("click", () => {
            let projDialog = document.getElementById("newProjectDialog");
            projDialog.showModal();
        });

        document.getElementById("submitp").addEventListener("click", (e) => {
            e.preventDefault();
            let projName = document.getElementById("name").value;
            let newPro = new Project(projName);
            activeProject = newPro;
        });

}
    return {createProjectButton}
}
/*
    function createProject()  {
        const addnewP = document.querySelector(".btn_new_project");

        addnewP.addEventListener("click", () => {
            let projDialog = document.getElementById("newProjectDialog");
            projDialog.showModal();
        });

        document.getElementById("submitp").addEventListener("click", (e) => {
            e.preventDefault();
            let projName = document.getElementById("name").value;
            let newPro = new Project(projName);

            addProject(newPro);

            renderProjects(projectList);
        });
    }

    function createTask() {
        let newTask = document.querySelector(".addTask");
        newTask.addEventListener("click", () => {
            let taskDialog = document.getElementById("taskDia");
            taskDialog.showModal();
        })
        let su = document.getElementById("submit");
        su.addEventListener("click", (e) => {
            e.preventDefault();
            let Ttitle = document.getElementById("title").value;
            let Tdate = document.getElementById("date").value;
            let Tprio = document.getElementById("priority").value;
            let Tdesc = document.getElementById("description").value;

            let newTa = new oneTask;
            newTa.newTask(Ttitle, Tdate, Tprio, Tdesc);
    });   
    }

    function selectProject() {
        document.querySelectorAll(".project_button").forEach(button => {
            button.addEventListener("click", (e) => {
                let pn = e.target.getAttribute("data-name");
                ac = projectList.find(project => project.projectName === pn)
                activeProject = ac
            });
        });  
        renderProjectPage(activeProject);
        createTask();
    }
        */
