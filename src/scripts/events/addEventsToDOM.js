import {addEventElementToDOM} from "./createEventElements.js"
import {filterUserEvents} from "./helpers.js"
import {API} from "../api.js"

const addEventsToDOM = () => {
    let userIdKey = +sessionStorage.getItem("userId")
    API.getData("events").then( data => {
        let usrEvent =  filterUserEvents(data, userIdKey)
        usrEvent.forEach( dataForDOM => {
            addEventElementToDOM(dataForDOM)
        });
    })
}
export {addEventsToDOM}