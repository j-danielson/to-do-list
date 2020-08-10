import {projectList, createNewProject} from './projects';
import {generateProject} from './render';

function addProject() {

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

function showModal(id) {
    id.style.display = block;
}

function hideModal(id) {
    id.style.display = none;
}

export {addProject, showModal, hideModal};