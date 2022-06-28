// Select the New Task Form
const taskManager = new TaskManager
const newTaskForm = document.querySelector('#newTask') //creating a variable called constant(const) for '#newTask'
// Add an 'onsubmit' event listener
newTaskForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault(); //The preventDefault() method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.(Mozilla)
    // Select the inputs
    const newTaskNameInput = document.querySelector('#newTaskNameInput'); //creating a variable called constant(const which is immutable) for #newTaskNameInput
    const newTaskDescription = document.querySelector('#newTaskDescription');
    const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
    const newTaskDueDate = document.querySelector('#newTaskDueDate');
    const errorMessage = document.querySelector('#alertMessage');
    /*
        Validation code here
    */
    const name = newTaskNameInput.value; // it pass a function  name called name 
    const description = newTaskDescription.value; //it pass a function  name called description
    const assignedTo = newTaskAssignedTo.value;
    const dueDate = newTaskDueDate.value;
    if (!validFormFieldInput(name)) {
        //a function for the input text to check if it is valid, invalid or error.
        errorMessage.innerHTML = "Invalid name input";
        errorMessage.style.display = "block"
    } else {
        errorMessage.style.display = "none"
    }
    taskManager.addTask(name, description, assignedTo, dueDate)
    newTaskNameInput.value = ''
    newTaskDescription.value = ''
    newTaskAssignedTo.value = ''
    newTaskDueDate.value = ''
});

function validFormFieldInput(data) {
    return data !== null && data !== ''; //The validateForm method assigns the elements you want to validate and then in this case calls the isNotEmpty method to validate if the field is empty or has not been changed from the default value. it continuously calls the inNotEmpty method until it returns a value of true or if the conditional fails for that field it will return false.
}

    // Get the values of the inputs