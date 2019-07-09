import {
  checkUserIdChatListener,
  editMessageButtonListener, usernameAddFriendListener
} from "./chatEvents.js";




// only let double click for edit button once?
function messageComponent(obj, userId) {
  let messageDiv = document.createElement("div");
  messageDiv.setAttribute("id", "message-div");
  let usernameDiv = document.createElement("div");
  usernameDiv.setAttribute("id", `username-div--${obj.userId}`);
  usernameDiv.textContent = `${obj.username}:`;
  let messageHolderDiv = document.createElement("div");
  messageHolderDiv.setAttribute("id", `messager-holder-div--${obj.id}`);
  messageHolderDiv.textContent = `${obj.message}`;
  messageDiv.appendChild(usernameDiv);
  messageDiv.appendChild(messageHolderDiv);
  let editMessageButton = document.createElement("button");
  editMessageButton.setAttribute("id", `edit-message-btn--${obj.id}`);
  editMessageButton.textContent = "Edit";
  messageHolderDiv.addEventListener("dblclick", event => {
    checkUserIdChatListener(obj.userId, userId, messageDiv, editMessageButton);
    if ((editMessageButton.style.display = "block"))
      messageHolderDiv.addEventListener("click", event => {
        editMessageButton.style.display = "none";
      });
    editMessageButton.addEventListener("click", event => {
      editMessageButtonListener(event, messageHolderDiv, messageDiv);
    });
  });
  usernameDiv.addEventListener("dblclick", event => {
    usernameAddFriendListener(userId)
  });
  return messageDiv;
}



export { messageComponent };
