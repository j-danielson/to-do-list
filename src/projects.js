var projectList = [];

function createNewProject(title, priority, dueDate, description) {
    this.title = title;
    this.priority = priority;
    this.dueDate = dueDate;
    this.description = description;
}

export {projectList, createNewProject};