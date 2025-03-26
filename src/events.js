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
    
    //Task button event for Delete:
    document.querySelector(".right_bottom").addEventListener("click", (event) => {
        if (event.target.classList.contains("delTaskButton")) {
            event.stopPropagation();
            let taskId = Number(event.target.getAttribute("data-taskt"));
            let acti = ProjectModule.getActive();
            acti.removeTask(taskId);
            UI.renderActiveProject(acti);
        }
        if (event.target.classList.contains("tdiv")) {
            event.stopPropagation();
            let taskId = Number(event.target.getAttribute("data-taskt"));
            let activ = ProjectModule.getActive();
            let taskObj = activ.getTask(taskId);

            document.getElementById("titleEdit").value = taskObj.title;
            document.getElementById("dateEdit").value = taskObj.dueDate;
            document.getElementById("priorityEdit").value = taskObj.priority;
            document.getElementById("descriptionEdit").value = taskObj.description;
            document.querySelector("#taskEditDia").showModal();

            document.querySelector("#submitEdit").addEventListener("click", (e) => {
                e.preventDefault();
                let f = document.querySelector("#taskEditForm");
                if ( !f.checkValidity() ) {
                    f.reportValidity();
                    return;
                }
                taskObj.title = document.getElementById("titleEdit").value;
                taskObj.dueDate = document.getElementById("dateEdit").value;
                taskObj.priority = document.getElementById("priorityEdit").value;
                taskObj.description = document.getElementById("descriptionEdit").value
        
                UI.renderActiveProject(ProjectModule.getActive());
                document.querySelector("#taskEditDia").close();
            })
            document.querySelector("#closeEdit").addEventListener("click", (e) => { 
                e.preventDefault();
                document.querySelector("#taskEditDia").close();
            })
        }
    });

}    
    return {initializeEvents}
})();
