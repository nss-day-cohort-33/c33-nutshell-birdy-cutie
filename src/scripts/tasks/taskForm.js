import {mainEntryToDom} from "./../mainEntryToDom"
import { createNav, createDashboard } from "./../mainComponent.js";
import {API} from "./../api.js"
import {populateTaskContainer} from "./taskToDom.js"
import { saveEditedTaskEl } from "./eventlisteners";
import { populateDom } from "../main";




function taskFormComponent () {
  const dashContainer = document.querySelector("#data-container")
  dashContainer.innerHTML = ""
  let taskForm = document.createElement("form")
  taskForm.setAttribute("id", "new-task-form")
  let newTaskNameInput = document.createElement("input")
  newTaskNameInput.setAttribute("type", "text")
  newTaskNameInput.setAttribute("name", "new-task-name")
  newTaskNameInput.setAttribute("id", "new-task-name")
  newTaskNameInput.setAttribute("placeholder", "Enter New Task")
  const newTaskLabel = document.createElement("label")
  newTaskLabel.textContent = "New Task Name:"
  let newTaskNameContainer = document.createElement("fieldset")
  let taskCompleteDateInput = document.createElement("input")
  taskCompleteDateInput.setAttribute("type", "date")
  taskCompleteDateInput.setAttribute("name", "new-task-date")
  taskCompleteDateInput.setAttribute("id", "new-task-date")
  let taskDateLabel = document.createElement("label")
  taskDateLabel.textContent = "Task will be done by:"
  let taskDateContainer = document.createElement("fieldset")
  let taskSubmitBtn = document.createElement("button")
  taskSubmitBtn.setAttribute("id", "task-submit-btn")
  taskSubmitBtn.textContent = "Create Task"
  taskSubmitBtn.addEventListener("click", event => {
    event.preventDefault()
    addTaskToDb()
  })
newTaskNameContainer.appendChild(newTaskLabel)
newTaskNameContainer.appendChild(newTaskNameInput)
taskDateContainer.appendChild(taskDateLabel)
taskDateContainer.appendChild(taskCompleteDateInput)
taskForm.appendChild(newTaskNameContainer)
taskForm.appendChild(taskDateContainer)
taskForm.appendChild(taskSubmitBtn)
dashContainer.appendChild(taskForm)
}

//factory function creating new task object
function createNewTask (taskName, taskDate, boolean) {
  if (boolean) {
    return {
      userId: +sessionStorage.getItem("userId"),
      task: taskName,
      completedate: taskDate,
      iscompleted: boolean
    }
  }
    return {
      userId: +sessionStorage.getItem("userId"),
      task: taskName,
      completedate: taskDate,
      iscompleted: false
  }
}
// function changeBoolean(taskName, taskDate, boolean) {
//   if (boolean){
//   return {
//     userId: +sessionStorage.getItem("userId"),
//     task: taskName,
//     completedate: taskDate,
//     iscompleted: boolean
//   }
// }
// }

//add new task object to db
function addTaskToDb () {
  let newTaskValue = document.querySelector("#new-task-name").value
  let newTaskDateValue = document.querySelector("#new-task-date").value
  if (newTaskValue && newTaskDateValue){
    let newTaskObj = createNewTask(newTaskValue, newTaskDateValue)
    API.addData("tasks", newTaskObj)
      const domContainer = document.querySelector("#dashboard-container")
      domContainer.innerHTML = ""
      mainEntryToDom( createNav(), createDashboard())
    const taskBox = document.querySelector("#task-div")
    API.getData("tasks")
    //removing new task form from DOM and populating tasks
    .then( () => {
      taskBox.innerHTML = ""
      populateDom()

  })
} else {
  alert ("Please fill out all fields!")
}
}

//edit task component that pulls up text input with task name populated to edit
function editTaskNameInput (event) {
 let id = event.target.id.split("-")[1]
 let taskNameChange = document.querySelector(`#taskName-${id}`)
 let parentDiv = document.querySelector(`#taskDiv${id}`)
 let inputField = document.createElement("input")
 inputField.setAttribute("type", "text")
 inputField.setAttribute("value", `${event.target.innerHTML}`)
 inputField.setAttribute("id", `editTaskInput-${id}` )
parentDiv.replaceChild (inputField, taskNameChange)
}

export {taskFormComponent, editTaskNameInput, createNewTask}
