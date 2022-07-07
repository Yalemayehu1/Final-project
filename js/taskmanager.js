// // Create the HTML for a task
// // creating a variable for ananymous function
// const createTaskHtml = (name, description, assignedTo, dueDate, status) => `
//     <li class="list-group-item">
//         <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
//             <h5>${name}</h5>
//             <span class="badge badge-danger">${status}</span>
//         </div>
//         <div class="d-flex w-100 mb-3 justify-content-between">
//             <small>Assigned To: ${assignedTo}</small>
//             <small>Due: ${dueDate}</small>
//         </div>
//         <p>${description}</p>
//     </li>
//     <p>${description}</p>
//         <div class="d-flex w-100 justify-content-end">
//             <button class="btn btn-outline-success done-button ${status === 'TODO' ? 'visible' : 'invisible'}">Mark As Done</button>
//         </div>
//     </li>
// `;

// class TaskManager {
//     //set up the task and currentID properties in the constructor.
//     constructor(currentId = 0) {
//         this.tasks = [];
//         this.currentId = currentId;
//     }

//     addTask(name, description, assignedTo, dueDate) {
//         const task = {
//             id: this.currentId++,
//             name: name,
//             description: description,
//             assignedTo: assignedTo,
//             dueDate: dueDate,
//             status: 'TODO'
//         };

//         this.tasks.push(task); //The push() method adds new items to the end of an array. The push() method changes the length of the array. The push() method returns the new length.
//     }


//     getTaskById(taskId) {
//         // Create a variable to store the found task
//         let foundTask;

//         // Loop over the tasks and find the task with the id passed as a parameter
//         for (let i = 0; i < this.tasks.length; i++) {
//             // Get the current task in the loop
//             const task = this.tasks[i];

//             // Check if its the right task by comparing the task's id to the id passed as a parameter
//             if (task.id === taskId) {
//                 // Store the task in the foundTask variable
//                 foundTask = task;
//             }
//         }

//         // Return the found task
//         return foundTask;
//     }

//     // Create the render method
//     render() {
//         // Create an array to store the tasks' HTML
//         const tasksHtmlList = [];

//         // Loop over our tasks and create the html, storing it in the array
//         // I want to creat a loop to iterate over our tasks and create the html and also store them in the array.
//         for (let i = 0; i < this.tasks.length; i++) {
//             // Get the current task in the loop
//             const task = this.tasks[i];

//             // Format the date
//             const date = new Date(task.dueDate);
//             const formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
//             // Create the task html
//             const taskHtml = createTaskHtml(task.name, task.description, task.assignedTo, formattedDate, task.status);

//             // Push it to the tasksHtmlList array
//             tasksHtmlList.push(taskHtml);
//         }

//         // Create the tasksHtml by joining each item in the tasksHtmlList
//         // with a new line in between each item.

//         const tasksHtml = tasksHtmlList.join('\n');

//         // Set the inner html of the tasksList on the page
//         const tasksList = document.querySelector('#tasksList');
//         tasksList.innerHTML = tasksHtml;
//     }
//     save() {
//         /*The JSON. stringify() method converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified. */
//         const tasksJson = JSON.stringify(this.tasks);

//         localStorage.setItem('tasks', tasksJson);

//         const currentId = String(this.currentId);

//         localStorage.setItem('currentId', currentId);
//     }

//     //This task 8
//     //In this task I implmeneted a load method to use persistent storage
//     /*
//     localStorage is a property that allows JavaScript sites and apps to save key-value pairs in a web browser with no expiration date. This means the data stored in the browser will persist even after the browser window is closed.
//     */
//     load() {
//         if (localStorage.getItem('tasks')) {
//             const tasksJson = localStorage.getItem('tasks');

//             this.tasks = JSON.parse(tasksJson); //The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string. An optional reviver function can be provided to perform a transformation on the resulting object before it is returned.
//         }

//         if (localStorage.getItem('currentId')) {
//             const currentId = localStorage.getItem('currentId');

//             this.currentId = Number(currentId);
//         }
//     }
// }
// Add an data-task-id attribute to each task
const createTaskHtml = (id, name, description, assignedTo, dueDate, status) => `
    <li class="list-group-item" data-task-id=${id}>
        <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
            <h5>${name}</h5>
            <span class="badge ${status === 'TODO' ? 'badge-danger' : 'badge-success'}">${status}</span>
        </div>
        <div class="d-flex w-100 mb-3 justify-content-between">
            <small>Assigned To: ${assignedTo}</small>
            <small>Due: ${dueDate}</small>
        </div>
        <p>${description}</p>
        <div class="d-flex w-100 justify-content-end">
            <button class="btn btn-outline-success done-button mr-1 ${status === 'TODO' ? 'visible' : 'invisible'}">Mark As Done</button>
            <button class="btn btn-outline-danger delete-button">Delete</button>
        </div>
    </li>
`;
class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }
    addTask(name, description, assignedTo, dueDate) {
        const task = {
            id: this.currentId++,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: 'TODO'
        };
        this.tasks.push(task);
    }
    // Create the deleteTask method
    deleteTask(taskId) {
        // Create an empty array and store it in a new variable, newTasks
        const newTasks = [];
        // Loop over the tasks
        for (let i = 0; i < this.tasks.length; i++) {
            // Get the current task in the loop
            const task = this.tasks[i];
            // Check if the task id is not the task id passed in as a parameter
            if (task.id !== taskId) {
                // Push the task to the newTasks array
                newTasks.push(task);
            }
        }
        // Set this.tasks to newTasks
        this.tasks = newTasks;
    }
    getTaskById(taskId) {
        let foundTask;
        for (let i = 0; i < this.tasks.length; i++) {
            const task = this.tasks[i];
            if (task.id === taskId) {
                foundTask = task;
            }
        }
        return foundTask;
    }
    render() {
        const tasksHtmlList = [];
        for (let i = 0; i < this.tasks.length; i++) {
            const task = this.tasks[i];
            const date = new Date(task.dueDate);
            const formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
            const taskHtml = createTaskHtml(task.id, task.name, task.description, task.assignedTo, formattedDate, task.status);
            tasksHtmlList.push(taskHtml);
        }
        const tasksHtml = tasksHtmlList.join('\n');
        const tasksList = document.querySelector('#tasksList');
        tasksList.innerHTML = tasksHtml;
    }
    save() {
        const tasksJson = JSON.stringify(this.tasks);
        localStorage.setItem('tasks', tasksJson);
        const currentId = String(this.currentId);
        localStorage.setItem('currentId', currentId);
    }
    load() {
        // This is task 8.
        // In this task I implemeneted a load method to use persistent storage.
        /*
            In general, data you store will either be: persistent: it remains until your code chooses to delete it, or. volatile: it remains until the browser session ends, typically when the user closes the tab.
        */
        if (localStorage.getItem('tasks')) {
            const tasksJson = localStorage.getItem('tasks');
            this.tasks = JSON.parse(tasksJson);
        }
        if (localStorage.getItem('currentId')) {
            const currentId = localStorage.getItem('currentId');
            this.currentId = Number(currentId);
        }
    }
}