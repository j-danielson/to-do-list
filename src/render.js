
import {setActiveProject} from './events.js'
import { projectList } from './projects.js';
import {tasks} from './tasks.js';

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
}

function generateActiveTasks(){
    var container = document.getElementById('taskField');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    var activeProject = projectList.find(({active}) => active == true);
    var projectTasks = tasks.filter(({project}) => project == activeProject.title);
    console.log('this is projectTasks');
    console.log(projectTasks);
    projectTasks.forEach(task => {
        var taskDiv = document.createElement('div');
        taskDiv.setAttribute('class', 'task');
        taskDiv.classList.add(task.priority);
        var contentTitle = document.createElement('p');
        var contentPriority = document.createElement('p');
        var contentDueDate = document.createElement('p');
        var contentDescription = document.createElement('p');
        contentTitle.innerHTML = task.title;
        contentPriority.innerHTML = 'Priority: ' + task.priority;
        contentDueDate.innerHTML = 'Due: ' + task.dueDate;
        contentDescription.innerHTML = task.description;
        taskDiv.append(contentTitle, contentPriority, contentDueDate, contentDescription);
        container.appendChild(taskDiv);
    });

}

function generateTask(title, priority, dueDate, description){
    var container = document.getElementById('taskField');
    var taskDiv = document.createElement('div');
    taskDiv.setAttribute('class', 'task');
    taskDiv.classList.add(priority);
    var contentTitle = document.createElement('p');
    var contentPriority = document.createElement('p');
    var contentDueDate = document.createElement('p');
    var contentDescription = document.createElement('p');
    contentTitle.innerHTML = title;
    contentPriority.innerHTML = 'Priority: ' + priority;
    contentDueDate.innerHTML = 'Due: ' + dueDate;
    contentDescription.innerHTML = description;
    taskDiv.append(contentTitle, contentPriority, contentDueDate, contentDescription);
    container.appendChild(taskDiv);
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

export {generateProject, generateTask, generateActiveTasks, showModal, hideModal};