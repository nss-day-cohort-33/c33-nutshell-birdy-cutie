import {getEventsFromDB} from "./helpers.js"
import {API} from "../api.js"
// this function gets the friends Data and pushes the Id's to an array
const addEventsToDOM = () => {
    let id = +sessionStorage.getItem("userId")
    console.log(id);
    let idArr = []
    // call the friends DB
    API.getData("friends").then(data =>{
        // create an empty arr to send id's to
        data.filter( key => {
            // This if statement allows only objects with the current user's id to be looked at
            if (key.userId_1 === id || key.userId_2 === id) {
                // set an empty array to hold friends' id's
                //  set friendShipId variable to hold relationship Id
                for (let foo of Object.entries(key)) {
                    let userArr = foo[0]
                    let splitArr = userArr.split("_")
                    // if the key has userId then it will send the key value to the end of the array
                    if (splitArr[0] === "userId") {
                        idArr.push(foo[1])
                    }
                }
            }
        })
        getEventsFromDB(idArr);
    })
}
export {addEventsToDOM}