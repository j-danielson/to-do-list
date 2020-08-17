function createNewTask(title, priority, dueDate, description, project) {
    this.title = title;
    this.priority = priority;
    this.dueDate = dueDate;
    this.description = description;
    this.project = project;
}

var tasks = [{title: 'Task 1', priority: 1, dueDate: 10/10/2020, description: 'test', project: 'project 1'},
{title: 'Task 2', priority: 1, dueDate: 10/10/2020, description: 'test', project: 'project 1'},
{title: 'Task 3', priority: 1, dueDate: 10/10/2020, description: 'test', project: 'project 2'},
{title: 'Task 4', priority: 1, dueDate: 10/10/2020, description: 'test', project: 'project 2'}];
export {createNewTask, tasks}

//Test Tasks
// {title: 'Task 1', priority: 1, dueDate: 10/10/2020, description: 'test', project: 'project 1'},
// {title: 'Task 2', priority: 1, dueDate: 10/10/2020, description: 'test', project: 'project 1'},
// {title: 'Task 3', priority: 1, dueDate: 10/10/2020, description: 'test', project: 'project 2'},
// {title: 'Task 4', priority: 1, dueDate: 10/10/2020, description: 'test', project: 'project 2'}
