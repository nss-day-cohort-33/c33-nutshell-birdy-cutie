import { API } from "../api";
import { buildMessageObj, messageInputLength } from "./chatHelpers.js";
import { entriesToChat } from "./entriesToChat.js";

function messageBtnListener() {
  let userId = +sessionStorage.getItem("userId");
  let username = "";
  let message = document.querySelector("#message-input");
  let timeStamp = Date.now();
  let messageLength = messageInputLength(message.value);
  if (messageLength === true) {
    API.getData("users", userId).then(data => {
      username = data.username;
      API.addData(
        "messages",
        buildMessageObj(userId, username, message.value, timeStamp)
      ).then(data => {
        message.value = "";
        entriesToChat();
      });
    });
  }
}

function checkUserIdChat(userIdcheck, userId, messageDiv, editMessageButton) {
  if (userIdcheck === userId) {
    messageDiv.appendChild(editMessageButton);
  }
}

function editMessageButtonListener(
  event,
  hiddenInput,
  messageHolderDiv,
  messageDiv
) {
  messageHolderDiv.style.display = "none";
  let editMessageInput = document.createElement("input");
  messageDiv.appendChild(editMessageInput);
  let editButtonId = event.target.id;
  let editButtonArr = editButtonId.split("--");
  let editButtonIdNum = editButtonArr[1];
  hiddenInput.value = editButtonIdNum;
  fetch(`http://localhost:8088/messages/${editButtonIdNum}`).then(data =>
    data.json().then(messageEdit => {
      editMessageInput.value = messageEdit.message;
      editMessageInput.focus();
      document.querySelector(
        `#edit-message-btn--${messageEdit.id}`
      ).style.display = "none";
    })
  );
}
export { messageBtnListener, checkUserIdChat, editMessageButtonListener };
