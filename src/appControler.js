import { Project } from "/home/vboxuser/Desktop/js/Todo-List/src/project";
export const appControler = function () {
    const defProject = new Project("Default Project");

    let projectList = [];

    projectList.push(defProject);

    function createProject(name) {
        const newProject = new Project(name);
        projectList.push(newProject);
        return newProject
    }

    return {defProject, createProject};
}


