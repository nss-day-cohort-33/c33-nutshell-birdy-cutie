import { API } from "../api.js"
import {mainEntryToDom} from "../mainEntryToDom.js"
import { createDashboard, createNav } from "../mainComponent.js"

const domContainer = document.querySelector("#dashboard-container")

function createArticleForm(){
    return `<form id="article-form">
    <section>
      <fieldset>
        <label>title</label>
        <input type="text" name="article-title" id="article-title" />
      </fieldset>
    </section>
    <section>
      <fieldset>
        <label>URL</label>
        <input type="text" name="article-url" id="article-url" />
      </fieldset>
    </section>
    <section>
      <fieldset>
        <label>synopsis</label>
        <textarea name="article-synopsis" id="article-synopsis" cols="30" rows="5"></textarea>
      </fieldset>
    </section>
    <section>
        <fieldset>
          <label>date</label>
          <input type="text" name="article-date" id="article-date" />
        </fieldset>
      </section>
  </form>`
}

function createSubmitArticleBtn(){
    let SubmitBtn = document.createElement("button")
    SubmitBtn.setAttribute("id", "article-submit-btn")
    SubmitBtn.textContent = "Submit"
    SubmitBtn.addEventListener("click", event => {
        let userId = +sessionStorage.getItem("userId")
        let title = document.getElementById("article-title").value
        let url = document.getElementById("article-url").value
        let synopsis = document.getElementById("article-synopsis").value
        let date = document.getElementById("article-date").value
        let newArticle = createArticle(userId,title, url, synopsis, date)
        console.log(newArticle)
        API.addData("articles",newArticle)
        .then( data => {
            domContainer.innerHTML = ""
                mainEntryToDom(createNav(), createDashboard())
        })


    })
    return SubmitBtn
}

function createArticle(userId,title,url,synopsis,date){
    return {
        userId,
        title,
        url,
        synopsis,
        date
    }
}

export { createArticleForm, createSubmitArticleBtn }