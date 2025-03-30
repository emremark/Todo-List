import { eventListeners } from "./events"
import { ProjectModule } from "./project";
import { UI } from "./UI";
import { locStorage } from "./storage";

export const appMain = (function() {

    function onStart() {
        if (!localStorage.getItem("projekti")) {
            eventListeners.initializeEvents();
            let defP = "Default Project";
            let p = ProjectModule.createNewProject(defP);
            ProjectModule.setActive(p);
            UI.renderProjects();
            UI.renderActiveProject(p)
        }

        else {
            eventListeners.initializeEvents();
            let lst = JSON.parse(localStorage.getItem('projekti'));
            ProjectModule.projectList = lst;
            UI.renderProjects();
            let first = ProjectModule.projectList[0];
            UI.renderActiveProject(first)
        }
 
    }

    return {onStart}
})();