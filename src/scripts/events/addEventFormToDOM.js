import {eventFormElement, eventEditElement} from "./createEventElements.js"

// created function that adds an Event form HTML on click with the button using the function addEventToDB()
// returns just the form section, so you still need to append child within the actual event
// being exported to mainComponent.js to be called in the eventButton.eventListener()

const addEventForm = () => {
  const domContainer = document.querySelector("#data-container")
  domContainer.innerHTML = ""
  domContainer.appendChild(eventFormElement())
}

// this creates an edit form that takes the arguments of the already inputed values.

const addEventEditForm = (name, date, time, location, eventId) => {
  const domContainer = document.querySelector("#data-container")
  domContainer.innerHTML = ""
  domContainer.appendChild(eventEditElement(name, date, time, location, eventId))
}

  export {addEventForm, addEventEditForm}