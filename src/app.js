import { eventListeners } from "./events"
import { ProjectManager } from "./project";
import { UI } from "./UI";

export const appMain = (function() {

    function onStart() {
        eventListeners.initializeEvents();
        let defP = "Default Project";
        let p = ProjectManager.createNewProject(defP);
        UI.renderProjects();
        UI.renderActiveProject(p)
    }

    return {onStart}
})();