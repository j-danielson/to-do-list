var projectList = [];

function generateProject(priority, dueDate, discription) {
    this.priority = priority;
    this.dueDate = dueDate;
    this.discription = discription;
}

export {projectList, generateProject};