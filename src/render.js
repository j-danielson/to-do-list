
function generateProject(title){
    var container = document.getElementById('projects');
    var project = document.createElement('div');
    project.setAttribute('class', 'project');
    var content = document.createElement('p');
    content.innerHTML = title;
    project.appendChild(content);
    container.appendChild(project);
}

export {generateProject};