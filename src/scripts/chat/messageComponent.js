import { checkUserIdChat, editMessageButtonListener } from "./chatEvents.js";

// only let double click for edit button once?
function messageComponent(obj, userId) {
  let messageDiv = document.createElement("div");
  messageDiv.setAttribute("id", "message-div");
  let usernameDiv = document.createElement("div");
  usernameDiv.setAttribute("id", "username-div");
  usernameDiv.textContent = `${obj.username}:`;
  let messageHolderDiv = document.createElement("div");
  messageHolderDiv.setAttribute("id", "messager-holder-div");
  messageHolderDiv.textContent = `${obj.message}`;
  let hiddenInput = document.createElement("input");
  hiddenInput.setAttribute("type", "hidden");
  hiddenInput.value = "";
  messageDiv.appendChild(usernameDiv);
  messageDiv.appendChild(messageHolderDiv);
  messageDiv.appendChild(hiddenInput);
  let editMessageButton = document.createElement("button");
  editMessageButton.setAttribute("id", `edit-message-btn--${obj.id}`);
  editMessageButton.textContent = "Edit";
  // editMessageButton.style.display = "display"
  messageHolderDiv.addEventListener("dblclick", event => {
    checkUserIdChat(obj.userId, userId, messageDiv, editMessageButton);
    editMessageButton.addEventListener("click", event => {
      editMessageButtonListener(event, hiddenInput);
    });
    messageHolderDiv.addEventListener("click", event => {
      let editButtonClick = document.querySelector(
        `#edit-message-btn--${obj.id}`
      );
      editButtonClick.style.display = "none";
    });
  });
  return messageDiv;
}

export { messageComponent };
