import {editTaskNameInput} from "./taskForm.js"


//event listener on task names populated to dom which allows you to edit the task name byalling changeTaskName function which replaces task name with input field
function editTaskEventListener () {
  let tasksToEdit = document.querySelectorAll(".edit-task")
  console.log(tasksToEdit)
  tasksToEdit.forEach(task => {
    task.addEventListener("click", event => {
      editTaskNameInput(event)

})
})
}
//function
function saveEditedTaskEventListener (id) {
  let saveEditedTaskBtn = document.querySelector(`#saveEtdTskBtn-${id}`)
  saveEditedTaskBtn.addEventListener("click", (event) => {
  let taskNameValue = document.querySelector(`#editTaskInput-${id}`)
    console.log("new task value", taskNameValue.value)
    return taskNameValue
  })
}

export{editTaskEventListener, saveEditedTaskEventListener}