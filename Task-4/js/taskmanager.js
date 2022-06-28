// create a TaskManager Class

class TaskManager {
    //set up the task and currentID properties in the constructor.
    constructor(currentid = 0) {
        this.task = []; //it initialize an empty array
        this.currentId = this.currentId;
    }
    // create the addTask method
    addTask(name, description, assignedTo, dueDate) {
        const task = {
            // increament the currentId proprty
            id: this.currentId++, //currentId = currentId + 1
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: 'TODO'
        };
        //push the task to the task proprty
        this.tasks.push(task); //The push() method adds new items to the end of an array. The push() method changes the length of the array. The push() method returns the new length.
        this.currentId++
        console.log(this);
    }
}