
import {setActiveProject} from './events.js'
import { projectList } from './projects.js';

function generateProject(title){
    var container = document.getElementById('projectField');
    var project = document.createElement('div');
    project.addEventListener('click', setActiveProject);
    project.setAttribute('class', 'project');
    project.setAttribute('data-index', projectList.length - 1);
    if(!document.getElementsByClassName('activeProject').length) {
        project.classList.add('activeProject');
        projectList[0].active = true;
    }
    project.innerHTML = title;
    container.appendChild(project);
    
    //Need to create new task div
    //make it invisable
    //make task div visable when that project is active
}

function generateTask(title){
    var container = document.getElementById('taskField');
    var task = document.createElement('div');
    task.setAttribute('class', 'task');
    var current = projectList.find(({active}) => active == true);
    task.classList.add(current.title.toString());
    var content = document.createElement('p');
    content.innerHTML = title;
    task.appendChild(content);
    container.appendChild(task);
}

function showModal(id) {
    id.style.display = 'block';
}

function hideModal(id) {
    id.style.display = 'none';
    var forms = document.getElementsByTagName('form');
    for (var i = 0; i < forms.length; i++) {
        forms[i].reset();
    }
}

export {generateProject, generateTask, showModal, hideModal};