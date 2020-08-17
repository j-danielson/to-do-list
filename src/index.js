// import {submitProjectButton} from './buttons';
import {projectList} from './projects.js';
import {addProject, addTask} from './events.js';
import {showModal, hideModal} from './render.js';

var submitProjectButton = document.getElementById('submitProject');
var submitTaskButtton = document.getElementById('submitTask');
var addProjectButton = document.getElementById('addProjectBtn');
var addTaskButton = document.getElementById('addTaskBtn');
var cancelProjectButton = document.getElementById('cancelProject');
var cancelTaskButton = document.getElementById('cancelTask');
//modals vars
var newProjectModal = document.getElementById('newProjectModal');
var newTaskModal = document.getElementById('newTaskModal');

submitProjectButton.onclick = () => {
    addProject();
    hideModal(newProjectModal);
}

addProjectButton.onclick = () => {
    showModal(newProjectModal);
}
//close Modals
cancelProjectButton.onclick = () => {
    hideModal(newProjectModal);
}
window.onclick = function(event) {
    if (event.target == newProjectModal || event.target == newTaskModal) {
        console.log(event.target);
        hideModal(event.target);
    }
}

//Task Modal
submitTaskButtton.onclick = () => {
    addTask();
    hideModal(newTaskModal);
}

addTaskButton.onclick = () => {
    showModal(newTaskModal);
}
//close Modals
cancelTaskButton.onclick = () => {
    hideModal(newTaskModal);
}


//What else I need to add
//Add Delete/Complete buttons
//change font
//adjust forms to make it smoother