import "/home/vboxuser/Desktop/js/Todo-List/src/styles.css"
import { Project } from "/home/vboxuser/Desktop/js/Todo-List/src/project"
import { oneTask } from "/home/vboxuser/Desktop/js/Todo-List/src/task"
import { domControler } from "./domControler";


const {onStart, setActive} = domControler();
document.addEventListener("DOMContentLoaded", () => {
    onStart()
})
