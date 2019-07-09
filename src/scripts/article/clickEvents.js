import { articleClick } from "./mainArticle.js"
import { API } from "../api.js"


function editBtnClicked(data){
    const domContainer = document.querySelector("#data-container")
    articleClick(API.editData)
    let hiddenId = document.createElement("input")
    hiddenId.setAttribute("id", "article-id")
    hiddenId.setAttribute("hidden", true)
    hiddenId.setAttribute("value", data.id)
    domContainer.appendChild(hiddenId)
    let hiddenTimestamp = document.createElement("input")
    hiddenTimestamp.setAttribute("id", "article-timestamp")
    hiddenTimestamp.setAttribute("hidden", true)
    hiddenTimestamp.setAttribute("value", data.timestamp)
    domContainer.appendChild(hiddenTimestamp)
    let titlePointer = document.querySelector("#article-title")
    let urlPointer = document.querySelector("#article-url")
    let synopsisPointer = document.querySelector("#article-synopsis")
    let datePointer = document.querySelector("#article-date")
    titlePointer.setAttribute("value", data.title)
    urlPointer.setAttribute("value", data.url)
    synopsisPointer.textContent = data.synopsis
    datePointer.setAttribute("value", data.date)
}

export { editBtnClicked }