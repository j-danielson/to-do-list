// import {submitProjectButton} from './buttons';
import {projectList} from './projects';
import {addProject} from './events';

var submitProjectButton = document.getElementById('submitProject');

submitProjectButton.onclick = () => {
    addProject();
    console.log(projectList);
}