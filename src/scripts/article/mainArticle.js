import { createArticleForm, createSubmitArticleBtn } from "./articleHelperFunctions.js"



function articleClick(func){
    const domContainer = document.querySelector("#data-container")
    let articleForm = createArticleForm()
    domContainer.innerHTML = articleForm
    domContainer.appendChild(createSubmitArticleBtn(func))
}

export { articleClick }

