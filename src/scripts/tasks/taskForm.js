import {mainEntryToDom} from "./../mainEntryToDom"
import { createNav, createDashboard } from "./../mainComponent.js";
import {API} from "./../api.js"

console.log("this is task forms")


function taskFormComponent () {
  const domContainer = document.querySelector("#dashboard-container")
  domContainer.innerHTML = ""

  let taskForm = document.createElement("form")
  let newTaskNameInput = document.createElement("input")
  newTaskNameInput.setAttribute("type", "text")
  newTaskNameInput.setAttribute("name", "new-task-name")
  newTaskNameInput.setAttribute("id", "new-task-name")
  newTaskNameInput.setAttribute("placeholder", "Enter New Task")
  let newTaskLabel = document.createElement("label")
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
    let newTaskName = newTaskNameInput.value
    let newTaskCompleteDate = taskCompleteDateInput.value
  console.log(newTaskName)
  console.log(newTaskCompleteDate)
  let newTaskObj = createNewTask(newTaskName, newTaskCompleteDate)
  console.log(newTaskObj)
  API.addData("tasks", newTaskObj)


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

function createNewTask (taskName, taskDate) {
  return {
        userId: +sessionStorage.getItem("userId"),
        task: taskName,
        completedate: taskDate,
        iscompleted: false

  }
}

export {taskFormComponent}


// let registerDiv = document.createElement("form")
//     let userName = document.createElement("input")
//     userName.setAttribute("type", "text")
//     userName.setAttribute("name", "user-name")
//     userName.setAttribute("id", "user-name")
//     let email = document.createElement("input")
//     email.setAttribute("type", "text")
//     email.setAttribute("name", "email")
//     email.setAttribute("id", "email")
//     let password = document.createElement("input")
//     password.setAttribute("type", "text")
//     password.setAttribute("name", "password")
//     password.setAttribute("id", "password")
//     let labelUserName = document.createElement("label")
//     labelUserName.textContent = "User Name"
//     let labelEmail = document.createElement("label")
//     labelEmail.textContent = "Email"
//     let labelPassword = document.createElement("label")
//     labelPassword.textContent = "Password"
//     let fieldsetUserName = document.createElement("fieldset")
//     let fieldsetEmail = document.createElement("fieldset")
//     let fieldsetPassword = document.createElement("fieldset")
//     let regSubmitBtn = document.createElement("button")
//     regSubmitBtn.setAttribute("id", "reg-submit-btn")
//     regSubmitBtn.textContent = "Submit"
//     regSubmitBtn.addEventListener("click", event => {
//         event.preventDefault()
//         let newUser = userName.value
//         let newEmail = email.value
//         let newPassword = password.value
//         if (newUser && newEmail && newPassword){
//             let createdUser = createNewUser(newUser, newEmail, newPassword)
//             API.addData("users", createdUser)
//             .then(data => {
//                 API.getData("users").then( newData => storage(newData, createdUser))
//                 domContainer.innerHTML = ""
//                 mainEntryToDom(createNav(), createDashboard())})

//         }
//         else{
//             alert("Please fill out all fields!")
//         }

//     })
//     fieldsetUserName.appendChild(labelUserName)
//     fieldsetUserName.appendChild(userName)
//     fieldsetEmail.appendChild(labelEmail)
//     fieldsetEmail.appendChild(email)
//     fieldsetPassword.appendChild(labelPassword)
//     fieldsetPassword.appendChild(password)
//     registerDiv.appendChild(fieldsetUserName)
//     registerDiv.appendChild(fieldsetEmail)
//     registerDiv.appendChild(fieldsetPassword)
//     registerDiv.appendChild(regSubmitBtn)
//     return registerDiv