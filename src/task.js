export class oneTask {
    static count = 0;
        constructor(title, dueDate, priority, description) {
            this.id = ++oneTask.count;
            this.title = title;
            this.dueDate = dueDate;
            this.priority = priority;
            this.description = description;
        }
}




