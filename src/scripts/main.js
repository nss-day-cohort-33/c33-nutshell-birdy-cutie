import {createNav, createDashboard} from "./mainComponent.js"
import {mainEntryToDom, dashToDOM} from "./mainEntryToDom.js"
import {addArticleToDom } from "./article/addArticleToDOM.js"
import {populateTaskContainer } from "./tasks/taskToDom.js"
import { entriesToChat } from "./chat/entriesToChat.js"
if (sessionStorage.getItem("userId")) {
    mainEntryToDom(createNav(), createDashboard())
    populateDom()

} else {
    dashToDOM()
}


function populateDom(){
    addArticleToDom()
    populateTaskContainer()
    entriesToChat()
}

export {populateDom }
