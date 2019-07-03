function messageComponent(obj){
    let messageDiv = document.createElement("div")
    messageDiv.textContent = `${obj.username}: ${obj.message}`
    return messageDiv
}

export {messageComponent}