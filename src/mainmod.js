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
        }); 

    }
    return {onStart}
}

/*
import { Project } from "./project";
import { ui } from "./ui";


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



/*
export const domControler = function () {
    let projectList = [];
    let activeProject = null;

    function onStart1() {
        const defaultProject = new Project("Default Project");
        projectList.push(defaultProject);
        activeProject = defaultProject;

        let pCont = document.getElementById("projects_container");
        let defPr = document.createElement("button");
        defPr.className = "project_button";
        defPr.textContent = defaultProject.projectName;
        defPr.setAttribute("data-name", "Default Project")
        pCont.appendChild(defPr);
    }
    function onStart2() {
        //ovde pozovi event listener za Add Project
        const addnewP = document.querySelector(".btn_new_project");
        addnewP.addEventListener("click", () => {
            let projDialog = document.getElementById("newProjectDialog");
            projDialog.showModal();
        });

        document.getElementById("submitp").addEventListener("click", (e) => {
            e.preventDefault();
            let projName = document.getElementById("name").value;
            let newPro = new Project(projName);
            //activeProject = newPro;

            let pCont = document.getElementById("projects_container");
            let projectButton = document.createElement("button");
            projectButton.className = "project_button";
            projectButton.textContent = newPro.projectName;
            projectButton.setAttribute("data-name", newPro.projectName);

            projectButton.addEventListener("click", () => {
                
            });

            pCont.appendChild(projectButton);

        });

        
    }

    return {onStart1, onStart2};
}

/*
    function onStart() {
        const defaultProject = new Project("Default Project");
        projectList.push(defaultProject);
        let defPr = document.createElement("button");
        defPr.className = "project_button";
        defPr.textContent = defaultProject.projectName;
        defPr.setAttribute("data-name", "Default Project")

        renderProjects(projectList);
    }

    return {onStart, addProject}
}

/*
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
        makeProject();
        eventL();
    }

    function refresh(proj) {
        let tcont = document.querySelector(".right_bottom");
        tcont.innerHTML = "";
        proj.task_list.forEach((taks) => {
            let taskDiv = document.createElement("div");
            taskDiv.className = "tdiv";
            tcont.appendChild(taskDiv)
        })
    };
       

    //find the project in list and set to active
    function setActive(projectN) {
        let ind = projectList.findIndex(project => project.projectName === projectN)
        let foundProject = projectList[ind];
        let top = document.querySelector(".right_top");
        top.textContent = foundProject.projectName;

        let newTask = document.createElement("button");
        newTask.className = "addTask";
        top.appendChild(newTask);
        newTask.textContent = "Add task";
        activeProject = foundProject;

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
            foundProject.addTask(newTa);
            document.getElementById("taskDia").close()

            refresh(foundProject);
        })
    }

    function eventL(){
        document.querySelectorAll(".project_button").forEach(button => {
            button.addEventListener("click", (e) => {
                let pn = e.target.getAttribute("data-name");
                setActive(pn);
            });
        });
    }
    //When Add Project is clicked new button is generated, new Project made and pushed to list
    function makeProject() {
        const addnewP = document.querySelector(".btn_new_project");
        addnewP.addEventListener("click", () => {
            let projDialog = document.getElementById("newProjectDialog");
            projDialog.showModal();
        });

        document.getElementById("submitp").addEventListener("click", (e) => {
            e.preventDefault();
            let projName = document.getElementById("name").value;
            let newPro = new Project(projName);
            let pCont = document.getElementById("projects_container");

            let newProButton = document.createElement("button");
            newProButton.className = "project_button";
            newProButton.textContent = projName;
            newProButton.setAttribute("data-name", projName)

            newProButton.addEventListener("click", (e) => {
                let pn = e.target.getAttribute("data-name");
                setActive(pn);
            })

            pCont.appendChild(newProButton);
            projectList.push(newPro);
            document.getElementById("newProjectDialog").close()
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
  