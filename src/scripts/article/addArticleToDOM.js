import { API } from "../api.js";
import { createArticleCard } from "./articleHelperFunctions.js";
import { getFriends } from "./friends.js";
import { runInNewContext } from "vm";

function addArticleToDom() {
  let articlePointer = document.querySelector("#article-div");
  let currentUserId = +sessionStorage.getItem("userId");
  articlePointer.innerHTML = "<h4>Articles</h4>";
  let friendArr = [];
  getFriends().then(data => {
    friendArr = data;
    for (let i = 0; i < friendArr.length; i++) {
      if (friendArr[i] === currentUserId) {
        delete friendArr[i];
      }
    }
    console.log(friendArr);
    API.getData("articles", "?_expand=user").then(data => {
      let newData = data.filter(article => {
        if (article.userId === currentUserId) {
          return article;
        }
        for(let i = 0; i < friendArr.length; i++){
            if(friendArr[i] === article.userId){
                return article
            }
        }
      });
      newData.sort((curr, next) =>{
        return curr.timestamp - next.timestamp
      })
      newData.forEach(currentArticle => {
        let articleCard = createArticleCard(currentArticle);
        articlePointer.appendChild(articleCard);
        if(currentArticle.userId !== currentUserId){
            document.querySelector(`#edit-${currentArticle.id}`).remove()
            document.querySelector(`#delete-${currentArticle.id}`).remove()
        }

      });
    });
  });

  console.log(currentUserId);

  // console.log friendArr)
}

export { addArticleToDom };
