
const mainNewsUL = document.getElementById('mainNewsUL')



const newsItems = news.articles.map(function(results) {

    return `
        <li>
            <img src = ${results.urlToImage} alt = "Broken Link"/>
            <h2 class = "newsTitle">${results.title}</h2>
            <p class = "description">${results.description ?? ''}</p>
            <p>${results.author ?? ''}</p>
            <a href = ${results.url ?? ''}>LINK TO FULL ARTICLE</a>
            <p>Date published: <br>${results.publishedAt ?? ''}</p>
        </li>
    `
})
mainNewsUL.innerHTML = newsItems.join("")


