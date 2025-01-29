export const domControler = function () {
    function onStart() {
        let pCont = document.getElementById("projects_container");
        let defPr = document.createElement("button");
        defPr.className = "project_button";
        defPr.textContent = "Default Project"
        pCont.appendChild(defPr);
    }
    return {onStart}
}