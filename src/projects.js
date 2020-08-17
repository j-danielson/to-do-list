var projectList = [];

function createNewProject(title) {
    this.title = title;
    this.active = false;
}

export {projectList, createNewProject};

//test projects
// {title: 'project 1', active: true}
// {title: 'project 2', active: false}