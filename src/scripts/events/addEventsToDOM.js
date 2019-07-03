import {eventsDOMElement} from "./createEventElements.js"


// created a function that adds userEvents to the DOM also created delete and edi buttons IF we get there
//being called in addEventToDB()

const addEventsToDOM = (dataObj) => {
    let eventLog = document.querySelector("#event-div")
    let newEventHTML = eventsDOMElement(dataObj)
    eventLog.appendChild(newEventHTML)
    return eventLog
}

export {addEventsToDOM}