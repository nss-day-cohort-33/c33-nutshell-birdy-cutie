function checkUserIdChat (userIdcheck, userId, messageP, editMessageButton){
    if (userIdcheck === userId) {
        messageP.appendChild(editMessageButton);
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
export {checkUserIdChat, editMessageButtonListener}