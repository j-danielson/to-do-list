
function generateProject(title){
    var container = document.getElementById('projectField');
    var project = document.createElement('div');
    project.setAttribute('class', 'project');
    var content = document.createElement('p');
    content.innerHTML = title;
    project.appendChild(content);
    container.appendChild(project);
}

function generateTask(title){
    var container = document.getElementById('taskField');
    var task = document.createElement('div');
    task.setAttribute('class', 'task');
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
    console.log(forms);
    for (var i = 0; i < forms.length; i++) {
        forms[i].reset();
    }
}

export {generateProject, generateTask, showModal, hideModal};