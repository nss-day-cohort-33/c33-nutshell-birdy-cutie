import { API } from "../api";

//get tasks and filter tasks based on session stored userId
function populateTaskContainer () {
  let taskBox = document.querySelector("#task-div")
  taskBox.innerHTML = "<h4>My Tasks</h4>"
  API.getData("tasks")
  .then(tasks => {
    const userTasks = tasks.filter (task => task.userId === +sessionStorage.getItem("userId"))
    userTasks.forEach(task => {
      let taskCode =
      `
    <div>
    <input type="checkbox" id = "${task.id}">
    <label>Task: ${task.task}</label>
    </div>
      <p>Due by:${task.completedate}</p><hr>
      `
      taskBox.innerHTML += taskCode

    })

  })
}

export{populateTaskContainer}