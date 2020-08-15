import {projectList, createNewProject} from './projects.js';
import {generateProject} from './render.js';

function addProject() {
    var title = document.getElementById('projectTitle').value;
}

function addTask() {
    var title = document.getElementById('projectTitle').value;
    var priority = document.getElementById('projectPriority').value;
    var dueDate = document.getElementById('projectDueDate').value;
    var description = document.getElementById('projectDescription').value;
    const project = new createNewProject(title, priority, dueDate, description);
    console.log(project);
    projectList.push(project);
    console.log(projectList);
    generateProject(title);
}


export {addProject, addTask};