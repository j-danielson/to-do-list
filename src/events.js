import {projectList, generateProject} from './projects';

function addProject() {

    var title = document
    var priority = document
    var dueDate = document
    var discription = document
    const project = new generateProject(title, priority, dueDate, discription);
}

function showModal(id) {
    id.style.display = block;
}

function hideModal(id) {
    id.style.display = none;
}