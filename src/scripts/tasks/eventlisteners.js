import {editTaskNameInput} from "./taskForm.js"
import { API } from "../api.js";
import {createNewTask} from "./taskForm.js"
import { populateDom } from "../main.js";


//event listener on task names populated to dom which allows you to edit the task name byalling changeTaskName function which replaces task name with input field
function editTaskEl () {
  let tasksToEdit = document.querySelectorAll(".edit-task")
  tasksToEdit.forEach(task => {
    task.addEventListener("click", event => {
      let id = (event.target.id).split("-")[1]
        editTaskNameInput(event)
        saveEditedTaskEl(id)

    })
  })
}
//function to save edited task name to DB
function saveEditedTaskEl (id) {
  let editTaskInput = document.querySelector(`#editTaskInput-${id}`)
  editTaskInput.addEventListener("keypress", function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
      // code for enter

      let taskNameValue = document.querySelector(`#editTaskInput-${id}`).value
      let taskDateValue = document.querySelector(`#taskDate${id}`).textContent
      let justTaskDate = taskDateValue.split(" ")[1]
      let editedTaskObj = createNewTask(taskNameValue, justTaskDate)
      editedTaskObj.id = id
      API.editData("tasks", editedTaskObj)
      .then(API.getData("tasks"))
      .then(populateDom())
    }

  })
}


// Event Listener for checkbox on each task to change boolean value of isCompleted to true
function taskComplete () {
  let taskCheckBoxes = document.querySelectorAll(".isComplete")
  taskCheckBoxes.forEach(box => {
    box.addEventListener("click", event => {
    })
  })
}


export{editTaskEl, saveEditedTaskEl, taskComplete}