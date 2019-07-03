import {createNav, createDashboard} from "./mainComponent.js"
import {mainEntryToDom, dashToDOM} from "./mainEntryToDom.js"
if (sessionStorage.getItem("userId")) {
    mainEntryToDom(createNav(), createDashboard())
} else {
    dashToDOM()
}
