import {welcomeComponent} from "./welcome/welcomeComponent.js"

import { brotliDecompressSync } from "zlib";

const domContainer = document.querySelector("#dashboard-container")

function mainEntryToDom(func1,func2){
    domContainer.appendChild(func1)
    domContainer.appendChild(func2)
}

//function to add dom components
function dashToDOM () {
    domContainer.appendChild(welcomeComponent())
}
export {mainEntryToDom, dashToDOM}