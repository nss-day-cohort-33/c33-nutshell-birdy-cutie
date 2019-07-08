import { API } from "../api";
import { messageComponent } from "./messageComponent.js"


// make sure scroll focus to bottom


function entriesToChat (){
    let userId = +sessionStorage.getItem("userId")
    let chatPointer = document.querySelector("#chat-message-div")
    API.getData("messages")
                .then(data => {
                    let timeStampSort = data.sort((time1, time2)=>{
                        return time1 - time2
                    })
                    chatPointer.innerHTML = ""
                    for(let i = 0; i < timeStampSort.length; i++) {
                        chatPointer.appendChild(messageComponent(timeStampSort[i], userId))
                    };
                })
}



export {entriesToChat}