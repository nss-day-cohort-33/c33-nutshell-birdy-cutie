import { API } from "../api.js"
import { createArticleCard } from "./articleHelperFunctions.js"


function addArticleToDom(){
    let articlePointer = document.querySelector("#article-div")
    let currentUserId = +sessionStorage.getItem("userId")
    articlePointer.innerHTML = "<h4>Articles</h4>"
    API.getData("articles")
    .then(data => {
        let newData =  data.filter( article => {
            if (article.userId === currentUserId) {
                return article
            }
        })
        newData.forEach(currentArticle => {
            let articleCard = createArticleCard(currentArticle)
             articlePointer.appendChild(articleCard)
        });


    })
}

export { addArticleToDom }