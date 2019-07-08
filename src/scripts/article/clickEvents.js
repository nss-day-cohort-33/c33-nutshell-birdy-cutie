import { articleClick } from "./mainArticle.js"
import { API } from "../api.js"

function editBtnClicked(data){
    articleClick(API.editData)
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