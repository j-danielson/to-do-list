var projectList = [];

function createNewProject(title) {
    this.title = title;
    this.active = false;
}

export {projectList, createNewProject};