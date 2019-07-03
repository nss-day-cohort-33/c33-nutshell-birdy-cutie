import {API} from "./api.js"
import {createNav, createDashboard, DashToDom} from "./mainComponent.js"
import {mainEntryToDom} from "./mainEntryToDom.js"

// created a function that gets the full date of the click

const clickDate = () => {
    let date = new Date()
    return date
}
// create function to get offset time zone
// made timeZoneOffset into a string then targeted the first number of that string
// then used slice to recombine it
const timeZoneOffset = ( zoneOffset) => {
    let zoneString = `${zoneOffset}`
    let zoneSplit = zoneString.charAt(0)
    if (zoneSplit > 0) {
        if (zoneSplit < 10) {
            let pstvLessOffset = `+0${zoneSplit}:${zoneString.slice(1)}`
            return pstvLessOffset
        } else {
            let pstvPosOffset = `+${zoneSplit}:${zoneString.slice(1)}`
            return pstvPosOffset
        }
    } else {
        if (zoneSplit < 10) {
            let ngtvLessOffset = `-0${zoneSplit}:${zoneString.slice(1)}`
            return ngtvLessOffset
        } else {
            let ngtvPosOffset = `-${zoneSplit}:${zoneString.slice(1)}`
            return ngtvPosOffset
        }
    }
}
// created a funtction that create a timeStamp into a string

const createTimeStamp = (date) => {
    let timeStampYear = date.getFullYear()
    let timeStampMonth = date.getMonth() + 1
    let timeStampDay = date.getDate()
    let timeStampHour = date.getHours()
    let timeStampMinutes = date.getMinutes()
    let timeStampSeconds = date.getSeconds()
    let timeStampMilli = date.getMilliseconds()
    let timeStampOffset =   timeZoneOffset( date.getTimezoneOffset())
    let timeOfClick =  `${timeStampYear}-${timeStampMonth}-${timeStampDay} ${timeStampHour}:${timeStampMinutes}:${timeStampSeconds}.${timeStampMilli} ${timeStampOffset}`
    return timeOfClick
}

// created a function to filter through events that has to do with specific userId

const filterUserEvents = ( eventData) => {
    let userEvents =  eventData.filter( events => {
        let id = sessionStorage.getItem("userId")
        if (events.userId === id) {
            return events
        }
    })
    return userEvents
}

// create factory function to turn event forum input values into an object that will then be pushed to DB

const createEventObj = (userId, event_name, date, time, location, timestamp) => {
    let factoryEventObj = {
        userId,
        event_name,
        date,
        time,
        location,
        timestamp
    }
    return factoryEventObj

}

// create funtion that makes HTML snippet to add events to DOM

const eventsHTML = ( eventData) => {
    let newHTML = document.createElement("article")
    let editEventBtn = document.createElement("button")
    let delEventBtn = document.createElement("button")
    editEventBtn.setAttribute("id", `editBtn-${eventData.id}`)
    delEventBtn.setAttribute("id", `delBtn-${eventData.id}`)
    editEventBtn.innerHTML = "Edit Event"
    delEventBtn.innerHTML = "Delete Event"
    delBtnListener(delEventBtn)
    editBtnListener(editEventBtn)
    newHTML.setAttribute("id", `user${eventData.userId}event-${eventData.id}`)

    newHTML.innerHTML =
    `
    <h2 id="event-name">${eventData.event_name}</h2>
    <p id="event-date">${eventData.date}</p>
    <p id="event-time">${eventData.time}</p>
    <p id="event-location">${eventData.location}</p>
    `
    newHTML.appendChild(delEventBtn)
    newHTML.appendChild(editEventBtn)
    return newHTML
}

// create event listener function for delete event button

const delBtnListener = ( btn) => {
    btn.addEventListener("click", () => {
        let delId = event.target.id
        let delSplit = delId.split("-")
        console.log(delSplit);
        console.log("edit button works at:", delSplit[1])
    })
}

// create event listener function for edit event button

const editBtnListener = ( btn) => {
btn.addEventListener("click", () => {
    let editId = event.target.id
    let editSplit = editId.split("-")
    console.log(editId)
    console.log(editSplit);
    console.log("edit button works at:", editSplit[1])
})
}


// created a function that adds userEvents to the DOM also created delete and edi buttons IF we get there

const addEventsToDOM = (dataObj) => {
    let eventLog = document.querySelector("#event-div")
    let newEventHTML = eventsHTML(dataObj)
    eventLog.appendChild(newEventHTML)
    return eventLog
}

// create function that adds the new event to the database and then get updated DB and add to DOM

const addEventToDB = () => {
    let newTimeStamp = createTimeStamp(clickDate())
    let currentUserId = sessionStorage.getItem("userId")
    let userIdKey = currentUserId
    let event_nameKey = document.querySelector("#event-name-input")
    let dateKey = document.querySelector("#event-date-input")
    let timeKey = document.querySelector("#event-time-input")
    let locationKey = document.querySelector("#event-location-input")
    let timestampKey = newTimeStamp
    const domContainer = document.querySelector("#dashboard-container")
    if (event_nameKey && dateKey && timeKey && locationKey) {
        let event_nameValue = event_nameKey.value
        let dateValue = dateKey.value
        let timeValue = timeKey.value
        let locationValue = locationKey.value
        domContainer.innerHTML = ""
        let newEventObj = createEventObj(userIdKey, event_nameValue, dateValue, timeValue, locationValue, timestampKey)
        API.addData("events", newEventObj).then( data => {
            API.getData("events").then( data => {
               let usrEvent =  filterUserEvents(data)
               usrEvent.forEach( dataForDOM => {
                   mainEntryToDom(createNav(), createDashboard())
                   addEventsToDOM(dataForDOM)
               });
            })
        })
    }
}



// created function that adds an Event form HTML on click with the button using the function addEventToDB()
// returns just the form section, so you still need to append child within the actual event

const addEventForm = () => {
    let eventFormSection = document.createElement("section")
    let createEvent = document.createElement("button")
    let id = sessionStorage.getItem("userId")
    createEvent.setAttribute("id", "create-event")
    createEvent.innerHTML = "Save Event"
    createEvent.addEventListener("click", addEventToDB)
    eventFormSection.setAttribute("id", "event-form")
    eventFormSection.innerHTML = `
      <p id="user-id" hidden>${id}</p>
      <h3>Create Event</h3>
      <fieldset>
        <legend for="event-name-input">Name of Event</legend>
        <input type="text" id="event-name-input" id="event-name" placeholder="Event Name">
      </fieldset>
      <fieldset>
        <legend for="event-date-input">Date of Event</legend>
        <input type="date" id="event-date-input" name="event-date" placeholder="Day of Event">
      </fieldset>
      <fieldset>
        <legend for="event-time-input">Time of Event</legend>
        <input type="time" id="event-time-input" name="event-time" placeholder="hrs:mins">
      </fieldset>
      <fieldset>
        <legend for="event-location-input">Location of Event</legend>
        <input type="text" id="event-location-input" name="event-location" placeholder="Location of Event">
      </fieldset>
    `
    eventFormSection.appendChild(createEvent)
    return eventFormSection

  }

  export {addEventForm}