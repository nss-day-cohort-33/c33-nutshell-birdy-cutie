import {API} from "../api.js"
import { createFriendDiv } from "./addFriendsToDOM.js"


// creates HTML that takes friendObj as an argument so it can post friends to a list in the DOM
const createFriendEl = (friendData, relationshipId, friendName) => {
    let newFriendList = document.querySelector("#friendsList")
    let newFriendEl = document.createElement("div")
    newFriendEl.setAttribute("id", `friendId-${friendData.id}`)
    let removeFriendButton = document.createElement("button")
    removeFriendButton.innerHTML = "Remove Friend"
    removeFriendButton.setAttribute("id", `removeFriend-${relationshipId}`)
    removeFriendButton.addEventListener("click", () => {
        // targets the  element that contains the friend name.
        let elementToRemove = document.getElementById(`friendId-${friendData.id}`)
        if (confirm(`Are you sure you want to remove ${friendName} as a friend?`)) {
            // takes the id of the friendship and calls the API delete method
            API.deleteData("friends", relationshipId).then(() => {
                // added the alert within the .then() so that the element will be removed before the
                // alert is triggered. I feel like it is more user friendly to see it go away
                // and then be told is was successfully removed
                alert(`${friendName} successfully removed!`)
            })
            // I removed the element on the click of the button, so we don't have to refresh the whole
            // page, it just removes the element and looks as if the page was refreshed (less expensive)
            elementToRemove.remove()
        }
    })
    newFriendEl.innerHTML = `
        <h6>${friendData.username}</h6>
    `
    newFriendEl.appendChild(removeFriendButton)
    newFriendList.appendChild(newFriendEl)
}
// filters through friend DB, if they have friend connections, then it will add them to the DOM
// if not it will give a "add friends!" message
const grabFriends = () => {
    const dashContainer = document.querySelector("#dashboard-container")
    dashContainer.innerHTML = ""
    createFriendDiv()
    let id = +sessionStorage.getItem("userId")
    console.log(id);
    // call the friends DB
    API.getData("friends").then(data =>{
        // create an empty arr to send id's to
        data.filter( key => {
            // This if statement allows only objects with the current user's id to be looked at
            if (key.userId_1 === id || key.userId_2 === id) {
                // set an empty array to hold friends' id's
                let idArr = []
                //  set friendShipId variable to hold relationship Id
                let friendShipId = null
                for (let foo of Object.entries(key)) {
                    let userArr = foo[0]
                    let splitArr = userArr.split("_")
                    // if the key has userId then it will send the key value to the end of the array
                    if (splitArr[0] === "userId") {
                        idArr.push(foo[1])
                        friendShipId = key.id
                    }
                }
                // this uses the array to see if any of the id's include the current user's id
                if (idArr) {
                    // will remove message of add friends
                    let newFriendList = document.querySelector("#friendsList")
                    newFriendList.innerHTML = ""
                    // if it does, it is going to loop through the array and only grab the id's
                    // that don't match the current user's id
                    idArr.forEach( friendId => {
                        if (friendId !== id) {
                            // it is then going to use the friend's id to call the specific user DB obj
                            API.getData("users", friendId).then(data => {
                            // Then it passes the returned user obj into the createFriendEl
                            // which takes an obj as an argument to create the HTML snippet for posting friends
                            // to the DOM
                            let name = data.username
                            createFriendEl(data, friendShipId, name)
                            })
                        }
                    })
                }
            }
        })
    })
}
// a user will be able to search for other users
// We can do this by filtering the user input to see if that username exists
// if it does exist the username will populate with an "Add Friend" button
// if the button is clicked then it will create a friend request obj containing the two user's id's
// the click event will use a factory function to create a friend request obj
// we should probably filter that to see if they are already friends, if they are
// we can send an alert or some message saying that they're friends
// maybe by somehow storing friend id's within an array or something
// we could do this if we could somehow return the array of id's from grabFriends() then
// filter through that to see if the requested id is contained
// that friend request obj will be added to the DB
// a request mesage will then be sent to the person of interest
// we can do this by storing the friend requested user's id as a certain key within the request obj
// add a button to see friend requests in nav bar
// when the requested user is logged in they can click the button to populate requests
// once clicked a page with all your friend requests
//  is loaded with a preset message saying something like
// `${username} would like to be friends`
// That will also have "accept" and "reject" buttons
// each button will have an eventlistener on it that will delete the request from the DB
// if "accept" is clicked then a factory function will be used to add the new friend relationship to DB
// if "delete" is hit then it will remove request from DB

export {grabFriends}