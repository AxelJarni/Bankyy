
/* Function called by AJAX request */
function getArticles(articles) { 
    let cardContainer = document.getElementById("cardContainer");
    for (article of articles) {
        /* Have to call/create an other function to create the card or else only 1 card was displayed instead of 5 */
        let create = createArticle(article);
        cardContainer.appendChild(create);
    };
};

/* Function creating the card in HTML and getting the content from API directly*/
function createArticle(article) {
    /* Creating 2 elements necessary to appendChild() later on */
    let cardSpace = document.createElement("div");
    cardSpace.classList.add("col-12", "col-md-6", "col-lg-4")
    let card = document.createElement("article");
    card.classList.add("card", "m-3");
    /*Adding HTML code of the card with content from API */
    card.innerHTML =
    `
    <div class="card-header">
        <h3>${article.id}<h4>
    </div>
    <div class="card-body">
        <h4 class="card-title">${article.titre}</h4>
        <p class="card-text">${article.contenu}</p>
        <a href="#" class="btn btn-primary">Lire l'article</a>
    </div>`;
    cardSpace.appendChild(card);
    /* Return the div element with all the content. 30min lost on this single line...*/
    return cardSpace;
}

/*Ajax request */
let httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === 4 && httpRequest.status === 200) {
        let articles = JSON.parse(httpRequest.responseText);
        getArticles(articles);
    }
}
httpRequest.open(`GET`, `https://oc-jswebsrv.herokuapp.com/api/articles`, true);
httpRequest.send();