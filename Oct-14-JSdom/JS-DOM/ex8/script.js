/*
    Make a Todo List
    0) Make it so that after entering the task and clicking the "Add Task" button, that new task appears inside the todo-list.
    1) Add the ability to check off tasks by clicking on them - (text-decoration:strikethrough is a nice way to)
    BONUS) Add a functioning "delete" button to each task (HINT: use the keyword "this" in your delete button's click listener! Console log "this" to see what value it holds)
    SUPER BONUS) Make each task editable
*/

let saveButton = document.getElementById("add-button")
let taskTextBox = document.getElementById('description')
let pendingTasksList = document.getElementById("todo-list")


saveButton.addEventListener('click', function() {
    console.log("button click fired...")

    let liElement = document.createElement("li");
    liElement.className = "taskItem";

    let delButton = document.createElement("button");
    delButton.innerHTML = taskTextBox.value;
    delButton.className = "removeButton";


    let checkBox = document.createElement("input");//checkbox
    checkBox.setAttribute("type", "checkbox");

    liElement.append(checkBox);
    liElement.append(delButton);
    pendingTasksList.append(liElement);
    taskTextBox.value = ""

    })
