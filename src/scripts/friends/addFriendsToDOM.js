import {createNav} from "../mainComponent.js"

const createFriendDiv = () => {
  let dashContainer = document.querySelector("#dashboard-container")
  let friendDiv = document.createElement("div")
  friendDiv.setAttribute("id", "friend-div")
  friendDiv.innerHTML = "<h4>Friends</h4>"
  let listOfFriends = document.createElement("article")
  listOfFriends.innerHTML = "Add some friends!"
  listOfFriends.setAttribute("id", "friendsList")
  friendDiv.appendChild(listOfFriends)
  dashContainer.appendChild(createNav())
  dashContainer.appendChild(friendDiv)
}
export {createFriendDiv}