import {eventFormElement} from "./createEventElements.js"
import {createNav} from "../mainComponent.js"

// created function that adds an Event form HTML on click with the button using the function addEventToDB()
// returns just the form section, so you still need to append child within the actual event
// being exported to mainComponent.js to be called in the eventButton.eventListener()

const addEventForm = () => {
    const domContainer = document.querySelector("#dashboard-container")
    domContainer.innerHTML = ""
    domContainer.appendChild(createNav())
    domContainer.appendChild(eventFormElement())
  }

  export {addEventForm}