import { API } from "../api";
import { messageComponent } from "./messageComponent.js"
import { buildMessageObj, messageInputLength } from "./chatHelpers.js"

// make sure scroll focus to bottom

function messageBtnListener(){
    let userId = +sessionStorage.getItem("userId")
    let username = ""
    let message = document.querySelector("#message-input")
    let timeStamp = Date.now()
    let messageLength = messageInputLength(message.value)
    let chatPointer = document.querySelector("#chat-message-div")
    if (messageLength === true ){
        API.getData("users", userId)
        .then(data => {
            username = data.username
            API.addData("messages", buildMessageObj(userId, username, message.value, timeStamp))
            .then (data => {
                API.getData("messages")
                .then(data => {
                    let timeStampSort = data.sort((time1, time2)=>{
                        return time1 - time2
                    })
                    chatPointer.innerHTML = ""
                    for(let i = timeStampSort.length - 15; i < timeStampSort.length; i++) {
                        chatPointer.appendChild(messageComponent(timeStampSort[i], userId))
                    };
                    message.value = ""
                })
        })
    })
}
}



export {messageBtnListener}