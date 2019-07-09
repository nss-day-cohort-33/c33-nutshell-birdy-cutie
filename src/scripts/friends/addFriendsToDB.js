import {API} from "../api.js"
// create a factory function for friends obj
const createFriendObj = (userId, friendId) => {
    let friendObj = {
        userId_1: null,
        userId_2: null
    }

    friendObj.userId_1 = userId
    friendObj.userId_2 = friendId

    return friendObj
}
// created a function that calls the factory function to add a friends obj to the DB
const addFriend = friendId => {

    let currentUserId = +sessionStorage.getItem("userId")
    let friendUserId = friendId
    let newFriendRelationshipObj = createFriendObj(currentUserId, friendUserId)
    API.addData("friends", newFriendRelationshipObj)
}
export {addFriend, createFriendObj}
