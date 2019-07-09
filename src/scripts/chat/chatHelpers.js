import {API} from "../api"
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

function usernameAddFriendFilter(usernameId, userId) {
  return API.getData("friends").then(data => {
    let idArr = data.filter(key => {
      if (
        (key.userId_1 === usernameId && key.userId_2 === userId) ||
        (key.userId_2 === usernameId && key.userId_1 === userId)
      ) {
        for (let foo of Object.entries(key)) {
          let userArr = foo[0];
          let splitArr = userArr.split("_");
          if (splitArr[0] === "userId") {
            return +foo[1];
          }
        }
      }
    });
    return idArr;
  });
}

export { buildMessageObj, messageInputLength,usernameAddFriendFilter };
