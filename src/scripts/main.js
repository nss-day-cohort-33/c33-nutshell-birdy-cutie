import {createNav, createDashboard} from "./mainComponent.js"
import {mainEntryToDom, dashToDOM} from "./mainEntryToDom.js"
import {API} from "./api.js"
import "./tasks/eventlisteners.js"
if (sessionStorage.getItem("userId")) {
    mainEntryToDom(createNav(), createDashboard())
} else {
    dashToDOM()
}

API.getData("friends").then(data =>{
    let friendArr = data.filter( key => {
        for (let foo of Object.entries(key)) {
            let userArr = foo[0]
            let splitArr = userArr.split("-")
            let id = +sessionStorage.getItem("userId")
            if (splitArr[0] === "userId" && foo[1] !== id) {
            //     let id = key.newString
            //     console.log(id);
             API.getData("users", foo[1]).then(data => console.log(data))
            }
        }
    })

})