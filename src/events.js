import {projectList, createNewProject} from './projects.js';
import {generateProject, generateTask} from './render.js';
import {createNewTask} from './tasks.js';

function addProject() {
    var title = document.getElementById('projectTitle').value;
    const project = new createNewProject(title);
    console.log(project);
    projectList.push(project);
    console.log(projectList);
    generateProject(title);
}

function addTask() {
    var title = document.getElementById('taskTitle').value;
    var priority = document.getElementById('taskPriority').value;
    var dueDate = document.getElementById('taskDueDate').value;
    var description = document.getElementById('taskDescription').value;
    const task = new createNewTask(title, priority, dueDate, description);
    console.log(task);
    generateTask(title);
}

function setActiveProject(e) {
    var activeproject = document.getElementsByClassName('activeProject')[0];
    if(activeproject != e.currentTarget){
        activeproject.classList.remove('activeProject');
        e.currentTarget.classList.add('activeProject');
        var current = projectList.find(({active}) => active == true);
        current.active = false;
        projectList[e.currentTarget.dataset.index].active = true;
    }

}


export {addProject, addTask, setActiveProject};