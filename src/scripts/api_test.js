import { API } from "./api.js"

// API.getData("users")
// .then(data => {
//     let thisThing = data
//     console.log(thisThing)
// })

// API.getData("users", 1)
// .then(data => {
//     let thisThing = data
//     console.log(thisThing)
// })

// API.getData("messages", "?_expand=user")
// .then(data => {
//     console.log("help")
//     let thisThing = data
//     console.log(thisThing)
// })
// //  API.addData("messages",createMessage(2, "i typed something"))
// //  .then(data => {
// //      API.getData("messages").then(things => {
// //          console.log(things)
// //      })
// //  })
// //  console.log(createMessage(1, "i typed something"))
// API.deleteData("messages", 16).then(data =>
//     API.getData(messages).then( newData => console.log(newData))
//     )



function createMessage(userId, message){
    return {
        userId: userId,
        message: message
    }
}
console.log("something")