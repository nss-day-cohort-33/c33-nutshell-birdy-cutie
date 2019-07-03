import { API } from "../api";
import { messageComponent } from "./messageComponent.js"
import { buildMessageObj } from "./chatHelpers.js"

function messageBtnListener(){
    let userId = +sessionStorage.getItem("userId")
    let username = ""
    let message = document.querySelector("#message-input").value
    let timeStamp = Date.now()
    API.getData("users", userId)
    .then(data => {
        username = data.username
        API.addData("messages", buildMessageObj(userId, username, message, timeStamp))
        .then (data => {
            API.getData("messages")
            .then(data => {
                let timeStampSort = data.sort((time1, time2)=>{
                    return time2 - time1
                })
                timeStampSort.forEach(obj => {
                    let chatPointer = document.querySelector("#chat-div")
                    chatPointer.appendChild(messageComponent(obj))
                });
            })
        })
    })
}

export {messageBtnListener}