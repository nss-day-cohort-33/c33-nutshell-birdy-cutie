import { API } from "../api";
import { messageComponent } from "./messageComponent.js"
import { buildMessageObj, messageInputLength } from "./chatHelpers.js"

function messageBtnListener(){
    let userId = +sessionStorage.getItem("userId")
    let username = ""
    let message = document.querySelector("#message-input").value
    let timeStamp = Date.now()
    let messageLength = messageInputLength(message)
    if (messageLength === true ){
    API.getData("users", userId)
    .then(data => {
        username = data.username
        API.addData("messages", buildMessageObj(userId, username, message, timeStamp))
        .then (data => {
            API.getData("messages")
            .then(data => {
                let timeStampSort = data.sort((time1, time2)=>{
                    return time1 - time2
                })
                for(let i = timeStampSort.length - 10; i < timeStampSort.length; i++) {
                    let chatPointer = document.querySelector("#chat-div")
                    chatPointer.appendChild(messageComponent(timeStampSort[i]))
                };
            })
        })
    })
}
}

export {messageBtnListener}