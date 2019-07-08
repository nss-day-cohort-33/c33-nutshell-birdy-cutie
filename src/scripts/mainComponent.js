import {addEventForm} from "./events/addEventFormToDOM.js"
import { taskFormComponent } from "./tasks/taskForm";
import { messageBtnListener } from "./chat/chatEvents";
import { dashToDOM, mainEntryToDom } from "./mainEntryToDom.js"
import { API } from "./api.js"
import { grabFriends } from "./friends/getFriends.js"
import {searchForPeople} from "./friends/addSearchListToDOM.js"
import {populateDom} from "./main.js"

//function to create Nav Bar component
import { articleClick } from "./article/mainArticle.js"

const domContainer = document.querySelector("#dashboard-container")

const logOutFunc = () => {
  sessionStorage.clear()
  domContainer.innerHTML = ""
  dashToDOM()
}

function createNav () {
    let navBar = document.createElement("nav")
    let dashButton = document.createElement("button")
    let articleButton = document.createElement("button")
    let eventButton = document.createElement("button")
    let taskButton = document.createElement("button")
    let friendButton = document.createElement("button")
    let logOutButton = document.createElement("button")
    logOutButton.textContent = "Log Out"
    dashButton.textContent = "My Dashboard"
    articleButton.textContent = "Add Article"
    eventButton.textContent = "Add Event"
    taskButton.textContent = "Add Task"
    friendButton.textContent = "Friends List"
    logOutButton.setAttribute("id", "lgt-btn")
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
    navBar.appendChild(logOutButton)


    //add event listeners to all Nav Bar Buttons
    dashButton.addEventListener("click", () => {
      let dataContainer = document.querySelector("#dashboard-container")
      dataContainer.innerHTML = ""
      mainEntryToDom(createNav(), createDashboard())
      populateDom()
    })
    articleButton.addEventListener("click", () => {
      articleClick(API.addData)
    })
    eventButton.addEventListener("click", () => {
      addEventForm()
    })
    taskButton.addEventListener("click", () => {
      taskFormComponent()
    })
    friendButton.addEventListener("click", grabFriends)
    logOutButton.addEventListener("click", () => {
      logOutFunc()
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
      searchInput.setAttribute("id", "search-people")
      searchInput.setAttribute("type", "search")
      searchInput.setAttribute("placeholder", "Search People")
      let searchBtn = document.createElement("button")
      searchBtn.setAttribute("id", "search-btn")
      searchBtn.textContent = "Search People"
      searchBtn.addEventListener("click", () => {
        let searchValue = searchInput.value
        console.log(searchValue);
        searchForPeople(searchValue)
      })
      let messageText = document.createElement("textarea")
      messageText.setAttribute("name", "messages")
      messageText.setAttribute("id", "message-input")
      messageText.setAttribute("cols", "30")
      messageText.setAttribute("rows", "5")
      messageText.setAttribute("placeholder", "Type Your Message Here")
      let postMessageBtn = document.createElement("button")
      postMessageBtn.setAttribute("id", "post-message")
      postMessageBtn.textContent = "Post to Chat"
      postMessageBtn.addEventListener("click", event => {
        messageBtnListener()
      })

      //create chat/articles/events/tasks columns sections of dashboard
      let dashColumnsSection = document.createElement("section")
      dashColumnsSection.setAttribute("id", "dash-columns-container")
      let chatDiv = document.createElement("div")
      chatDiv.setAttribute("id", "chat-div")
      chatDiv.innerHTML = "<h4>Chat</h4>"
      let chatMessageDiv =document.createElement("div")
      chatMessageDiv.setAttribute("id", "chat-message-div")
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
      chatDiv.appendChild(chatMessageDiv)
      dashColumnsSection.appendChild(chatDiv)
      dashColumnsSection.appendChild(articleDiv)
      dashColumnsSection.appendChild(eventDiv)
      dashColumnsSection.appendChild(taskDiv)
      entireDashContainer.appendChild(searchMessageDiv)
      entireDashContainer.appendChild(dashColumnsSection)
      return entireDashContainer
    }



  export {createNav, createDashboard}