// Define UI Vars
const form = document.querySelector('#task-form');
// console.log(form);
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load all event listeners
loadEventListeners();

// define all event listeners function
function loadEventListeners() {
    // add task event
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);
    clearBtn.addEventListener('click', clearTasks);
}

// add task function
function addTask(e) {
    if (taskInput.value === '') {
        alert('Add a task');
    }
    //Create li element
    const li = document.createElement('li');

    //add class
    li.className = 'collection-item';

    //Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));

    //Create link
    const link = document.createElement('a');

    //add class
    link.className = 'delete-item secondary-content';

    // add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';

    //append link to li
    li.appendChild(link);

    //append li to ul
    taskList.appendChild(li);

    //clear input
    taskInput.value = '';

    e.preventDefault();
}

// remove task function
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are You Sure?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
}

// remove all task function (clear all)
function clearTasks() {

    // taskList.innerHTML = '';

    //faster
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

}


