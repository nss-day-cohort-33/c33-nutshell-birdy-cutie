import {API} from "../api.js"
import {addFriend} from "./addFriendsToDB.js"
// created a function that is called within the "Search People" button click event
// takes the searchInput value as an argument, which should be a person's username or email
const searchForPeople = (searchValue) => {
    const dashContainer = document.querySelector("#dash-columns-container")
    dashContainer.innerHTML = ""
    addSearchValueDivToDOM()
    API.getData("users").then( data => {
        let searchListContainer = document.getElementById("searchList")
        let searchInputValue = searchValue.toLowerCase()
        data.forEach( listOfPeople => {
            let searchUsername = listOfPeople.username.toLowerCase()
            let searchEmail = listOfPeople.email.toLowerCase()
            if (searchUsername === searchInputValue || searchEmail === searchInputValue) {
                createSearchValueHTML(listOfPeople)
            }
        });
        if (searchListContainer.innerHTML === "") {
            searchListContainer.innerHTML = "<p>User not found!</p>"
        }
    })
}

// made a div that adds the searched user to the "search-list" Div with an add user button
// the function that creates the "search-list" is addSearchValueDivToDOM()
const createSearchValueHTML = userObj => {
    let searchListContainer = document.getElementById("searchList")
    let searchObjHTML = document.createElement("div")
    let addUserBtn = document.createElement("button")
    addUserBtn.innerHTML = "Add Friend"
    addUserBtn.setAttribute("id", `add-${userObj.id}`)
    addUserBtn.addEventListener("click", () => {
        // should add a conditional statement to check where the relationship already exists
        // that way you don't have the same relationship being added multiple times
        document.getElementById(`add-${userObj.id}`).style.visibility = "hidden"
        let friendId = userObj.id
        addFriend(friendId)
    })
    searchObjHTML.innerHTML = `<h4>${userObj.username}</h4>
    <p>${userObj.email}</p>`
    searchObjHTML.appendChild(addUserBtn)
    searchListContainer.appendChild(searchObjHTML)
}

// makes a div that will hold all the users that have the searched value. Whether it's username or email
// has a preloaded message of "User not Found!" if nothing matches the searched input.
const addSearchValueDivToDOM = () => {
    let dashContainer = document.querySelector("#dash-columns-container")
    let searchValueDiv = document.createElement("div")
    searchValueDiv.setAttribute("id", "search-div")
    searchValueDiv.innerHTML = "<h4>People</h4>"
    let listOfSearchValues = document.createElement("article")
    listOfSearchValues.setAttribute("id", "searchList")
    searchValueDiv.appendChild(listOfSearchValues)
    dashContainer.appendChild(searchValueDiv)
}
export {searchForPeople}