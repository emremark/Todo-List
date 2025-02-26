import { eventListeners } from "./events"
import { ProjectModule } from "./project";
import { UI } from "./UI";

export const appMain = (function() {

    function onStart() {
        eventListeners.initializeEvents();
        let defP = "Default Project";
        let p = ProjectModule.createNewProject(defP);
        ProjectModule.setActive(p);
        UI.renderProjects();
        UI.renderActiveProject(p)
    }

    return {onStart}
})();