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

// create function that adds the new event to the database and then get updated DB and add to DOM

const addEventToDB = () => {
    let newTimeStamp = createTimeStamp(clickDate())
    let currentUserId = sessionStorage.getItem("userId")
    let userIdKey = currentUserId
    let event_nameKey = document.querySelector("#event-name")
    let dateKey = document.querySelector("#event-date")
    let timeKey = document.querySelector("#event-time")
    let locationKey = document.querySelector("#event-location")
    let timestampKey = newTimeStamp
    if (event_nameKey && dateKey && timeKey && locationKey) {
        let event_nameValue = event_nameKey.value
        let dateValue = dateKey.value
        let timeValue = timeKey.value
        let locationValue = locationKey.value
        let newEventObj = createEventObj(userIdKey, event_nameValue, dateValue, timeValue, locationValue, timestampKey)
        console.log(newEventObj);
    }
}



// created function that adds an Event form HTML on click with the button using the function addEventToDB()
// returns just the form section, so you still need to append child within the actual event

const addEventForm = () => {
    let eventFormSection = document.createElement("section")
    let createEvent = document.createElement("button")
    let id = sessionStorage.getItem("userId")
    createEvent.setAttribute("id", "create-event")
    createEvent.addEventListener("click", addEventToDB)
    eventFormSection.setAttribute("id", "event-form")
    eventFormSection.innerHTML = `
      <p id="user-id" hidden>${id}</p>
      <h3>Create Event</h3>
      <fieldset>
        <legend for="event-name">Name of Event</legend>
        <input type="text" id="event-name" id="event-name" placeholder="Event Name">
      </fieldset>
      <fieldset>
        <legend for="event-date">Date of Event</legend>
        <input type="date" id="event-date" name="event-date" placeholder="Day of Event">
      </fieldset>
      <fieldset>
        <legend for="event-time">Time of Event</legend>
        <input type="time" id="event-time" name="event-time" placeholder="hrs:mins">
      </fieldset>
      <fieldset>
        <legend for="event-location">Location of Event</legend>
        <input type="text" id="event-location" name="event-location" placeholder="Location of Event">
      </fieldset>
    `
    eventFormSection.appendChild(createEvent)
    return eventFormSection

  }

  export {addEventForm}