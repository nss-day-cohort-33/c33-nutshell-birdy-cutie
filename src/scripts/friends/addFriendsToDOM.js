
const createFriendDiv = () => {
  let dashContainer = document.querySelector("#data-container")
  let friendDiv = document.createElement("div")
  friendDiv.setAttribute("id", "friend-div")
  friendDiv.innerHTML = "<h3>Friends</h3>"
  let listOfFriends = document.createElement("article")
  listOfFriends.innerHTML = "Add some friends!"
  listOfFriends.setAttribute("id", "friendsList")
  friendDiv.appendChild(listOfFriends)
  dashContainer.appendChild(friendDiv)
}
export {createFriendDiv}