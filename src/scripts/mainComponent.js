//function to create Nav Bar component
import { articleClick } from "./article/mainArticle.js"

const domContainer = document.querySelector("#dashboard-container")

function createNav () {
    let navBar = document.createElement("nav")
    let dashButton = document.createElement("button")
    let articleButton = document.createElement("button")
    let eventButton = document.createElement("button")
    let taskButton = document.createElement("button")
    let friendButton = document.createElement("button")
    dashButton.textContent = "My Dashboard"
    articleButton.textContent = "Add Article"
    eventButton.textContent = "Add Event"
    taskButton.textContent = "Add Task"
    friendButton.textContent = "Friends List"
    dashButton.setAttribute("id", "dash-btn")
    articleButton.setAttribute("id", "article-btn")
    eventButton.setAttribute("id", "event-btn")
    taskButton.setAttribute("id", "task-btn")
    friendButton.setAttribute("id", "friend-btn")
    navBar.appendChild(dashButton)
    navBar.appendChild(articleButton)
    navBar.appendChild(eventButton)
    navBar.appendChild(taskButton)
    navBar.appendChild(friendButton)

    //add event listeners to all Nav Bar Buttons
    dashButton.addEventListener("click", () => {
      console.log(event)
    })
    articleButton.addEventListener("click", () => {
      articleClick()
    })
    eventButton.addEventListener("click", () => {
      console.log(event)
    })
    taskButton.addEventListener("click", () => {
      console.log(event)
    })
    friendButton.addEventListener("click", () => {
      console.log(event)
    })
    return navBar
    }


    //function to create dashboard
    function createDashboard () {
      //creates search/message section of dashboard
      let entireDashContainer = document.createElement ("section")
      entireDashContainer.setAttribute("id", "data-container")
      let searchMessageDiv = document.createElement("div")
      searchMessageDiv.setAttribute("id", "search-message")
      let searchInput = document.createElement("input")
      searchInput.setAttribute("type", "search")
      searchInput.setAttribute("placeholder", "Search People")
      let searchBtn = document.createElement("button")
      searchBtn.setAttribute("id", "search-btn")
      searchBtn.textContent = "Search People"
      let messageText = document.createElement("textarea")
      messageText.setAttribute("name", "messages")
      messageText.setAttribute("id", "message-input")
      messageText.setAttribute("cols", "30")
      messageText.setAttribute("rows", "5")
      messageText.setAttribute("placeholder", "Type Your Message Here")
      let postMessageBtn = document.createElement("button")
      postMessageBtn.setAttribute("id", "post-message")
      postMessageBtn.textContent = "Post to Chat"

      //create chat/articles/events/tasks columns sections of dashboard
      let dashColumnsSection = document.createElement("section")
      dashColumnsSection.setAttribute("id", "dash-columns-container")
      let chatDiv = document.createElement("div")
      chatDiv.setAttribute("id", "chat-div")
      chatDiv.innerHTML = "<h4>Chat</h4>"
      let articleDiv = document.createElement("div")
      articleDiv.setAttribute("id", "article-div")
      articleDiv.innerHTML = "<h4>Articles</h4>"
      let eventDiv = document.createElement("div")
      eventDiv.setAttribute("id", "event-div")
      eventDiv.innerHTML = "<h4>Events</h4>"
      let taskDiv = document.createElement("div")
      taskDiv.setAttribute("id", "task-div")
      taskDiv.innerHTML = "<h4>My Tasks</h4>"


      searchMessageDiv.appendChild(searchInput)
      searchMessageDiv.appendChild(searchBtn)
      searchMessageDiv.appendChild(messageText)
      searchMessageDiv.appendChild(postMessageBtn)
      dashColumnsSection.appendChild(chatDiv)
      dashColumnsSection.appendChild(articleDiv)
      dashColumnsSection.appendChild(eventDiv)
      dashColumnsSection.appendChild(taskDiv)
      entireDashContainer.appendChild(searchMessageDiv)
      entireDashContainer.appendChild(dashColumnsSection)
      return entireDashContainer
    }


    //function to add dom components
    function DashToDOM () {

      let dashContainer = document.querySelector("#dashboard-container")
    dashContainer.appendChild(createNav())
    dashContainer.appendChild(createDashboard())
  }

//   DashToDOM()

  export {createNav, createDashboard}
