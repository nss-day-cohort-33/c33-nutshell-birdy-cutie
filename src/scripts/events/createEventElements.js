import {createEventFormHTML, createEventDOMHTML} from "./createEventHTML.js"
import {delBtnListener, editBtnListener, saveBtnListener} from "./eventListeners"
// create funtion that makes HTML snippet to add events to DOM
// being called in addEventsToDOM()

const eventsDOMElement = ( eventData) => {
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
    newHTML.innerHTML = createEventDOMHTML(eventData)
    newHTML.appendChild(delEventBtn)
    newHTML.appendChild(editEventBtn)
    return newHTML
}

const eventFormElement = () => {
    let eventFormSection = document.createElement("section")
    let savBtn = document.createElement("button")
    let id = +sessionStorage.getItem("userId")
    eventFormSection.setAttribute("id", "event-form")
    eventFormSection.innerHTML = createEventFormHTML(id)
    savBtn.setAttribute("id", "create-event")
    savBtn.innerHTML = "Save Event"
    saveBtnListener(savBtn)
    eventFormSection.appendChild(savBtn)
    return eventFormSection
}


export {eventsDOMElement, eventFormElement}