import { Project } from "./project";
import { oneTask } from "./task";

export const mainMod = function () {
    let projectList = [];
    let activeProject = null;

    function onStart() {
        let defaultProject = new Project("Default Project");
        projectList.push(defaultProject);
        activeProject = defaultProject;

        makeProjectButton(activeProject);
        createProjectButton();
        activate(activeProject);
        addTaskButton();

    }

    function activate(pro) {
        let taskContainer = document.querySelector(".right_bottom");
        taskContainer.innerHTML = "";

        let top = document.querySelector(".active");
        top.textContent = pro.projectName;
        activeProject = pro;

        //izlistavanje svih taskova
        let tcont = document.querySelector(".right_bottom");
            tcont.innerHTML = "";
            activeProject.task_list.forEach((task) => {
            let taskDiv = document.createElement("div");
            taskDiv.className = "tdiv";
            taskDiv.textContent = task.title;
            tcont.appendChild(taskDiv)
            });
    }


    function makeProjectButton(pro) {
        let pCont = document.getElementById("projects_container");
        let projectButton = document.createElement("button");

        projectButton.className = "project_button";
        projectButton.textContent = pro.projectName;
        projectButton.setAttribute("data-name", pro.projectName);

        projectButton.addEventListener("click", () => {
            activate(pro);
        })

        pCont.appendChild(projectButton);
    } 

    function createProjectButton() {
        const addnewP = document.querySelector(".btn_new_project");

        const cls = document.querySelector("#closeD");
        cls.addEventListener("click", (e) => {
            e.preventDefault();
            document.getElementById("newProjectDialog").close();
            document.getElementById("name").value = "";
        })

        addnewP.addEventListener("click", () => {
            let projDialog = document.getElementById("newProjectDialog");
            projDialog.showModal();
        });

        document.getElementById("submitp").addEventListener("click", (e) => {
            e.preventDefault();
            let projName = document.getElementById("name").value;
            let newPro = new Project(projName);
            makeProjectButton(newPro);
            projectList.push(newPro);
            activate(newPro);
            document.getElementById("newProjectDialog").close();
            document.getElementById("name").value = "";
        });
    }

    function addTaskButton() {
            let newTask = document.querySelector(".addTask");
            newTask.addEventListener("click", () => {
            let taskDialog = document.getElementById("taskDia");
            taskDialog.showModal();
        })

        const cls2 = document.querySelector("#close");
        cls2.addEventListener("click", (e) => {
            e.preventDefault();
            document.getElementById("taskDia").close();
            document.getElementById("title").value = "";
            document.getElementById("date").value = "";
            document.getElementById("priority").value = "";
            document.getElementById("description").value = "";
        })

        let sub = document.getElementById("submit");
        sub.addEventListener("click", (e) => {
            e.preventDefault();
            let Ttitle = document.getElementById("title").value;
            let Tdate = document.getElementById("date").value;
            let Tprio = document.getElementById("priority").value;
            let Tdesc = document.getElementById("description").value;

            let newTa = new oneTask();
            newTa.newTask(Ttitle, Tdate, Tprio, Tdesc);
            activeProject.addTask(newTa);

            let tcont = document.querySelector(".right_bottom");
            tcont.innerHTML = "";
            activeProject.task_list.forEach((task) => {
            let taskDiv = document.createElement("div");
            taskDiv.className = "tdiv";
            taskDiv.textContent = task.title;
            tcont.appendChild(taskDiv)
            });

            document.getElementById("taskDia").close()
            document.getElementById("title").value = "";
            document.getElementById("date").value = "";
            document.getElementById("priority").value = "";
            document.getElementById("description").value = "";
        }); 

    }
    return {onStart}
}
