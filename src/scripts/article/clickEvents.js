import { articleClick } from "./mainArticle.js"
import { API } from "../api.js"

// document.getElementById("reg-btn").style.visibility = "hidden"

function editBtnClicked(data){
    const domContainer = document.querySelector("#data-container")
    articleClick(API.editData)
    let hiddenId = document.createElement("input")
    console.log(hiddenId)
    hiddenId.setAttribute("id", "article-id")
    hiddenId.setAttribute("hidden", true)
    hiddenId.setAttribute("value", data.id)
    domContainer.appendChild(hiddenId)
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