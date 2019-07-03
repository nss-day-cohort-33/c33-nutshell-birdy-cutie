import { brotliDecompressSync } from "zlib";

const domContainer = document.querySelector("#dashboard-container")

function mainEntryToDom(func1,func2){
    domContainer.appendChild(func1)
    domContainer.appendChild(func2)
}
export {mainEntryToDom}