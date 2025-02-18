import "/home/vboxuser/Desktop/js/Todo-List/src/styles.css"
import { Project } from "/home/vboxuser/Desktop/js/Todo-List/src/project"
import { oneTask } from "/home/vboxuser/Desktop/js/Todo-List/src/task"
import { mainMod } from "./mainmod";




const { onStart } = mainMod();
document.addEventListener("DOMContentLoaded", () => {
    onStart();
})
