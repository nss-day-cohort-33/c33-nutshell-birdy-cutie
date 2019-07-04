import {API} from "../api.js"
import { createFriendDiv } from "./addFriendsToDOM.js"


// creates HTML that takes friendObj as an argument so it can post friends to a list in the DOM
const createFriendEl = (friendData) => {
    let newFriendList = document.querySelector("#friendsList")
    let newFriendEl = document.createElement("div")
    newFriendEl.setAttribute("id", `friendId-${friendData.id}`)
    let removeFriendButton = document.createElement("button")
    removeFriendButton.innerHTML = "Remove Friend"
    removeFriendButton.setAttribute("id", `removeFriend-${friendData.id}`)
    removeFriendButton.addEventListener("click", () => {
        console.log(`removeFriendButton${friendData.id} clicked!`);
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
    const dashContainer = document.querySelector("#dash-columns-container")
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
                let idArr = []
                for (let foo of Object.entries(key)) {
                    let userArr = foo[0]
                    let splitArr = userArr.split("_")
                    // if the key has userId then it will send the key value to the end of the array
                    if (splitArr[0] === "userId") {
                        idArr.push(foo[1])
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
                            createFriendEl(data)
                            })
                        }
                    })
                }
            }
        })
    })
}
export {grabFriends}