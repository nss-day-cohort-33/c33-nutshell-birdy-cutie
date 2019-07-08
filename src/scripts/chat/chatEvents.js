import { API } from "../api";
import { buildMessageObj, messageInputLength } from "./chatHelpers.js";
import { populateDom } from "../main";

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
        populateDom();
      });
    });
  }
}

function checkUserIdChatListener(
  userIdcheck,
  userId,
  messageDiv,
  editMessageButton
) {
  if (userIdcheck === userId) {
    messageDiv.appendChild(editMessageButton);
  }
}

function editMessageButtonListener(event, messageHolderDiv, messageDiv) {
  messageHolderDiv.style.display = "none";
  let editButtonId = event.target.id;
  let editButtonArr = editButtonId.split("--");
  let editButtonIdNum = editButtonArr[1];
  let editMessageInput = document.createElement("input");
  editMessageInput.setAttribute("id", `edit-message-input--${editButtonIdNum}`);
  messageDiv.appendChild(editMessageInput);
  fetch(`http://localhost:8088/messages/${editButtonIdNum}`)
    .then(data => data.json())
    .then(messageEdit => {
      editMessageInput.value = messageEdit.message;
      editMessageInput.focus();
      document.querySelector(
        `#edit-message-btn--${messageEdit.id}`
      ).style.display = "none";
      editMessageInput.addEventListener("keypress", event => {
        saveEditListener(event, messageEdit, editButtonIdNum);
      });
    });
}

function saveEditListener(event, messageEdit, editButtonIdNum) {
  if (event.keyCode === 13) {
    messageEdit.message = document.querySelector(
      `#edit-message-input--${editButtonIdNum}`
    ).value;
    API.editData("messages", messageEdit).then(data => {
      populateDom();
    });
  }
}

export {
  messageBtnListener,
  checkUserIdChatListener,
  editMessageButtonListener
};
