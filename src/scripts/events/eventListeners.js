import {addEventToDB} from "./addEventsToDB.js"

// create event listener function for delete event button
// being called in eventsHTML()

const delBtnListener = ( btn) => {
    btn.addEventListener("click", () => {
        let delId = event.target.id
        let delSplit = delId.split("-")
        console.log(delSplit);
        console.log("edit button works at:", delSplit[1])
    })
}

// create event listener function for edit event button
// being called in eventsHTML()


const editBtnListener = ( btn) => {
    btn.addEventListener("click", () => {
        let editId = event.target.id
        let editSplit = editId.split("-")
        console.log(editId)
        console.log(editSplit);
        console.log("edit button works at:", editSplit[1])
    })
}
const saveBtnListener = ( btn) => {
    btn.addEventListener("click", () => {
        let event_nameKey = document.querySelector("#event-name-input")
        let dateKey = document.querySelector("#event-date-input")
        let timeKey = document.querySelector("#event-time-input")
        let locationKey = document.querySelector("#event-location-input")
        const domContainer = document.querySelector("#dashboard-container")
        if (event_nameKey && dateKey && timeKey && locationKey) {
            addEventToDB(event_nameKey, dateKey, timeKey, locationKey)
        }
    })
}
export {delBtnListener, editBtnListener, saveBtnListener}