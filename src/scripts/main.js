import {createNav, createDashboard} from "./mainComponent.js"
import {mainEntryToDom, dashToDOM} from "./mainEntryToDom.js"
import {API} from "./api.js"
import "./tasks/eventlisteners.js"
if (sessionStorage.getItem("userId")) {
    mainEntryToDom(createNav(), createDashboard())
} else {
    dashToDOM()
}