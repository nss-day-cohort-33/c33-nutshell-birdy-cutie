function buildMessageObj(userId, username, message, timestamp){
    return {
        userId,
        username,
        message,
        timestamp,
    }
}

export {buildMessageObj}