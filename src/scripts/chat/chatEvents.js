import {API} from "../api";
import { buildMessageObj, messageInputLength } from "./chatHelpers.js";
import {entriesToChat} from "./entriesToChat.js"

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

function checkUserIdChat (userIdcheck, userId, messageDiv, editMessageButton){
    if (userIdcheck === userId) {
        messageDiv.appendChild(editMessageButton);
}
}

function editMessageButtonListener (event, hiddenInput){
    let editButtonId = event.target.id
    let editButtonArr = editButtonId.split("--")
    let editButtonIdNum = editButtonArr[1]
    hiddenInput.value = editButtonIdNum
  let messageInput = document.querySelector("#message-input")
  let saveBtn = document.querySelector("#post-message")
  saveBtn.textContent = "Update Message"
  fetch(`http://localhost:8088/messages/${editButtonIdNum}`)
  .then(data => data.json()
  .then(messageEdit => {
    messageInput.value = messageEdit.message
    messageInput.focus()
    document.querySelector(`#edit-message-btn--${messageEdit.id}`).style.display = "none"

  }))
}
export {messageBtnListener, checkUserIdChat, editMessageButtonListener}