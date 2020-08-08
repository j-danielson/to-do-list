const { generateProject } = require("./projects");
import {addProject} from './events';

var submitProjectButton = document.getElementById('submitProject');

submitProjectButton.onclick = () => {
    addProject();
}