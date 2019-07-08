import {editTaskNameInput} from "./taskForm.js"


//event listener on task names populated to dom which allows you to edit the task name byalling changeTaskName function which replaces task name with input field
function editTaskEl () {
  let tasksToEdit = document.querySelectorAll(".edit-task")
  console.log(tasksToEdit)
  tasksToEdit.forEach(task => {
    task.addEventListener("click", event => {
      editTaskNameInput(event)

})
})
}
//function to save edited task name to DB
function saveEditedTaskEl (id) {
  let saveEditedTaskBtn = document.querySelector(`#saveEtdTskBtn-${id}`)
  saveEditedTaskBtn.addEventListener("click", (event) => {
  let taskNameValue = document.querySelector(`#editTaskInput-${id}`)
    console.log("new task value", taskNameValue.value)
    return taskNameValue
  })
}


// Event Listener for checkbox on each task to change boolean value of isCompleted to true
function taskComplete () {
  let taskCheckBoxes = document.querySelectorAll(".isComplete")
  taskCheckBoxes.forEach(box => {
    box.addEventListener("click", event => {
      console.log(event)
    })
  })
}
export{editTaskEl, saveEditedTaskEl, taskComplete}