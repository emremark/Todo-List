import { ProjectModule } from "/home/vboxuser/Desktop/js/Todo-List/src/project"
import { UI } from "./UI";
import { oneTask } from "./task";

export const eventListeners = (function () {

    function initializeEvents() {

    //Click add new project to open dialog and x to close dialog
    const addnewP = document.querySelector(".btn_new_project");
    const cls = document.querySelector("#closeD");

    addnewP.addEventListener("click", () => {
        let projDialog = document.getElementById("newProjectDialog");
        projDialog.showModal();
    });

    cls.addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("newProjectDialog").close();
        document.getElementById("name").value = "";
    })
    //Submit the new project and call UI function
    document.getElementById("submitp").addEventListener("click", (e) => {
        e.preventDefault();
        let projName = document.getElementById("name").value;
        ProjectModule.createNewProject(projName);
        UI.renderProjects();
        document.getElementById("newProjectDialog").close();
        document.getElementById("name").value = "";
    })
    //Event listener for entire projects area, if the clicked target is of class project_button get name and find that name in project list. Call UI to render it.
    document.getElementById("projects_container").addEventListener("click", (event) => {
        if (event.target.classList.contains("project_button")) {
            let clickedProjectName = event.target.getAttribute("data-name");
            let clickedProjectObj = ProjectModule.projectList.find(proj => proj.projectName === clickedProjectName);
            UI.renderActiveProject(clickedProjectObj);
            ProjectModule.setActive(clickedProjectObj);
        }
    })
    //Add new task event for open dialog and x to close it
    document.querySelector(".addTask").addEventListener("click", () => {
            if (ProjectModule.projectList.length > 0) {
            let taskDialog = document.getElementById("taskDia");
            taskDialog.showModal();
            }
            else { alert("Please add a project first") };
        })
        

    document.querySelector("#close").addEventListener("click", (e) => {
            e.preventDefault();
            document.getElementById("taskDia").close();
            document.querySelector("#taskDD").reset();
        })
    }   

    //Add new task submit button
    document.querySelector("#submit").addEventListener("click", (e) => {
        e.preventDefault();
        let f = document.querySelector("#taskDD");
        if ( !f.checkValidity() ) {
            f.reportValidity();
            return;
        }
        let Ttitle = document.getElementById("title").value;
        let Tdate = document.getElementById("date").value;
        let Tprio = document.getElementById("priority").value;
        let Tdesc = document.getElementById("description").value;
        let newTa = new oneTask(Ttitle, Tdate, Tprio, Tdesc);

        ProjectModule.getActive().addTask(newTa);
        UI.renderActiveProject(ProjectModule.getActive());

        document.querySelector("#taskDia").close();
        f.reset();
    })
    //Delete button click event
    document.getElementById("projects_container").addEventListener("click", (event) => {
        if (event.target.classList.contains("project_button_del")) {
        event.stopPropagation();
        let parentP = event.target.getAttribute("data-pname");
        let foundP = ProjectModule.projectList.find(proj => proj.projectName === parentP);
            if (foundP === ProjectModule.getActive() && ProjectModule.projectList.length > 1) {
                ProjectModule.removeProject(foundP);
                ProjectModule.setActive(ProjectModule.projectList[0]);
                UI.renderActiveProject(ProjectModule.projectList[0]);
            }
            else if (foundP === ProjectModule.getActive() && ProjectModule.projectList.length === 1) {
                ProjectModule.removeProject(foundP);
                UI.renderNoProject();
            }
            else {
                ProjectModule.removeProject(foundP);
            }
        }
        UI.renderProjects();

    })
    
    return {initializeEvents}
})();

/*
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
        window.projectList = projectList;

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
            tcont.appendChild(taskDiv)

            let taskName = document.createElement("div");
            let ddate = document.createElement("div");
            taskName.textContent = "Task: " + task.title;
            ddate.textContent = "Due date: " + task.dueDate; 
            taskName.className = "tmain1"
            ddate.className = "tmain2"

            
            taskDiv.appendChild(taskName);
            taskDiv.appendChild(ddate);
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

        let del = document.createElement("button");
        del.className = "project_button_del";
        del.textContent = "Delete"
        //Delete button, if the active project is deleted activate default, if default if missing wire No projects 
        del.addEventListener("click", (e) => {
            e.stopPropagation();
            let theOne = projectList.findIndex(project => project === pro);
            
            if (activeProject === projectList[theOne]) {
                activate(projectList[0])
            }
            projectList.splice(theOne, 1);
            if (projectList.length === 0) {
                noProject();
            }
            
            projectButton.remove();
        })
        projectButton.appendChild(del)
    } 

    function noProject() {
        activeProject = ""
        let taskContainer = document.querySelector(".right_bottom");
        taskContainer.innerHTML = "";

        let top = document.querySelector(".active");
        top.textContent = "No projects"
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
            let f = document.querySelector("#projectDia");

            let projName = document.getElementById("name").value;

            if (projName.length > 0) {
            let newPro = new Project(projName);
            makeProjectButton(newPro);
            projectList.push(newPro);
            activate(newPro);
            document.getElementById("newProjectDialog").close();
            document.getElementById("name").value = "";
            }
            else {f.reportValidity();}
        });
    }

    function addTaskButton() {
            let newTask = document.querySelector(".addTask");
            newTask.addEventListener("click", () => {
            let taskDialog = document.getElementById("taskDia");
            if (activeProject !== "") {
            taskDialog.showModal();
            }
            else {alert("Create a project first")}
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
            let f = document.querySelector("#taskDD");
            if ( !f.checkValidity() ) {
                f.reportValidity();
                return;
            }

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

            let taskName = document.createElement("div");
            let ddate = document.createElement("div");
            taskName.textContent = "Task: " + task.title;
            ddate.textContent = "Due date: " + task.dueDate; 
            taskName.className = "tmain1"
            ddate.className = "tmain2"

            
            taskDiv.appendChild(taskName);
            taskDiv.appendChild(ddate);
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

*/