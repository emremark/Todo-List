import { Project } from "/home/vboxuser/Desktop/js/Todo-List/src/project";
import { eventHand } from "/home/vboxuser/Desktop/js/Todo-List/src/eventListeners"
import { oneTask } from "./task";

export const domControler = function () {
    let projectList = [];
    let activeProject = null;

    function onStart() {
        //Create default and add to list
        const defaultProject = new Project("Default Project");
        projectList.push(defaultProject);

        //Create the default project button and add to UI
        let pCont = document.getElementById("projects_container");
        let defPr = document.createElement("button");
        defPr.className = "project_button";
        defPr.textContent = defaultProject.projectName;
        defPr.setAttribute("data-name", "Default Project")
        pCont.appendChild(defPr);
        eventL();
        }

        function setActive(projectN) {
            let ind = projectList.findIndex(project => project.projectName === projectN)
            let top = document.querySelector(".right_top");
            top.textContent = projectList[ind].projectName;
            let newTask = document.createElement("button");
            newTask.className = "addTask";
            top.appendChild(newTask);
            newTask.textContent = "Add task";
        }
        function eventL(){
        document.querySelectorAll(".project_button").forEach(button => {
            button.addEventListener("click", (e) => {
                let pn = e.target.getAttribute("data-name");
                setActive(pn);
            });
        });
    }
        

        return {onStart}
}
 /*
    function onStart() {
        //Create default and add to list
        const defProject = new Project("Default Project");
        projectList.push(defProject);
        //activeProject = defProject;

        //Create the default project butto and add to UI
        let pCont = document.getElementById("projects_container");
        let defPr = document.createElement("button");
        defPr.className = "project_button";
        defPr.textContent = defProject.projectName;
        defPr.setAttribute("data-name", "Default Project")
        pCont.appendChild(defPr);    
        }
        //Ovo bi trebalo da menja samo active project let a ne ovako. Vratiti se na ovo kasnije i prepraviti. Ocajan dizajn.
    function setActive() {
            document.querySelectorAll(".project_button").forEach(button => {
                button.addEventListener("click", () => {
                    let top = document.querySelector(".right_top");
                    activeProject = 
                    top.textContent = button.getAttribute("data-name");
                    let newTask = document.createElement("button");
                    newTask.className = "addTask";
                    top.appendChild(newTask);
                    newTask.textContent = "Add task";

                    document.querySelectorAll(".addTask").forEach(button => {
                        button.addEventListener("click", () => {
                            let tskDialog = document.getElementById("taskDia");
                            tskDialog.showModal();
                        });
                    });
            
                    document.getElementById("submit").addEventListener("click", (e) =>{
                        e.preventDefault();
                        let Ttitle = document.getElementById("title").value;
                        let Tdate = document.getElementById("date").value;
                        let Tprio = document.getElementById("priority").value;
                        let Tdesc = document.getElementById("description").value;

                        let newTa = new oneTask;
                        newTa.newTask(Ttitle, TDate, Tprio, Tdesc);

            
                        let taskDiv = document.createElement("div");
                        taskDiv.className = "tdiv";
                        let tcont = document.querySelector(".right_bottom");
                        tcont.appendChild(taskDiv);
                        document.getElementById("taskDia").close();
                    })
                    
                })
            })
        }

    function loadUI() {
        const addnewP = document.querySelector(".btn_new_project");
        addnewP.addEventListener("click", () => {
        let projDialog = document.getElementById("newProjectDialog");
        projDialog.showModal();
        });

        document.getElementById("submitp").addEventListener("click", (e) => {
            e.preventDefault();
            let pName = document.getElementById("name").value;
            let newPro = new Project(pName);
            let pCont1 = document.getElementById("projects_container");
            let newProButton = document.createElement("button");
            newProButton.className = "project_button";
            newProButton.textContent = pName;
            newProButton.setAttribute("data-name", pName)
            pCont1.appendChild(newProButton);
            projectList.push(newPro);
            document.getElementById("newProjectDialog").close();
            setActive()
        });
        }


        return {onStart, loadUI, setActive};
    }
    */