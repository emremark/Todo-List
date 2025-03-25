
export const ProjectModule = (function () {

    const projectList = [];
    let activeProject = "";


    class Project {
        constructor(projectName) {
            this.task_list = [];
            this.projectName = projectName;
        }
        
        addTask(task) {
            this.task_list.push(task);
        }

        removeTask(id) {
            const taskIndex = this.task_list.findIndex(task => task.id === id);
                
            if (taskIndex !== -1) {
                this.task_list.splice(taskIndex, 1);
            }
        }

        getTask(id) {
            return this.task_list.find(task => task.id === id);
        }
    }

    function createNewProject(pName) {
        const newP = new Project(pName);
        projectList.push(newP);
        return newP;
    }

    function removeProject(name) {
        let projectIndex = projectList.findIndex(project => project === name);
        projectList.splice(projectIndex, 1);
    }

    function setActive(project) {
        activeProject = project;
    }

    function getActive() {
        return activeProject;
    }

    return { createNewProject, removeProject, setActive, getActive, projectList };
})();