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
    if (messageLength === true ){
        API.getData("users", userId)
        .then(data => {
            username = data.username
            API.addData("messages", buildMessageObj(userId, username, message.value, timeStamp))
            .then (data => {
                message.value = ""
                entriesToChat()
            })
        })
    }
}

function entriesToChat (){
    let userId = +sessionStorage.getItem("userId")
    let chatPointer = document.querySelector("#chat-message-div")
    API.getData("messages")
                .then(data => {
                    let timeStampSort = data.sort((time1, time2)=>{
                        return time1 - time2
                    })
                    chatPointer.innerHTML = ""
                    for(let i = timeStampSort.length - 15; i < timeStampSort.length; i++) {
                        chatPointer.appendChild(messageComponent(timeStampSort[i], userId))
                    };
                })
}



export {messageBtnListener}