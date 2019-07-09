import {createEventObj} from "./helpers.js"
import {mainEntryToDom} from "../mainEntryToDom.js"
import {createNav, createDashboard} from "../mainComponent.js"
import {API} from "../api.js"
import { populateDom } from "../main.js";

// create function that adds the new event to the database and then get updated DB and add to DOM
// being called in addEventForm()


const addEventToDB = (event_nameKey, dateKey, timeKey, locationKey) => {
    let domContainer = document.querySelector("#dashboard-container")
    let newTimeStamp = Date.now()
    let currentUserId = +sessionStorage.getItem("userId")
    let userIdKey = currentUserId
    let event_nameValue = event_nameKey
    let dateValue = dateKey
    let timeValue = timeKey
    let locationValue = locationKey
    let timestampKey = newTimeStamp
    domContainer.innerHTML = ""
    mainEntryToDom(createNav(), createDashboard())
    let newEventObj = createEventObj(userIdKey, event_nameValue, dateValue, timeValue, locationValue, timestampKey)
    API.addData("events", newEventObj).then( () => {
        populateDom()
    })
}

// This function updates the DB

const updateEventToDB = (event_nameKey, dateKey, timeKey, locationKey, timestampKey, eventId) => {
    let domContainer = document.querySelector("#dashboard-container")
    let currentUserId = +sessionStorage.getItem("userId")
    let userIdKey = currentUserId
    let event_nameValue = event_nameKey
    let dateValue = dateKey
    let timeValue = timeKey
    let locationValue = locationKey
    let timestampValue = timestampKey
    domContainer.innerHTML = ""
    mainEntryToDom(createNav(), createDashboard())
    let editEventObj = createEventObj(userIdKey, event_nameValue, dateValue, timeValue, locationValue)
    // added the event id to the object so it can work with the editData() api call.
    editEventObj.timestamp = timestampValue
    editEventObj.id = eventId
    API.editData("events", editEventObj).then( () => {
        populateDom()
    })
}
export {addEventToDB, updateEventToDB}