import {checkUserIdChat, editMessageButtonListener} from "./chatEvents.js";

// only let double click for edit button once?
function messageComponent(obj, userId) {
    let messageP = document.createElement("p");
    messageP.setAttribute("id", "message-p");
    let usernameDiv = document.createElement("div")
    usernameDiv.setAttribute("id", "username-div")
    usernameDiv.textContent = `${obj.username}:`
    let messageHolderDiv = document.createElement("div")
    messageHolderDiv.setAttribute("id", "messager-holder-div")
    messageHolderDiv.textContent = `${obj.message}`
    let hiddenInput = document.createElement("input")
    hiddenInput.setAttribute("type", "hidden")
    hiddenInput.value = ""
    messageP.appendChild(usernameDiv)
    messageP.appendChild(messageHolderDiv)
    messageP.appendChild(hiddenInput)
    let editMessageButton = document.createElement("button");
    editMessageButton.setAttribute("id", `edit-message-btn--${obj.id}`);
    editMessageButton.textContent = "Edit";
    // editMessageButton.style.display = "display"
    messageHolderDiv.addEventListener("dblclick", event => {
      checkUserIdChat(obj.userId, userId, messageP, editMessageButton)
            editMessageButton.addEventListener("click", event =>{
              editMessageButtonListener(event, hiddenInput)
        })
      }
    );
    messageHolderDiv.addEventListener("click", event => {
      document.querySelector(`#edit-message-btn--${obj.id}`).style.display = "none";
    });
  return messageP;
}


export { messageComponent };
