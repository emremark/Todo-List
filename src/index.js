import "/home/vboxuser/Desktop/js/Todo-List/src/styles.css"
import { Project } from "/home/vboxuser/Desktop/js/Todo-List/src/project"
import { oneTask } from "/home/vboxuser/Desktop/js/Todo-List/src/task"
import { appControler } from "./appControler";
import { domControler } from "./domControler";

const {defProject, createProject} = appControler();
const {onStart} = domControler();
document.addEventListener("DOMContentLoaded", () => {
    onStart();
})
