import { API } from "../api";
import {editTaskEl, taskComplete} from "./eventlisteners.js"
//get tasks and filter tasks based on session stored userId
function populateTaskContainer () {
  let taskBox = document.querySelector("#task-div")
  taskBox.innerHTML = "<h4>My Tasks</h4><hr>"
  API.getData("tasks")
  .then(tasks => {
    const userTasks = tasks.filter (task => task.userId === +sessionStorage.getItem("userId"))
    userTasks.forEach(task => {
      let taskCode =
      `
      <div id = "taskDiv${task.id}">
      <h3 class="edit-task" id =taskName-${task.id}>${task.task}</h3>
      <p id = "taskDate${task.id}">Due: ${task.completedate}</p>
      <input type="checkbox" id = "isComplete-${task.id}" class = "isComplete">
      <label>Task Complete</label><hr>
      `
      taskBox.innerHTML += taskCode
    })
    editTaskEl()
    taskComplete()
  })
}




export{populateTaskContainer}