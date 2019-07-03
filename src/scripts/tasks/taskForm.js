import {mainEntryToDom} from "./../mainEntryToDom"
import { createNav, createDashboard } from "./../mainComponent.js";
import {API} from "./../api.js"
import {populateTaskContainer} from "./taskToDom.js"

console.log("this is task forms")


function taskFormComponent () {
  const domContainer = document.querySelector("#dashboard-container")
  domContainer.innerHTML = ""
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
domContainer.appendChild(taskForm)
}

//factory function creating new task object
function createNewTask (taskName, taskDate) {
  return {
        userId: +sessionStorage.getItem("userId"),
        task: taskName,
        completedate: taskDate,
        iscompleted: false

  }
}

//add new task object to db
function addTaskToDb () {
  let newTaskValue = document.querySelector("#new-task-name").value
  let newTaskDateValue = document.querySelector("#new-task-date").value
  if (newTaskValue && newTaskDateValue){
    let newTaskObj = createNewTask(newTaskValue, newTaskDateValue)
    API.addData("tasks", newTaskObj)
    .then( mainEntryToDom(createNav(), createDashboard()))
    API.getData("tasks")
    .then( () => {
      //removing new task form from DOM and populating tasks
      const domContainer = document.querySelector("#dashboard-container")
      domContainer.removeChild(domContainer.childNodes[0])
      const taskBox = document.querySelector("#task-div")
      taskBox.innerHTML = ""
      populateTaskContainer()
  })
} else {
  alert ("Please fill out all fields!")
}
}

export {taskFormComponent}
