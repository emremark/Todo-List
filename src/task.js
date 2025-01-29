export class oneTask {
        constructor() {
            this.title = "";
            this.desc = "";
            this.dueDate = "";
            this.priority = "";
            this.id = 0;
        }
        addTask(title, desc, dueDate, priority) {
            this.title = title;
            this.desc = desc
            this.dueDate = dueDate;
            this.priority = priority;
            this.id = id + 1;
        }

}






/*
class Library {
    constructor() {
        this.books = [];
    }
    
    addBook(title, author, pages, read) {
        const book = {title, author, pages, read};
        this.books.push(book);
    }
    
} title, description, dueDate and priority.
*/