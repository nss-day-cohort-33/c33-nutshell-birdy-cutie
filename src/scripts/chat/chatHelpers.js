function buildMessageObj(userId, username, message, timestamp) {
  return {
    userId,
    username,
    message,
    timestamp
  };
}

function messageInputLength(message) {
  if (message.length > 45) {
    alert("Please use less then 45 characters!");
    return false;
  }
  if (message === "") {
    alert("Please insert a message!");
    return false;
  }
  return true;
}

export { buildMessageObj, messageInputLength };
