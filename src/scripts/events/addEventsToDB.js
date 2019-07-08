import {clickDate, createTimeStamp} from "./getTimeStamp.js"
import {addEventsToDOM}  from "./addEventsToDOM.js"
import {createEventObj, filterUserEvents} from "./helpers.js"
import {mainEntryToDom} from "../mainEntryToDom.js"
import {createNav, createDashboard} from "../mainComponent.js"
import {API} from "../api.js"

// create function that adds the new event to the database and then get updated DB and add to DOM
// being called in addEventForm()


const addEventToDB = (event_nameKey, dateKey, timeKey, locationKey) => {
    let domContainer = document.querySelector("#dashboard-container")
    let newTimeStamp = createTimeStamp(clickDate())
    let currentUserId = +sessionStorage.getItem("userId")
    let userIdKey = currentUserId
    let event_nameValue = event_nameKey.value
    let dateValue = dateKey.value
    let timeValue = timeKey.value
    let locationValue = locationKey.value
    let timestampKey = newTimeStamp
    domContainer.innerHTML = ""
    mainEntryToDom(createNav(), createDashboard())
    let newEventObj = createEventObj(userIdKey, event_nameValue, dateValue, timeValue, locationValue, timestampKey)
    API.addData("events", newEventObj).then( () => {
        addEventsToDOM()
    })
}
export {addEventToDB}