import { API } from "./api.js"

API.getData("users")
.then(data => {
    let thisThing = data
    console.log(thisThing)
})

API.getData("users", 1)
.then(data => {
    let thisThing = data
    console.log(thisThing)
})

console.log("something")