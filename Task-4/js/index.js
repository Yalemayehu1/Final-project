const taskManager = new TaskManager(0);

const newTaskForm = document.querySelector('#newTaskForm');

newTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const newTaskNameInput = document.querySelector('#newTaskNameInput');
    const newTaskDescription = document.querySelector('#newTaskDescription');
    const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
    const newTaskDueDate = document.querySelector('#newTaskDueDate');

    /*
        Validation code here
    */

    const name = newTaskNameInput.value;
    const description = newTaskDescription.value;
    const assignedTo = newTaskAssignedTo.value;
    const dueDate = newTaskDueDate.value;

    let alert = document.getElementById('alert')

    if (!name || !description || !assignedTo || !dueDate) {
        let string = ""

        if (!name) {
            string += "name "
        }

        if (!description) {
            string += "description "
        }

        if (!assignedTo) {
            string += "assignedTo "
        }

        if (!dueDate) {
            string += "dueDate "
        }

        alert.innerText = string + "are missing!"
        alert.style.display = 'block'
    } else {
        alert.style.display = 'none'
    }




    taskManager.addTask(name, description, assignedTo, dueDate);

    // Render the tasks
    taskManager.render();

    newTaskNameInput.value = '';
    newTaskDescription.value = '';
    newTaskAssignedTo.value = '';
    newTaskDueDate.value = '';
});

function validFormFieldInput(data) {

}

let alert = document.getElementById('alert')
alert.style.display = 'none'

