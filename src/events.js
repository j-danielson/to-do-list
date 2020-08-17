import {projectList, createNewProject} from './projects.js';
import {generateProject, generateTask, generateActiveTasks} from './render.js';
import {createNewTask, tasks} from './tasks.js';

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
    var project = projectList.find(({active}) => active == true);
    const task = new createNewTask(title, priority, dueDate, description, project.title.toString());
    tasks.push(task);
    console.log(task);
    generateTask(title, priority, dueDate, description);
}

function setActiveProject(e) {
    var activeproject = document.getElementsByClassName('activeProject')[0];
    if(activeproject != e.currentTarget){
        activeproject.classList.remove('activeProject');
        e.currentTarget.classList.add('activeProject');
        var current = projectList.find(({active}) => active == true);
        console.log(current);
        current.active = false;
        console.log(e.currentTarget.dataset.index);
        projectList[e.currentTarget.dataset.index].active = true;
        generateActiveTasks();
    }

}


export {addProject, addTask, setActiveProject};