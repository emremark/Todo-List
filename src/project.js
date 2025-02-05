export class Project {
        constructor(projectName) {
            this.task_list = [];
            this.projectName = projectName;
        }
    
        addTask(taskk) {
            this.task_list.push(taskk);
        }

        removeTask(id) {
            const taskIndex = this.task_list.findIndex(task => task.id === id);
            
            if (taskIndex !== -1) {
                this.task_list.splice(taskIndex, 1);
            }
        }

    }


